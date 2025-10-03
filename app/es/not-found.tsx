'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Home, Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center mb-8">
          <Image 
            src="/LogoImnoandes.png" 
            alt="ImnoAndes Logo" 
            width={150} 
            height={50}
            className="h-12 w-auto"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-9xl font-bold text-slate-800 mb-4">404</h1>
          <div className="w-24 h-1 bg-slate-800 mx-auto mb-6"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida. 
          Verifica la URL o regresa al inicio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-800 text-slate-800 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver atrás
          </button>

          <Link
            href="/es"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>

          <a
            href="/es/buscar/venta-de-departamentos-o-casas?page=1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Buscar propiedades
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            ¿Necesitas ayuda?{' '}
            <a href="/es/contacto" className="text-slate-800 hover:underline font-semibold">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
