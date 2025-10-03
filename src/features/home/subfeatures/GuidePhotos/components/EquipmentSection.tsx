import { NivelesGrid } from "./LevelsGrid";

export function EquipmentSection() {
  return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-16">
        <div className="bg-white rounded-2xl shadow-lg p-4 xs:p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center font-poppins">
            Equipo Recomendado
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-justify mb-6">
              No necesitas equipo profesional costoso para tomar excelentes fotografías inmobiliarias. La mayoría de los smartphones modernos cuentan con cámaras de alta calidad suficientes para cumplir con todos nuestros requisitos técnicos. Sin embargo, hay algunos elementos que pueden mejorar significativamente tus resultados.
            </p>
            <NivelesGrid />
            <p className="text-gray-700 leading-relaxed text-justify">
              Recuerda que el equipo es secundario. Lo más importante es seguir las técnicas correctas de composición, iluminación y preparación del espacio. Un smartphone bien utilizado puede producir resultados superiores a una cámara profesional mal empleada.
            </p>
          </div>
        </div>
      </section>
  )
}
