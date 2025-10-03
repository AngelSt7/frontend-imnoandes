import Link from "next/link";

export function RequestTokenButton({ message, href = '/auth/solicitar-token' }: { message: string, href?: string }) {
    return (
        <div className=' flex justify-center my-2'>
            <Link href={href} className='bg-kashmir-blue-500 hover:bg-kashmir-blue-600 py-2 px-4 font-medium rounded-md text-[#ffffff] transition-colors'>{message}</Link>
        </div>
    )
}
