'use client'

import { Building2, Phone } from "lucide-react"
import { CardAction } from "@/src/myLib/components"
import { useRouter } from "next/navigation"

export default function TabContactContent() {
  const router = useRouter()
  return (
    <>
      <CardAction
        title="Conoce IMNOANDES"
        description="Toda la información sobre cómo usar nuestro portal ¡y mucho más! Descubre nuestra historia y misión."
        icon={<Building2 className="w-6 h-6 text-blue-600" />}
        buttonText="Conocer más"
        buttonTextColor="text-blue-600"
        iconHover="bg-gray-50 group-hover:bg-blue-100 "
        bgHoverColor="hover:bg-blue-50"
        href="/es/quienes-somos"
      />
      <CardAction
        title="Contáctanos"
        description=" ¿Tienes dudas o necesitas ayuda? Nuestro equipo está listo para asistirte en lo que necesites."
        icon={<Phone className="w-6 h-6 text-green-600" />}
        buttonText="Hablar con nosotros"
        buttonTextColor="text-green-600"
        iconHover="bg-gray-50 group-hover:bg-green-100 "
        bgHoverColor="hover:bg-green-50"
        href="/es/contacto"
      />
    </>
  )
}