import { Stats as StatsData } from "./constants";

export function Stats() {

    return (
        <section className="relative w-full my-10 mt-12 xs:mt-20 bg-white ">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
                    backgroundSize: "20px 20px"
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold  text-zinc-900 mb-4 font-poppins">
                        Tu Próximo Hogar Está Aquí
                    </h2>
                    <p className=" text-zinc-800 text-lg max-w-2xl mx-auto">
                        Descubre por qué miles de personas confían en nosotros para encontrar su propiedad ideal
                    </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-8">
                    {StatsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`${stat.bgColor} ${stat.hoverColor} backdrop-blur-sm rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg`}
                        >
                            <div className={`flex justify-center ${stat.iconColor} mb-4`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold  text-zinc-800 mb-2">
                                {stat.number}
                            </h3>
                            <h4 className="text-xl font-semibold  text-zinc-700 mb-2 font-poppins">
                                {stat.label}
                            </h4>
                            <p className=" text-zinc-600 text-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}