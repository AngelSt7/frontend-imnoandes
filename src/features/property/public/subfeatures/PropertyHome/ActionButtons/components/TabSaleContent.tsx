'use client'

import { CardAction } from "@/src/myLib/components"
import { BookOpenCheck } from "lucide-react"
import { Search } from "lucide-react"

export default function TabSaleContent() {
  return (
    <>

      <CardAction
        title="Guía de compra paso a paso"
        description="Todo lo que necesitas saber para comprar tu primera vivienda sin complicaciones."
        icon={<BookOpenCheck className="w-6 h-6 text-blue-600" />}
        buttonText="Ver guía completa"
        iconHover="bg-gray-50 group-hover:bg-blue-100"
        buttonTextColor="text-blue-600"
        bgHoverColor="hover:bg-blue-50"
        href="/es/guia-comprar-alquilar"
      />

      <CardAction
        title="Buscar propiedades"
        description="Encuentra la propiedad ideal según tus necesidades y presupuesto en nuestro buscador."
        icon={<Search className="w-6 h-6 text-purple-600" />}
        buttonText="Ir al buscador"
        iconHover="bg-gray-50 group-hover:bg-purple-100"
        buttonTextColor="text-purple-600"
        bgHoverColor="hover:bg-purple-50"
        href="/es/buscar/venta-de-departamentos-o-casas?page=1"
      />

    </>
  )
}
