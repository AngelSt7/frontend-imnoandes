'use client'

import dynamic from 'next/dynamic';
import { CarrouselSkeleton } from '@/src/features/property/public/subfeatures/PropertyHome/Discover/components/CarrouselOrquest/components';
import { CarrouselItem } from '@/src/features/property/public/interfaces';
import { LoginModal } from '@/src/features/property/public/subfeatures/LoginModal';
import { useFavorites } from '@/src/features/property/public/hooks';

const PropertyCarrousel = dynamic(() => import('./PropertyCarrousel').then((m) => m.PropertyCarrousel), {
    ssr: false, loading: () => (<section className="relative ">
        <h2 className='text-2xl font-bold mb-2 text-gray-900 text-center font-poppins'>Propiedades similares</h2>
        <CarrouselSkeleton quantity={5} />
    </section>),
});

export function OrquestCarrousel({ data }: { data: CarrouselItem[] }) {
    const { isFavorite, toggleFavorite } = useFavorites()
    return (
        <>
            <PropertyCarrousel data={data} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
            <LoginModal />
        </>
    )
}
