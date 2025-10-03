export const dynamic = "force-dynamic";

import { buildMetadata } from "@/src/config";
import { LoginPage } from "@/src/features/auth/subfeatures/LoginOrquest";

export async function generateMetadata() {
  return buildMetadata({
    title: "Iniciar sesión | Inmoandes",
    description: "Inicia sesión en Inmoandes para gestionar tus propiedades y publicaciones",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/iniciar-sesion`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  })
}

export default function Page() {
  return <LoginPage />
}
