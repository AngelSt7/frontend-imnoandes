'use client'

import { Heading, LinkToAuth } from "@/src/features/auth/components";
import { LoginOrquest } from "./LoginOrquest";

export function LoginPage({ isModal }: { isModal?: boolean }) {
  return (
    <>
      <Heading tittle="Bienvenido a Inmoandes, por favor inicia sesión" />
      
      <div className="bg-yellow-100 text-yellow-800 border border-yellow-300 px-4 py-2 rounded-md mb-4">
        <p className="font-medium">Cuenta de prueba, debido a que no hay dominio propio.</p>
        <p>Email: <span className="font-semibold">santacruza2000@gmail.com</span></p>
        <p>Contraseña: <span className="font-semibold">Lapiz123*@</span></p>
        <p className="text-sm mt-1">Usa esta cuenta para probar el login y el flujo completo de la app.</p>
      </div>

      <LoginOrquest isModal={isModal} />

      <span>Advertencia: </span>
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
