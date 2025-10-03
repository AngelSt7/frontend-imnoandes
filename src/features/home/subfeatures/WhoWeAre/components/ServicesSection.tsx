import { Home, TrendingUp, Users } from "lucide-react";

export function ServicesSection() {

    const services = [
        {
            title: 'Alquiler',
            description: 'Encuentra el hogar perfecto para tu familia con opciones adaptadas a tus necesidades.',
            icon: Home
        },
        {
            title: 'Venta',
            description: 'Comercializamos propiedades con transparencia y asesoría profesional en cada paso.',
            icon: TrendingUp
        },
        {
            title: 'Gestión',
            description: 'Administramos tu propiedad de forma integral, maximizando su rentabilidad.',
            icon: Users
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-16 lg:py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                    Nuestros Servicios
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Soluciones integrales para todas tus necesidades inmobiliarias
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <article key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6">
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}
