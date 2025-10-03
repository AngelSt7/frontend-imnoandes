import { buildMetadata } from "@/src/config";
import { WhoWeAre } from "@/src/features/home/subfeatures/WhoWeAre";

export async function generateMetadata() {
  return buildMetadata({
    title: "Quiénes somos | Inmoandes",
    description:
      "Conoce más sobre Inmoandes, nuestra misión, visión y compromiso en brindar soluciones inmobiliarias confiables y accesibles.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/quienes-somos`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  });
}

export default function Page() {
  return <WhoWeAre />;
}
