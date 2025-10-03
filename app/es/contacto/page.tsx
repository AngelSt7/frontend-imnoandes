import { buildMetadata } from "@/src/config";
import { ContactForm } from "@/src/features/property/public/subfeatures/Contact";

export async function generateMetadata() {
  return buildMetadata({
    title: "Contáctanos | Inmoandes",
    description:
      "¿Tienes dudas o consultas sobre nuestros servicios inmobiliarios? Envíanos un mensaje a través del formulario de contacto y te responderemos lo antes posible.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/contacto`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  });
}

export default function ContactPage() {
  return (
    <div className="w-11/12 max-w-[600px] mx-auto my-4 sm:my-10 shadow-md bg-white p-6 rounded-xl">
      <h1 className="text-center text-3xl font-bold mb-2 text-zinc-800 font-poppins">
        ¿Tienes alguna duda?
      </h1>
      <p className="text-center text-zinc-600 mb-6 text-lg">
        ¡Envíanos un mensaje y la resolveremos!
      </p>
      <ContactForm />
    </div>
  );
}
