import Link from "next/link";

export function MissionSection() {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-8 xs:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-300 to-slate-200 rounded-2xl overflow-hidden shadow-2xl hover:-rotate-6 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop"
                alt="Familia feliz en su nuevo hogar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              En ImnoAndes, creemos que cada familia merece encontrar su hogar ideal. Nuestra misión es simplificar el proceso de búsqueda, compra, venta y gestión de propiedades, utilizando tecnología de vanguardia y un equipo humano comprometido.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Trabajamos incansablemente para expandir nuestra red y llevar servicios inmobiliarios profesionales a cada rincón del país, construyendo confianza y relaciones duraderas con nuestros clientes.
            </p>
            <div className="pt-4">
              <Link
                className="inline-block bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors font-poppins"
                href={'/es/contacto'}
              >Contáctanos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
