
export function AuthButton({ text }: { text: string }) {
    return (
        <button
            className="mt-3 bg-kashmir-blue-500 text-white  font-semibold py-2 rounded-lg hover:bg-kashmir-blue-700 focus:ring-2 focus:ring-zinc-400 transition-colors duration-300"
        >
            {text}
        </button>
    )
}
