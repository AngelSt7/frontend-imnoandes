'use client';
import Image from "next/image";
import Link from "next/link";

export function ButtonGoogle() {
    return (
        <div className="flex justify-center mt-4">
            <Link 
                href={`${process.env.NEXT_PUBLIC_NEST_URL}/auth/google`}
                className="flex items-center justify-center gap-3 w-full
                bg-white border border-gray-300 rounded-lg px-6 py-2
                hover:bg-gray-50 hover:border-gray-400
                transition-all duration-200
                shadow-sm hover:shadow-md
                font-medium text-gray-700"
            >
                <Image 
                    priority 
                    src="/Google.png" 
                    alt="Google logo" 
                    width={20} 
                    height={20} 
                />
                <span>Continuar con Google</span>
            </Link>
        </div>
    );
}