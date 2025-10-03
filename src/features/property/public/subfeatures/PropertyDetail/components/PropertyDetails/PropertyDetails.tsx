import { formatCurrency } from "@/src/myLib/utils"
import { MapStatic } from "@/src/myLib/components/Map"
import { PROPERTY_CATEGORY_TRANSLATE, PROPERTY_TYPE_TRANSLATE } from "@/src/features/property/admin/constants"
import { PropertyCharacteristics, PropertyDescription, ToopLip, FormContact, ModalContact, Share } from "./components"
import { PropertyServices } from "./components/Services"
import { PublicProperty } from "@/src/features/property/public/interfaces"


export function PropertyDetails({ property }: { property: PublicProperty }) {
    const address = `${property.address}, ${property.district}, ${property.department}`

    return (
        <section className="w-full py-6 flex gap-8">

            <article className="w-full">
                <header className="mb-4 space-y-2 pb-2 border-b border-gray-200 flex flex-col md:flex-row justify-between md:items-center">
                    <div>
                        <p className="text-sm xs:text-base">
                            {PROPERTY_CATEGORY_TRANSLATE[property.propertyCategory]} ·{" "}
                            {property.area} m² ·{" "}
                            {property.bedrooms && `${property.bedrooms} Dormitorios`}
                        </p>
                        <h1 className="text-2xl xs:text-3xl font-bold mb-2 font-poppins">{property.name}</h1>
                        <p className="font-medium text-xl font-poppins">
                            {PROPERTY_TYPE_TRANSLATE[property.propertyType]}
                            <span className=" text-lg sm:text-xl font-medium mt-4 ">
                                {" "}
                                {formatCurrency(property.price, property.currency)}
                            </span>
                        </p>
                    </div>
                    <Share />
                </header>

                <MapStatic
                    latitude={property.latitude}
                    longitude={property.longitude}
                    address={address}
                />

                <PropertyCharacteristics property={property} />
                <ToopLip />
                <PropertyDescription property={property} />
                <PropertyServices services={property.services} />

            </article>

            <aside className="hidden xl:block xl:min-w-[320px]">
                <div className="sticky top-[92px]">
                    <FormContact
                        phone={property.phone}
                        address={address}
                        ownerEmail={property.email}
                    />
                    <ModalContact
                        phone={property.phone}
                        address={address}
                        ownerEmail={property.email}
                    />
                </div>
            </aside>
        </section>
    )
}
