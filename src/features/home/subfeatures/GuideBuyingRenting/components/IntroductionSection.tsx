import { AlertTriangle } from "lucide-react";

export function IntroductionSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center font-poppins">
                    Contacto Directo, Máxima Seguridad
                </h2>
                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed text-justify mb-4">
                        En ImnoAndes facilitamos el contacto directo entre propietarios e interesados, sin intermediar en los pagos. Esto te permite negociar libremente y establecer acuerdos personalizados. Sin embargo, con esta libertad viene la responsabilidad de protegerte y verificar cada detalle antes de comprometerte financieramente.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-justify mb-4">
                        Esta guía está diseñada para ayudarte a navegar el proceso de alquiler o compra de manera segura. Te enseñaremos qué verificar, qué preguntas hacer y cuáles son las señales de alerta que debes evitar. Recuerda: una transacción bien informada es una transacción exitosa.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
                        <div className="flex items-start">
                            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                            <div className="ml-4">
                                <p className="text-sm font-semibold text-yellow-800 mb-2">Importante</p>
                                <p className="text-sm text-yellow-700 text-justify">
                                    ImnoAndes no procesa pagos ni garantiza transacciones. Somos una plataforma de conexión. Todas las transacciones económicas son responsabilidad exclusiva de las partes involucradas. Siempre verifica identidades, documentos y la legitimidad de las propiedades antes de realizar cualquier pago.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
