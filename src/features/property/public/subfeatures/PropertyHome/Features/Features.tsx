import { Features as FeaturesData } from './constants'

export function Features() {
  return (
    <section aria-label="Características de Urbania" className="bg-gray-50 mt-12 space-y-6">
        <h2 className='text-h2 font-poppins'>Te acompañamos en cada paso</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FeaturesData.map((feature) => (
            <article 
              key={feature.id}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full" aria-hidden="true">
                  {feature.icon}
                </div>
              </div>
              
              <header>
                <h3 className="font-semibold text-gray-900 text-lg mb-3 font-poppins">
                  {feature.title}
                </h3>
              </header>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
