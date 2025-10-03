'use client'

import { CardAction } from "@/src/myLib/components"
import { BookOpenText } from "lucide-react"
import { Home } from "lucide-react"

export default function TabRentContent() {
  return (
    <>
      <CardAction
        title="Guía para alquilar"
        description="Lo que necesitas saber a la hora de alquilar en un solo lugar."
        icon={<BookOpenText className="w-6 h-6 text-orange-600" />}
        buttonText="Conocer más"
        requiredButton
        buttonTextColor="text-orange-600"
        iconHover="bg-gray-50 group-hover:bg-orange-100"
        bgHoverColor="hover:bg-orange-50"
        href="/es/guia-comprar-alquilar"
      />

      <CardAction
        title="Alquiler de departamentos y casas"
        description="Nuevas propiedades y ofertas de alquiler en IMNOANDES."
        icon={<Home className="w-6 h-6 text-green-600" />}
        buttonText="Ver alquileres"
        requiredButton
        buttonTextColor="text-green-600"
        iconHover="bg-gray-50 group-hover:bg-green-100"
        bgHoverColor="hover:bg-green-50"
        href="/es/buscar/alquiler-de-departamentos-o-casas?page=1&published=0"
      />

    </>
  )
}