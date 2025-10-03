export const dynamic = "force-dynamic";

import { buildMetadata } from '@/src/config';
import { Heading } from '@/src/features/auth';
import { Auth } from '@/src/features/auth/services';
import { ConfirmAccount } from '@/src/features/auth/subfeatures/ConfirmAccount';
import { redirect } from 'next/navigation';
import { validate } from 'uuid';

type PageProps = { params: Promise<{ token: string; }>; };

export async function generateMetadata({ params }: PageProps) {
  const { token } = await params;

  return buildMetadata({
    title: "Confirmar cuenta | Inmoandes",
    description: "Confirma tu cuenta de Inmoandes para activar tu perfil",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/confirmar-cuenta/${token}`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
    robots: "noindex, nofollow",
  })
}

export default async function Page({ params }: PageProps) {
  const { token } = await params;
  try {
    if (!validate(token)) {
      redirect('/auth/iniciar-sesion');
    }
    await Auth.checkToken({ token });
  } catch {
    redirect('/auth/iniciar-sesion');
  }
  return <>
    <Heading tittle="Confirma tu cuenta para iniciar a usar Inmoandes" />
    <ConfirmAccount token={"12354"} />
  </>
}