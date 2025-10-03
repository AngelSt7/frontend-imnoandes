'use client'

import { useEffect } from "react";
import { MobileMenuOverlayProps } from "../interfaces/interface";

export function MobileMenuOverlay({ showOverlay, isMenuOpen, closeMenu }: MobileMenuOverlayProps) {
  useEffect(() => {
    if (showOverlay) document.body.classList.add("no-scroll")
    return () => document.body.classList.remove("no-scroll")
  }, [showOverlay])
  if (!showOverlay) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      onClick={closeMenu}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    </div>
  );
}