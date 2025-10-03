'use client'
import { LoginModal } from "@/src/features/property/public/subfeatures/LoginModal";
import { useUser } from "@/src/features/user";
import { useAppStore } from "@/src/store/useAppStore";
import Link from "next/link";

export function FinalCTASection() {
  const onChangeLogin = useAppStore((state) => state.onChangeLogin);
  const user = useUser();
  const requireLogin = !user || !user.birthDate || !user.phone;

  return (
    <>
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-poppins">
            ¿Listo para Publicar tu Propiedad?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Ahora que conoces todos los secretos para tomar fotografías increíbles, es momento de mostrar tu propiedad al mundo y conectar con miles de potenciales interesados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {requireLogin ? (
              <button
                onClick={onChangeLogin}
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Publicar Propiedad
              </button>
            ) : (
              <Link
                href="/dashboard/propiedades?page=1&limit=10"
                target="_blank"
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Publicar Propiedad
              </Link>
            )}

            <Link
              href="/es/contacto"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </section>
      <LoginModal />
    </>
  )
}
