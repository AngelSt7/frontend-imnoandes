'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SplitText } from '@/src/myLib';
import { Search } from 'lucide-react';
import Link from 'next/link';

export function ImageHeader() {
    const path = usePathname()
    const isIndex = path === '/es'

    if (isIndex) return (
        <div className="w-full h-[calc(100vh-4rem)]">
            <div className="flex-1 relative h-full">
                <div className="absolute inset-0 bg-black/30 z-[5]" />
                <Image
                    src={'/Header.jpg'}
                    fill
                    priority
                    alt="Imagen Bienes Raices"
                    className="object-cover"
                />
                <div className=" w-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">

                    <SplitText
                        text="IMNOANDES"
                        className="text-5xl xs:text-6xl font-poppins tracking-wider text-white mb-2"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />

                    <p
                        className="text-gray-200 text-base xs:text-xl font-light tracking-wide"
                    >
                        Tu próximo hogar te está esperando
                    </p>

                    <Link
                        href="/es/buscar/venta-de-departamentos-o-casas?page=1"
                        target="_blank"
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow mt-4 flex mx-auto w-fit items-center gap-2 hover:scale-105 transition-all duration-300 ease-out font-poppins rounded-lg">
                        <Search className="w-5 h-5 md:w-6 md:h-6" />
                        Buscar inmuebles
                    </Link>
                </div>
            </div>
        </div>
    );
}