import { HeaderImages, isValidUuidSegment, OrquestCarrousel, PropertyDetails } from "@/src/features/property/public/subfeatures/PropertyDetail";
import { Metadata } from "next";
import { PropertyPublic } from "@/src/features/property/public/services";
import { notFound, redirect } from "next/navigation";
import { buildMetadata } from "@/src/config/metadata";
import { PropertyTypeDB } from "@/src/features/property/public/subfeatures/PropertySearch";
import { normalize } from "@/src/features/property/public/utils";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const awaitedParams = await params;
    const shortId = awaitedParams.slug.split("-").at(-1);
    if (!shortId || !isValidUuidSegment(shortId)) return {};
    const property = await PropertyPublic.find(shortId);
    if (!property) return {};
    const title = `${property.name} en ${property.district} | ${property.department}`;
    const description =
        property.description?.slice(0, 160) || "Propiedad en venta o alquiler.";
    const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}${property.url}`;
    const image = property.images.filter(img => img.type === "MAIN")[0]?.url || "/default-image.jpg";
    return buildMetadata({ title, description, url, image });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    try {
        const awaitedParams = await params;
        const slug = awaitedParams.slug;
        const url = `/es/inmueble/clasificado/${slug}`;
        const shortId = slug.split("-").at(-1);
        const regex = /^([^ -]+)(?=-de-)/;
        const match = slug.match(regex);

        if (!shortId || !isValidUuidSegment(shortId) || !match || !Object.keys(PropertyTypeDB).includes(match[1])) notFound();

        const [property, carrousel] = await Promise.all([
            PropertyPublic.find(shortId),
            PropertyPublic.carrousel(PropertyTypeDB[match[1]], 5),
        ]);

        if (property && carrousel) {
            const normalizedUrl = normalize(url);
            const normalizedPropertyUrl = normalize(property.url);
            if (normalizedUrl !== normalizedPropertyUrl)  redirect(property.url);
            return (
                <div className="max-w-[95%] mx-auto w-11/12 space-y-3 mt-3">
                    <HeaderImages images={property.images} />
                    <PropertyDetails property={property} />
                    <OrquestCarrousel data={carrousel} />
                </div>
            );
        }

    } catch (error) {
        notFound();
    }
}
