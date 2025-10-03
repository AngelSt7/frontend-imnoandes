import { CheckCircle, AlertCircle } from "lucide-react"
import { bestPractices, commonMistakes } from "../constants"

export function BestPracticesSection() {

    return (
        <section className="bg-gradient-to-r from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    <article className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle className="w-7 h-7 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 font-poppins">Mejores Prácticas</h3>
                        </div>
                        <ul className="space-y-4">
                            {bestPractices.map((practice, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 leading-relaxed text-justify">{practice}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <AlertCircle className="w-7 h-7 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 font-poppins">Errores Comunes</h3>
                        </div>
                        <ul className="space-y-4">
                            {commonMistakes.map((mistake, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 leading-relaxed text-justify">{mistake}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}
