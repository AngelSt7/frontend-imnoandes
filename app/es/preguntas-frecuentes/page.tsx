import { buildMetadata } from "@/src/config";
import { FQA } from "@/src/features/property/public/subfeatures/FQA";

export async function generateMetadata() {
  return buildMetadata({
    title: "Preguntas frecuentes | Inmoandes",
    description:
      "Encuentra respuestas claras a las dudas más comunes sobre nuestros servicios inmobiliarios. Explora la sección de preguntas frecuentes de Inmoandes.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/preguntas-frecuentes`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  });
}

export default function Page() {
  return (
    <div className="w-11/12 max-w-[600px] mx-auto my-4 sm:my-10 shadow-md bg-white p-6 rounded-xl">
      <h1 className="text-center text-3xl font-bold mb-2 text-zinc-800 font-poppins">
        Bienvenido a nuestra sección de preguntas
      </h1>
      <p className="text-center text-zinc-600 mb-6 text-lg">
        Estas son algunas preguntas frecuentes
      </p>
      <FQA />
    </div>
  );
}
