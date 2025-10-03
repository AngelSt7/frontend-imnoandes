'use client'

import { PropertySearch } from "@/src/features/property/public"
import { useGetFavorites } from "@/src/features/property/public/subfeatures/Favorites/hooks/useGetFavorites"
import { CardProperty, CardPropertySkeleton } from "@/src/features/property/public/subfeatures/PropertySearch"
import { Pagination } from "@/src/myLib"
import Link from "next/link"

export default function Page() {
  const { Properties, isLoading, isFavorite, toggleFavorite } = useGetFavorites()

  return (
    <section className="w-[98%] lg:w-[90%] max-w-[1600px] mx-auto space-y-6 mb-10 md:mt-5 mt-2">
      <div className="flex justify-between items-center">
        <h2 className='text-h2 font-black font-poppins'>Tus Favoritos</h2>
        {(Properties && Properties?.data.length > 0) && (<span className="text-sm text-zinc-500 font-medium">
          {Properties?.meta?.totalItems} propiedades</span>)}
      </div>

      {isLoading ? (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <CardPropertySkeleton key={i} />
          ))}
        </>
      ) : Properties?.data.length === 0 ? (
        <p className="text-zinc-800 font-medium">
          No tienes favoritos{" "}
          <Link
            href="/es/buscar/venta-de-departamentos-o-casas?page=1"
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Busca una propiedad y agrega a tus favoritos
          </Link>
        </p>
      ) : (
        <>
          {Properties?.data.map((property: PropertySearch) => (
            <CardProperty
              key={property.id}
              property={property}
              isFavorite={isFavorite(property.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </>
      )}

      {(Properties && Properties?.data.length > 0) && (
        <div className="flex justify-center">
          <Pagination meta={Properties?.meta} />
        </div>
      )}
    </section>
  )
}
