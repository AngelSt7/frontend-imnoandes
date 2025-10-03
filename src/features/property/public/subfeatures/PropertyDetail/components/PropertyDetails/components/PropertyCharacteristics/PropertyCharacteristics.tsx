'use client'
import { PublicProperty } from "@/src/features/property/public/interfaces"
import { usePropertyCharacteristics } from "./usePropertyCharacteristics"

export function PropertyCharacteristics({ property }: { property: PublicProperty }) {
  const { showAll, setShowAll, itemsToShow, data } = usePropertyCharacteristics({ property })

  return (
    <section className="w-full mb-4 space-y-3 pb-2 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Características</h2>

      <ul className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-4">
        {itemsToShow.map((item) => (
          <li
            key={item.name}
            className="flex justify-center items-center flex-col w-full gap-2"
          >
            <div className="text-3xl text-zinc-800 ">
              {item.icon}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-zinc-900 ">
              {item.name}: {item.quantity}
            </p>
          </li>
        ))}
      </ul>

      {data.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      )}
    </section>
  )
}
