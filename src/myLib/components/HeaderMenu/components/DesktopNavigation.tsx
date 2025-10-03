'use client'

import Link from "next/link";
import { DesktopNavigationProps } from "../interfaces/interface";
import { MenuPopover } from "@/src/myLib/components/MenuPopover";
import { LinksMenu } from "@/src/constants";
import { useUser } from "@/src/features/user";
import { useAppStore } from "@/src/store/useAppStore";
import { LoginModal } from "@/src/features/property/public/subfeatures/LoginModal";

const transforms = `hover:scale-110 active:hover:scale-125 transition-transform`;

export function DesktopNavigation({ navLinks }: DesktopNavigationProps) {
  const onChangeLogin = useAppStore((state) => state.onChangeLogin);

  const user = useUser();
  return (
    <div className="hidden md:flex md:gap-4 md:items-center">
      <ul className="flex gap-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={`${transforms} text-zinc-900 font-medium hover:underline font-poppins`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <MenuPopover
        icon="/dance-goku.gif"
        position="bottom-start"
        links={LinksMenu}
        user={user ? { userName: user.name, email: user.email, message: "Session iniciada como:" } : undefined}
        whitUser={false}
        onPress={() => onChangeLogin()}
      />
      <LoginModal />
    </div>
  );
}