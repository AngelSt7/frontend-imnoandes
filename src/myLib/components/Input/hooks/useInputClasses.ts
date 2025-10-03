'use client'
import { useMemo } from "react";

export function useInputClasses(errorMessage?: unknown, variant?: string, isTextArea?: boolean) {
  return useMemo(() => {
    const base = `text-base block w-full p-2 border ${
      errorMessage ? "border-[#d10b30]" : "border-[#afaeae] "
    } bg-[#f4f4f5] hover:bg-[#e4e4e7]   rounded-md outline-none focus:ring-1 ${
      errorMessage ? "ring-[#d10b30]" : "focus:ring-white/10"
    }`;

    return variant === "floating"
      ? `${base} peer px-3 pt-4`
      : `${base} px-3 py-2.5 pr-10 ${isTextArea ? "min-h-[120px]" : "h-[50px]"}`;
  }, [errorMessage, variant, isTextArea]);
}
