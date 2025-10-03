import { buildMetadata } from "@/src/config";
import { GuideBuyingRenting } from "@/src/features/home";

export async function generateMetadata() {
  return buildMetadata({
    title: "Guía para comprar o alquilar una propiedad | Inmoandes",
    description:
      "Aprende paso a paso cómo comprar o alquilar una propiedad con Inmoandes. Encuentra consejos, requisitos y recomendaciones para tomar la mejor decisión inmobiliaria.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/guia-comprar-alquilar`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  });
}

export default function page() {
    return <GuideBuyingRenting />
}