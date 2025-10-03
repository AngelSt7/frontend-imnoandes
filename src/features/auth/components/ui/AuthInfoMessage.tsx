export function AuthInfoMessage({ message, whitBorder = false, classNames }: { message: string, whitBorder?: boolean, classNames?: string }) {
    return (
        <div className={`flex justify-center my-4 ${whitBorder ? 'border-b border-gray-300' : ''} ${classNames}`}>
            <p className=' px-6 text-sm text-zinc-500 font-semibold text-center'>{message}</p>
        </div>
    )
}
