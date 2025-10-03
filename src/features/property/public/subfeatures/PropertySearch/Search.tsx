'use client';

import { LocationsSearch, PropertySearch, useFavorites } from '@/src/features/property/public';
import { StickyContent } from '@/src/myLib/components/StickyContent';
import { ApiResponse } from '@/src/features/shared/interfaces';
import { CardProperty, EmptyState, FilterOrquest } from './components';
import { Pagination } from '@/src/myLib';
import { LoginModal } from '../LoginModal';

interface SearchProps {
    data: ApiResponse<PropertySearch>
    locales: LocationsSearch | undefined
    tittle: string
}

export function Search({ data, locales = [], tittle }: SearchProps) {
    const { isFavorite, toggleFavorite } = useFavorites();

    return (
        <>
            <StickyContent classNames='backdrop-blur-md backdrop-saturate-150 shadow-sm bg-[#f5f5f5] border-b border-[#d1d5db]'>
                <FilterOrquest locales={locales} />
            </StickyContent>

            <section className="w-[98%] lg:w-[90%] max-w-[1600px] mx-auto space-y-6 mb-10 md:mt-5 mt-2">

                {data.data.length > 0 &&  <p className='text-zinc-800 font-medium font-poppins'> {tittle} </p> }

                {data.data.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-8 xs:gap-5 mt-5">
                            {data.data.map(property => (
                                <CardProperty key={property.id} property={property} isFavorite={isFavorite(property.id)} toggleFavorite={toggleFavorite} />
                            ))}
                        </div>
                    </>
                ) : (
                    <EmptyState />
                )}

                <div className='flex justify-center'><Pagination meta={data.meta} /> </div>

            </section>
        </>
    );
}