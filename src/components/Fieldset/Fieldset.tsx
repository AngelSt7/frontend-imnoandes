import { ReactNode } from 'react'

export function Fieldset({ children }: { children: ReactNode }) {
    return (
        <fieldset className=' my-3 dark:text-slate-50 text-zinc-800 text-2xl'>{children}</fieldset>
    )
}