import { AlertTriangle, XCircle } from 'lucide-react'

export function RedFlagsSection({ currentRedFlags }: { currentRedFlags: string[] }) {
    return (
        <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                        Señales de Alerta - ¡Cuidado!
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Si identificas alguna de estas situaciones, procede con extrema cautela o cancela la transacción
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <ul className="grid md:grid-cols-2 gap-6">
                        {currentRedFlags.map((flag, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 leading-relaxed text-justify font-medium">{flag}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
