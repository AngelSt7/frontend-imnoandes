
import { buildMetadata } from '@/src/config';
import { Heading } from '@/src/features/auth';
import { CompleteAccountForm } from '@/src/features/auth/subfeatures/CompleteAccount';
import { User } from '@/src/features/shared/services';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function generateMetadata() {
  return buildMetadata({
    title: "Completar perfil | Inmoandes",
    description: "Completa tu perfil en Inmoandes para comenzar a usar la plataforma",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/completar-perfil`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
    robots: "noindex, nofollow",
  })
}

export default async function Page({ searchParams }: { searchParams: { token: string } }) {
  try {
    const { token } = await searchParams

    const cookieStore = await cookies();
    const jwt = cookieStore.get("SESSION")?.value;

    if (!jwt) return redirect('/auth/iniciar-sesion');
    if (token !== jwt) return redirect('/auth/iniciar-sesion');

    const user = await User.infoAccount(jwt);
    if (user)
    return (<>
      <Heading tittle="Completa tu perfil" />
      <CompleteAccountForm user={user}  />
    </>
    )
  } catch (error) {
    return redirect('/auth/iniciar-sesion');
  }
}
