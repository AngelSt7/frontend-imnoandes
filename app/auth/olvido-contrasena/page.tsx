export const dynamic = "force-dynamic";

import { buildMetadata } from '@/src/config';
import { Heading, LinkToAuth } from '@/src/features/auth'
import { ForgotPasswordForm } from '@/src/features/auth/subfeatures/ForgotPassword'

export async function generateMetadata() {
  return buildMetadata({
    title: "Recuperar contraseña | Inmoandes",
    description: "Recupera el acceso a tu cuenta de Inmoandes de forma segura",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/olvido-contrasena`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
    robots: "noindex, nofollow",
  })
}

export default async function Page() {
  return (
    <>
      <Heading tittle="Recupera tu contraseña" />
      <ForgotPasswordForm />
      <div className=' my-4 flex flex-col sm:flex-row justify-between px-6 gap-2'>
        <LinkToAuth
          href="/auth/crear-cuenta"
          message="¿No tienes cuenta?"
          label="Crea una ahora"
        />
        <LinkToAuth
          href="/auth/iniciar-sesion"
          message="¿Ya tienes cuenta?"
          label="Iniciar sesión"
        />
      </div>
    </>
  )
}