export const dynamic = "force-dynamic";

import { buildMetadata } from '@/src/config';
import { Heading, LinkToAuth } from '@/src/features/auth'
import { RequestTokenForm } from '@/src/features/auth/subfeatures/RequestToken'

export async function generateMetadata() {
  return buildMetadata({
    title: "Solicitar token | Inmoandes",
    description: "Solicita un nuevo token de verificación para tu cuenta de Inmoandes",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/solicitar-token`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
    robots: "noindex, nofollow",
  })
}

export default async function Page() {
  return (
    <>
      <Heading tittle="Solicitar nuevo código" />
      <RequestTokenForm />
      <div className=' my-4 flex flex-col sm:flex-row justify-between px-6 gap-2'>
        <LinkToAuth
          href="/auth/inciar-sesion"
          message="¿Ya tienes cuenta?"
          label="Iniciar sesión"
        />
        <LinkToAuth
          href="/auth/crear-cuenta"
          message="¿No tienes cuenta?"
          label="Crea una ahora"
        />
      </div>
    </>
  )
}