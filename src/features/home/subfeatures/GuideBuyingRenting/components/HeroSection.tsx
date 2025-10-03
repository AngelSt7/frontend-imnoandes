import { ShieldCheck } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            </div>
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <ShieldCheck className="w-10 h-10" />
                    </div>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-poppins">
                    Guía de Transacciones Seguras
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    Tu seguridad es nuestra prioridad. Aprende a realizar transacciones inmobiliarias con confianza
                </p>
            </div>
        </section>
    )
}
