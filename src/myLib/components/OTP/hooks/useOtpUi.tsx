'use client'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'
import { type SlotProps } from 'input-otp'
import { ReactNode } from 'react'


export function useOtpUi() {
  function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
  }

function Slot(props: SlotProps) {
  return (
    <div
      className={cn(
        "relative w-12 h-14 text-[2rem]",
        "flex items-center justify-center",
        "transition-all duration-300",
        "border-2 rounded-lg",
        "bg-white",
        "border-zinc-300",
        "group-hover:border-zinc-400",
        props.isActive && "border-blue-500 ring-2 ring-blue-100",
        props.char !== null && "border-zinc-400 text-zinc-600 font-semibold"
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}


  function FakeCaret(): ReactNode {
    return (
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
        <div className="w-px h-8 bg-white" />
      </div>
    )
  }

  function FakeDash(): ReactNode {
    return (
      <div className="flex w-4 xs:w-10 justify-center items-center">
        <div className="w-3 h-1 rounded-full bg-border" />
      </div>
    )
  }

  return {
    Slot,
    FakeDash,
    cn,
  }
}
