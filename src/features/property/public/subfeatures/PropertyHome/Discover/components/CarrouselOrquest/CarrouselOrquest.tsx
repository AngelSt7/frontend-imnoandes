'use client'

import { Button } from '@heroui/react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import CardCarrousel from './components/CardCarrousel';
import { CarrouselItem } from '@/src/features/property/public/interfaces';
import { CarrouselSkeleton } from './components';
import { useFavorites } from '@/src/features/property/public/hooks';

const Carrousel = dynamic(() => import('./components/Carrousel').then((m) => m.Carrousel), { ssr: false, loading: () => (<CarrouselSkeleton />), });

interface CarrouselOrquestProps {
    SALE: CarrouselItem[]
    RENT: CarrouselItem[]
}

export function CarrouselOrquest({ SALE, RENT }: CarrouselOrquestProps) {
    const [currentType, setCurrentType] = useState<'SALE' | 'RENT'>('SALE');
    const { isFavorite, toggleFavorite } = useFavorites();
    const buttons = [
        { label: 'En venta', type: 'SALE', function: () => setCurrentType('SALE') },
        { label: 'En alquiler', type: 'RENT', function: () => setCurrentType('RENT') },
    ];

    return (
        <section className="w-full md:min-w-[50%] md:max-w-[1200px] mx-auto">
            <nav className="flex gap-3 items-center justify-start mb-4">
                {buttons.map((button, index) => (
                    <Button
                        className={`text-large font-poppins ${button.type === currentType
                            ? 'bg-zinc-800 text-white'
                            : 'bg-[#f3f7f8]  text-zinc-800'
                            } py-3`}
                        key={index}
                        variant="bordered"
                        onPress={button.function}
                    >
                        {button.label}
                    </Button>
                ))}
            </nav>

            <section
                aria-hidden={currentType !== 'SALE'}
                className={`transition-opacity duration-300 ${currentType === 'SALE' ? 'opacity-100 z-10' : 'opacity-0 z-0 hidden'}`}
            >
                <Carrousel data={SALE} card={CardCarrousel} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
            </section>
            <section
                aria-hidden={currentType !== 'RENT'}
                className={`transition-opacity duration-300 ${currentType === 'RENT' ? 'opacity-100 z-10' : 'opacity-0 z-0 hidden'}`}
            >
                <Carrousel data={RENT} card={CardCarrousel} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
            </section>
        </section>
    );
}
