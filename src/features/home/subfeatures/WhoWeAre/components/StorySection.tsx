export function StorySection() {
  return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-poppins">
              Expandiéndonos Rápidamente por el Perú
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              ImnoAndes nace con una visión clara: democratizar el acceso a servicios inmobiliarios de calidad en todo el Perú. Somos una plataforma innovadora que conecta a propietarios, inquilinos y compradores en un ecosistema digital confiable y transparente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              En tiempo récord, hemos logrado expandir nuestra presencia a <strong className="text-slate-800">5 departamentos, 44 provincias y 502 distritos</strong>, convirtiéndonos en una de las plataformas de más rápido crecimiento en el sector inmobiliario peruano.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Nuestro equipo está conformado íntegramente por administradores certificados que gestionan cada propiedad con profesionalismo y dedicación, asegurando que cada familia encuentre el hogar perfecto.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-2xl hover:rotate-6 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                alt="Edificios modernos en Perú"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
