'use client'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@heroui/react";
import Link from "next/link";
import { MenuPopoverProps } from "./interfaces/interface";
import { getIconPosition } from "./utils/iconPosition";
import { Auth } from "@/src/features/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function MenuPopover({
  links,
  user,
  whitUser,
  role,
  icon,
  iconPosition = "left",
  position = "bottom-end",
  onPress,
}: MenuPopoverProps) {
  const router = useRouter();
  if (!user) {
    return (
      <div className="flex items-center gap-4">
        <Dropdown placement={position}>
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src={icon || "/default-avatar.svg"}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Usuario no autenticado" variant="flat">
            <DropdownItem key="not-logged" className="h-14 gap-2" textValue="No has iniciado sesión">
              <p className="font-semibold text-zinc-900">No has iniciado sesión</p>
              <p className="text-sm text-zinc-500">Inicia sesión para ver tus opciones</p>
            </DropdownItem>
            <DropdownItem key="login" color="primary" textValue="Iniciar sesión">
              {onPress ? (
                <button
                  type="button"
                  onClick={onPress}
                  className="flex items-center gap-2 w-full text-left"
                >
                  Iniciar sesión
                </button>
              ) : (
                <Link
                  href="/auth/iniciar-sesion"
                  className="flex items-center gap-2 w-full"
                >
                  Iniciar sesión
                </Link>
              )}
            </DropdownItem>
            <DropdownItem key="register" textValue="Registrarse">
              <Link href="/auth/crear-cuenta" className="flex items-center gap-2 w-full">
                Registrarse
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement={position}>
        <DropdownTrigger>
          {whitUser ? (
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: icon,
              }}
              className="transition-transform"
              description={role}
              name={user.userName}
            />
          ) : (
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              src={icon}
            />
          )}
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <>
            <DropdownItem key="profile" className="h-14 gap-2" textValue={user.userName}>
              <p className="font-semibold">{user.message}</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            {links
              .map((item) =>
                item.href ? (
                  <DropdownItem
                    key={item.key}
                    color={item.color}
                    {...getIconPosition(item, iconPosition)}
                    textValue={item.label}
                  >
                    <Link href={item.href} target="_blank" className="flex items-center gap-2 w-full z-50">
                      {item.label}
                    </Link>
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    key={item.key}
                    color={item.color}
                    {...getIconPosition(item, iconPosition)}
                    onPress={async () => {
                      const data = await Auth.logout()
                      toast.success(data.message)
                      router.refresh()
                    }}
                    className="z-50"
                    textValue={item.label}
                  >
                    {item.label}
                  </DropdownItem>
                )
              )}
          </>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}