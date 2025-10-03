'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarrouselItem } from '@/src/features/property/public/interfaces';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarrousel from '@/src/features/property/public/subfeatures/PropertyHome/Discover/components/CarrouselOrquest/components/CardCarrousel';

export function PropertyCarrousel({ data, isFavorite, toggleFavorite }: { data: CarrouselItem[], isFavorite: (id: string) => boolean, toggleFavorite: (id: string) => void }) {
    return (
        <section className="relative ">
            <h2 className='text-2xl font-bold mb-2 text-gray-900 text-center font-poppins'>Propiedades similares</h2>
            <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30  text-gray-700  p-2 rounded-full hover:bg-white/70  transition-all duration-300 backdrop-blur-sm">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30  text-gray-700  p-2 rounded-full hover:bg-white/70  transition-all duration-300 backdrop-blur-sm">
                <ChevronRight className="w-5 h-5" />
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                slidesPerView="auto"
                spaceBetween={20}
                centeredSlides={false}
                initialSlide={0}
                breakpoints={{
                    0: { slidesPerView: 1.2, spaceBetween: 20 },
                    550: { slidesPerView: 1.7, spaceBetween: 20 },
                    700: { slidesPerView: 2.4, spaceBetween: 20 },
                    768: { slidesPerView: 2.3, spaceBetween: 20 },
                    950: { slidesPerView: 3.1, spaceBetween: 20 },
                    1100: { slidesPerView: 3.5, spaceBetween: 20 },
                    1400: { slidesPerView: 4.2, spaceBetween: 20 },
                }}
                className="w-full mt-8"
            >

                {data.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-auto max-w-[300px] flex justify-center"
                    >
                        <CardCarrousel item={item} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}
