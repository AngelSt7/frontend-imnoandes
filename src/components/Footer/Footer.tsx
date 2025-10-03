import { LogoImnoandes } from "@/src/myLib/components/HeaderMenu/components/LogoImnoandes";
import { contactItems, legalLinks, quickLinks, socialLinks } from "@/src/constants";
import Link from "next/link";

export function Footer() {

  return (
    <footer className="w-full py-12 bg-gray-50  text-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <LogoImnoandes />
            </div>
            <p className="text-sm mt-2">
              Tu socio confiable en bienes raíces. Encontramos el hogar perfecto
              para cada familia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              {contactItems.map(({ icon: Icon, text }, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} target="_blank" className="text-sm hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon, className }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className={`${className} transition-colors`}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} InmoAndes. Todos los derechos
              reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {legalLinks.map(({label }) => (
                <span key={label} className="text-sm hover:underline">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
