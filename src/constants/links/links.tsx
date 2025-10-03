import { Auth } from "@/src/features/auth";
import { LinkOption } from "@/src/myLib";
import { NavLink } from "@/src/myLib/components/HeaderMenu/interfaces/interface";
import { UserCog, Users, BarChart3, LogOut, House, Home, Search, Mail, HelpCircle, Heart, Settings } from "lucide-react";

export const LinksMenu: LinkOption[] = [
  {
    href: "/es",
    label: "Pagina Principal",
    key: "home",
    icon: <UserCog className="w-4 h-4" />,
  },
  {
    href: "/dashboard/propiedades?page=1&limit=10",
    label: "Mis Propiedades",
    key: "properties",
    icon: <House className="w-4 h-4" />,
  },
  {
    href: "/dashboard/perfil",
    label: "Configuraciones",
    key: "settings",
    icon: <Users className="w-4 h-4" />,
  },
  {
    href: "/dashboard/favoritos",
    label: "Favoritos",
    key: "favorites",
    icon: <BarChart3 className="w-4 h-4" />,
  },
  {
    label: "Logout",
    key: "logout",
    color: "danger",
    callback: () => {},
    icon: <LogOut className="w-4 h-4" />,
  },
];


export const LinksDefault: NavLink[] = [
  { 
    name: 'Inicio', 
    href: '/es',
    icon: <Home className="w-5 h-5" />
  },
  { 
    name: 'Buscar', 
    href: '/es/buscar/venta-de-departametos-o-casas?page=1',
    icon: <Search className="w-5 h-5" />
  },
  { 
    name: 'Contacto', 
    href: '/es/contacto',
    icon: <Mail className="w-5 h-5" />
  },
  { 
    name: 'Preguntas', 
    href: '/es/preguntas-frecuentes',
    icon: <HelpCircle className="w-5 h-5" />
  },
];

export const userLinks = [
  {
    label: "Mis Propiedades",
    href: "/dashboard/propiedades?page=1&limit=10",
    icon: Home,
    type: "link",
  },
  {
    label: "Favoritos",
    href: "/dashboard/favoritos",
    icon: Heart,
    type: "link",
  },
  {
    label: "Configuraciones",
    href: "/dashboard/perfil",
    icon: Settings,
    type: "link",
  },
];

