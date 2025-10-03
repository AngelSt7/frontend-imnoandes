import { Star, Image } from "lucide-react"
import { gallerySpecs, imageMainSpecs } from "../constants"

export function ImageSpecificationsSection() {

    return (
        <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-heading-2">
                    Especificaciones Técnicas
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                    Conoce los requisitos exactos para cada tipo de imagen en tu publicación
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-kashmir-blue-400 to-kashmir-blue-500 p-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-poppins">{imageMainSpecs.title}</h3>
                                    <p className="text-blue-100">{imageMainSpecs.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {imageMainSpecs.specs.map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                        <span className="font-semibold text-gray-700">{spec.label}:</span>
                                        <span className="text-gray-900 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                                    <strong className="text-kashmir-blue-500">¿Por qué es importante?</strong> La imagen principal es la primera que verán los usuarios al buscar propiedades. Aparece en los resultados de búsqueda, en dispositivos móviles como vista previa, y al compartir tu anuncio en redes sociales. Esta imagen debe capturar la esencia y el atractivo principal de tu propiedad en una sola toma.
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-eggplant-500 to-eggplant-600 p-6">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                                    <Image className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{gallerySpecs.title}</h3>
                                    <p className="text-purple-100">{gallerySpecs.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {gallerySpecs.specs.map((spec, index) => (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                                        <span className="font-semibold text-gray-700">{spec.label}:</span>
                                        <span className="text-gray-900 font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                                    <strong className="text-eggplant-600">¿Por qué son importantes?</strong> Las imágenes de galería permiten a los interesados explorar cada rincón de tu propiedad. Deben mostrar todas las habitaciones, espacios comunes, acabados especiales y características únicas. Una galería completa y variada genera confianza y reduce la necesidad de múltiples visitas presenciales.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
