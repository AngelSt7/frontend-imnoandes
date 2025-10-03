import { PublicProperty } from "@/src/features/property/public/interfaces"
import { serviceColorMap, serviceIconMap } from "./constants"


export function PropertyServices({ services }: {  services: PublicProperty['services'] }) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="space-y-4 mt-6 mb-4 pb-2 border-b border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-gray-900 font-poppins">Servicios</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {services.map((service) => {
          const serviceKey = service.toLowerCase().replaceAll(' ', '-')
          const IconComponent = serviceIconMap[serviceKey]
          const iconColor = serviceColorMap[serviceKey] || 'text-blue-600'
          const serviceName = service
          
          if (!IconComponent) {
            return null
          }

          return (
            <li
              key={service}
              className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <IconComponent 
                size={24} 
                className={`${iconColor} mb-2`}
              />
              <span className="text-sm text-gray-700 text-center font-medium">
                {serviceName}
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}