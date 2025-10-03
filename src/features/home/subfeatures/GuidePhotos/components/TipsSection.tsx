import { tips } from "../constants";

export function TipsSection() {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-16 lg:py-24">
            <h2 className="text-heading-2">
                Consejos Profesionales 
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Técnicas probadas para capturar imágenes que impacten
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {tips.map((tip, index) => {
                    const Icon = tip.icon;
                    return (
                        <article key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{tip.title}</h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">{tip.content}</p>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}
