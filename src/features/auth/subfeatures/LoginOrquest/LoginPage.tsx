'use client'
import { Heading, LinkToAuth } from "@/src/features/auth/components";
import { LoginOrquest } from "./LoginOrquest";

export function LoginPage({ isModal }: { isModal?: boolean }) {
  return (
    <>
      <Heading tittle="Bienvenido a Inmoandes, por favor inicia sesión" />
      <LoginOrquest isModal={isModal} />
      <div className="my-4 flex flex-col sm:flex-row justify-between px-6 gap-2">
        <LinkToAuth
          href="/auth/crear-cuenta"
          message="¿No tienes cuenta?"
          label="Crea una ahora"
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
