import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
  robots?: string;
}

export function buildMetadata({ title, description, url, image, robots }: SEOProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "ImnoAndes",
      images: [{ url: image }],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots,
  };
}

export function buildRootMetadata(): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL || '';
  
  return {
    title: {
      default: "Inmoandes - Inmobiliaria en los Andes",
      template: "%s | Inmoandes"
    },
    description: "Encuentra y publica propiedades en venta y alquiler en los Andes. La plataforma inmobiliaria líder para conectar propietarios y compradores.",
    keywords: ["inmobiliaria", "propiedades", "venta", "alquiler", "Andes", "casas", "departamentos"],
    authors: [{ name: "Inmoandes" }],
    creator: "Inmoandes",
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: baseUrl,
      siteName: "Inmoandes",
      title: "Inmoandes - Inmobiliaria en los Andes",
      description: "Encuentra y publica propiedades en venta y alquiler en los Andes",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Inmoandes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Inmoandes - Inmobiliaria en los Andes",
      description: "Encuentra y publica propiedades en venta y alquiler en los Andes",
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}