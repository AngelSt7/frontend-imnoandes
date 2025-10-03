import { HomeIcon, Users2Icon, StarIcon, Building2Icon } from "lucide-react";

export const Stats = [
    {
        icon: <HomeIcon className="w-8 h-8" />,
        number: "15,000+",
        label: "Propiedades Listadas",
        description: "Encuentra tu hogar ideal entre miles de opciones",
        bgColor: "bg-blue-50 ",
        iconColor: "text-blue-600 ",
        hoverColor: "hover:bg-blue-100 "
    },
    {
        icon: <Users2Icon className="w-8 h-8" />,
        number: "50,000+",
        label: "Clientes Satisfechos",
        description: "Familias que encontraron su hogar perfecto",
        bgColor: "bg-amber-50 ",
        iconColor: "text-amber-600 ",
        hoverColor: "hover:bg-amber-100 "
    },
    {
        icon: <StarIcon className="w-8 h-8" />,
        number: "4.8/5",
        label: "Calificación Promedio",
        description: "Basado en reseñas de clientes",
        bgColor: "bg-emerald-50 ",
        iconColor: "text-emerald-600 ",
        hoverColor: "hover:bg-emerald-100 "
    },
    {
        icon: <Building2Icon className="w-8 h-8" />,
        number: "5",
        label: "Departamentos",
        description: "Trabajamos todas las provincias y distritos de Lima, Ica, Piura, Cusco y Arequipa, pronto nos expandiremos en otros departamentos",
        bgColor: "bg-purple-50 ",
        iconColor: "text-purple-600 ",
        hoverColor: "hover:bg-purple-100 "
    }
];