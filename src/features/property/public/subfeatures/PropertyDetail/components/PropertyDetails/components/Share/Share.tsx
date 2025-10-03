'use client'
import toast from "react-hot-toast"
import { FaShareNodes } from "react-icons/fa6"

export function Share() {
    const handleShare = async () => {
        const url = window.location.href;
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    url: url
                });
                toast.success('Compartido exitosamente');
            } catch (err) {
                if (err instanceof Error && err.name !== 'AbortError') {
                    navigator.clipboard.writeText(url);
                    toast.success('Enlace copiado al portapapeles');
                }
            }
        } else {
            navigator.clipboard.writeText(url);
            toast.success('Enlace copiado al portapapeles');
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex justify-center items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all hover:shadow-md group w-full md:w-fit text-center"
            aria-label="Compartir propiedad"
        >
            <FaShareNodes className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Compartir
            </span>
        </button>
    );
}