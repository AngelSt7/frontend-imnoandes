import { buildMetadata } from "@/src/config";
import { GuidePhotos} from "@/src/features/home/subfeatures/GuidePhotos";

export async function generateMetadata() {
  return buildMetadata({
    title: "Guía de fotos para propiedades | Inmoandes",
    description:
      "Aprende a tomar fotografías profesionales de tu propiedad para destacar en el mercado inmobiliario y atraer más compradores y arrendatarios.",
    url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/es/guia-como-tomar-mejores-fotos`,
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/LogoImnoandes.png`,
  });
}

export default function Page() {
  return <GuidePhotos />;
}
