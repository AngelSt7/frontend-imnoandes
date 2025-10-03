'use client'
import Link from "next/link";
import { MobileNavigationProps } from "../interfaces/interface";
import { useUser } from "@/src/features/user";
import { LinksDefault, userLinks } from "@/src/constants";
import { ButtonsAuth, CloseSession } from "@/src/features/auth";
import { Avatar } from "@heroui/react";

export function MobileNavigation({ isMenuOpen }: MobileNavigationProps) {
  const user = useUser();
  const links = LinksDefault;

  return (
    <div className="flex flex-col h-full font-poppins">
      {user ? (
        <div className="p-6 bg-zinc-50 border-b border-zinc-200">
          <div className="flex items-center gap-3">
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                src={"/dance-goku.gif"}
              />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-zinc-500">Sesión iniciada como:</p>
              <p className="text-sm font-semibold text-zinc-900 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-zinc-50 border-b border-zinc-200 space-y-3">
          <p className="text-sm text-zinc-600">
            Inicia sesión para acceder a todas las funciones
          </p>
          {ButtonsAuth.map(
            (link) => (
              <Link
                key={link.href}
                href={link.href}
                className={link.classNames}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}

      <nav className="p-4 border-t border-zinc-200 space-y-1">
        {links.map((link, index) => {
          return (
            <Link
              href={link.href}
              key={index}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {link.icon && link.icon}
              {link.name}
            </Link>
          )
        })}
      </nav>

      {user && (
        <div className="px-4 py-6 border-t border-zinc-200 space-y-1">
          {userLinks.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 rounded-lg transition-colors"
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
          <CloseSession />
        </div>
      )
      }

    </div >
  );
}