'use client'

import { useUser } from "@/src/features/user"
import { CardAction } from "@/src/myLib/components"
import { useAppStore } from "@/src/store/useAppStore"
import { PlusCircle, Camera } from "lucide-react"

export default function TabPostContent() {
  const onChangeLogin = useAppStore((state) => state.onChangeLogin);
  const user = useUser();

  const requireLogin = !user || !user.birthDate || !user.phone;

  return (
    <>
      <CardAction
        title="Publicar mi propiedad"
        description="Vende o alquila tu propiedad de manera rápida y segura. Llega a miles de compradores interesados."
        icon={<PlusCircle className="w-6 h-6 text-orange-600" />}
        bgColor="bg-orange-50"
        buttonText="Publicar ahora"
        iconHover="bg-gray-50 group-hover:bg-orange-100"
        buttonTextColor="text-white"
        highlightButton
        highlightButtonColor="bg-orange-500 group-hover:bg-orange-600"
        bgHoverColor="hover:bg-orange-50"
        borderHoverColor="hover:border-orange-300"
        {...(requireLogin
          ? { onClick: onChangeLogin }
          : { href: "/dashboard/propiedades?page=1&limit=10" } 
        )}
      />

      <CardAction
        title="Cómo tomar mejores fotos"
        description="Tips profesionales para fotografiar tu propiedad y atraer más compradores potenciales."
        icon={<Camera className="w-6 h-6 text-green-600" />}
        buttonText="Ver consejos"
        iconHover="bg-gray-50 group-hover:bg-green-100"
        buttonTextColor="text-green-600"
        bgHoverColor="hover:bg-green-50"
        href="/es/guia-como-tomar-mejores-fotos"
      />

    </>
  )
}
