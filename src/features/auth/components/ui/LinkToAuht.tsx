import Link from 'next/link'

type LinksProps = {
    href: string
    message: string
    label: string
}

export function LinkToAuth({ href, message, label }: LinksProps) {
  return (
    <p className='flex flex-col items-center text-center font-normal text-sm cursor-pointer text-zinc-500'>
      {message}{' '}
      <Link href={href} className='font-semibold text-[#52525b]'>
        {label}
      </Link>
    </p>
  )
}
