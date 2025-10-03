export const dynamic = "force-dynamic";

import { buildMetadata } from "@/src/config";
import { Auth } from "@/src/features/auth";
import { Heading, LinkToAuth } from "@/src/features/auth/components/ui";
import { RecoverPasswordForm } from "@/src/features/auth/subfeatures";
import { redirect } from "next/navigation";
import { validate } from "uuid";

type PageProps = { params: Promise<{ token: string; }>; };

export async function generateMetadata({ params }: PageProps) {
    const { token } = await params;

    return buildMetadata({
        title: "Recuperar contraseña | Inmoandes",
        description: "Recupera tu contraseña de Inmoandes",
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/auth/recuperar-contrasena/${token}`,
        image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
        robots: "noindex, nofollow",
    });
}

export default async function Page({ params }: PageProps) {
    const { token } = await params

    try {
        if (!validate(token)) return redirect('/auth/iniciar-sesion');
        await Auth.checkToken({ token })
    } catch (error) {
        return redirect('/auth/iniciar-sesion');
    }

    return (
        <>
            <Heading tittle="Recupera tu acceso a Inmoandes" />
            <RecoverPasswordForm token={token} />
            <div className='my-4 flex justify-center px-6'>
                <LinkToAuth
                    href="/auth/crear-cuenta"
                    message="¿No tienes cuenta?"
                    label="Crea una ahora"
                />
            </div>
        </>
    )
}