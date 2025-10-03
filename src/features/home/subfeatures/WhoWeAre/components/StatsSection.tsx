import { Award, Home, MapPin, Target } from "lucide-react";

export function StatsSection() {

    const stats = [
        { number: '5', label: 'Departamentos', icon: MapPin },
        { number: '44', label: 'Provincias', icon: Home },
        { number: '502', label: 'Distritos', icon: Target },
        { number: '100%', label: 'Administración', icon: Award }
    ];

    return (
        <section className="bg-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-poppins">
                    Nuestra Cobertura Nacional
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                </div>
                                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                                <div className="text-gray-300 text-lg">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
