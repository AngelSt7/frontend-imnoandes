import { redirect } from "next/navigation";
import { resolveTittle, Search, useBuildSearchFilters, useParseSearchSlug } from "@/src/features/property/public/subfeatures/PropertySearch";
import { PropertyPublic, Location } from "@/src/features/property/public/services";
import { buildMetadata } from "@/src/config/metadata";

export const metadata = buildMetadata({
  title: "Buscar propiedades en venta y alquiler",
  description: "Explora miles de propiedades en venta y alquiler. Filtra por ubicación, precio y características para encontrar el hogar perfecto según tus necesidades.",
  url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/buscar/venta-de-departamentos-o-casas?page=1`,
  image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
});

export default async function Page({
  searchParams,
  params
}: {
  searchParams: Promise<Record<string, string | undefined>>,
  params: Promise<any>
}) {
  const awaitedParams = await params
  const awaitedSearchParams = await searchParams

  const { type, categories, locations } = useParseSearchSlug(awaitedParams.search);
  const filters = useBuildSearchFilters(awaitedSearchParams, type, categories, locations);

  const promises: Promise<any>[] = [PropertyPublic.search(filters)];
  if (locations.length > 0) promises.push(Location.list(locations));

  try {
    const [propertiesData, localesData] = await Promise.all(promises);

    const properties = propertiesData;
    const locales = localesData || [];

    if (!properties) return null;
    const tittle = resolveTittle(properties.meta.totalItems, type!, categories, locales);

    return <Search data={properties} locales={locales} tittle={tittle} />;
  } catch (error) {
    redirect(`/es/buscar/venta-de-departamentos-o-casas?page=1`);
  }
}
