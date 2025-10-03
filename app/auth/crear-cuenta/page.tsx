export const dynamic = "force-dynamic";

import { buildMetadata } from '@/src/config';
import { Heading, LinkToAuth } from '@/src/features/auth/components/ui'
import { CreateAccount } from '@/src/features/auth/subfeatures/CreateAccount'

export async function generateMetadata() {
  return buildMetadata({
    title: "Crear cuenta | Inmoandes",
    description: "Crea tu cuenta en Inmoandes y comienza a publicar y gestionar propiedades en los Andes",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/crear-cuenta`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  })
}
export default function Page() {
  return (
    <>
      <Heading tittle="Crea tu cuenta en Inmoandes" />
      <CreateAccount />
      <div className=' my-4 flex flex-col sm:flex-row justify-between px-6 gap-2'>
        <LinkToAuth
          href="/auth/iniciar-sesion"
          message="¿Ya tienes cuenta?"
          label="Iniciar sesión"
        />
        <LinkToAuth
          href="/auth/olvido-contrasena"
          message="¿Olvidaste tu contraseña?"
          label="Recuperar acceso"
        />
      </div>
    </>
  )
}