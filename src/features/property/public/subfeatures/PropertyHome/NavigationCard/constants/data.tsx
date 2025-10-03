import { DollarSign, Home, Key, TrendingUp } from "lucide-react";

export const buttons = [
  {
    label: "Inmuebles en Lima",
    route: "/es/buscar/venta-de-departamentos-o-casas-en-lima?page=1",
    icon: <DollarSign className="w-6 h-6 text-green-600" />,
    hoverColor: "hover:text-green-600"
  },
  {
    label: "Departamentos recientes en venta",
    route: "/es/buscar/venta-de-departamentos?page=1&published=7",
    icon: <Home className="w-6 h-6 text-blue-600" />,
    hoverColor: "hover:text-blue-600"
  },
  {
    label: "Departamentos recientes en alquiler",
    route: "/es/buscar/alquiler-de-departamentos?page=1&published=7",
    icon: <Key className="w-6 h-6 text-orange-600" />,
    hoverColor: "hover:text-orange-600"
  },
  {
    label: "Almacenes disponibles",
    route: "/es/buscar/venta-de-almacenes?page=1",
    icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
    hoverColor: "hover:text-purple-600"
  },
];