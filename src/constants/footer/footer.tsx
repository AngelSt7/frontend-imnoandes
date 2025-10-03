import { Phone, Mail, MapPin, Clock, Facebook, Instagram, X } from "lucide-react";

export const contactItems = [
  { icon: Phone, text: "+51 933 897 816" },
  { icon: Mail, text: "santacruza2000@gmail.com" },
  { icon: MapPin, text: "Lima, Perú" },
  { icon: Clock, text: "Lun - Sab: 9:00 - 18:00" },
];

export const quickLinks = [
  { href: "/es/buscar/venta-de-departamentos-o-casas?page=1", label: "Propiedades" },
  { href: "/es/quienes-somos", label: "Nosotros" },
  { href: "/es/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { href: "/es/contacto", label: "Contacto" },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/Angeldavid.lupacasantacruz",
    icon: Facebook,
    className: "hover:text-blue-600 ",
  },
  {
    href: "#",
    icon: Instagram,
    className: "hover:text-pink-600 ",
  },
  {
    href: "#",
    icon: X,
    className: "hover:text-blue-600 ",
  },
];

export const legalLinks = [
  { href: "#", label: "Política de Privacidad" },
  { href: "#", label: "Términos y Condiciones" },
];