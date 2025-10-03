import { PublicProperty } from "@/src/features/property/public/interfaces"

export function PropertyDescription({ property }: { property: PublicProperty }) {
  return (
    <section className="mt-6 mb-4 space-y-2 pb-2 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Descripción</h2>
      <p className="text-gray-700">{property.description}</p>

      {property.extraInfo && (
        <section className="mt-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Info adicional</h2>
          <p className="text-gray-700">{property.extraInfo}</p>
        </section>
      )}
    </section>
  )
}
