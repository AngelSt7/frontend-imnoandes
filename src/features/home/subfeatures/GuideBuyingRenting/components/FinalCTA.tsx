
export function FinalCTA() {
    return (
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    ¿Necesitas Ayuda Adicional?
                </h2>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Nuestro equipo de soporte está disponible para resolver tus dudas y guiarte en el proceso. No dudes en contactarnos si tienes alguna preocupación sobre una transacción.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contacto"
                        className="inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Contactar Soporte
                    </a>
                    <a
                        href="#preguntas"
                        className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
                    >
                        Preguntas Frecuentes
                    </a>
                </div>
            </div>
        </section>
    )
}
