'use client'

import Image from "next/image"
import { PublicProperty } from '@/src/features/property/public/interfaces';
import { QuantityImages } from "./HeaderImagesOverlay/QuantityImages";

interface HeaderImagesMobileProps {
  mainImage: PublicProperty['images'][number]
  onImageClick: (image: PublicProperty['images'][number]) => void
  quantity: number
}

export function HeaderImagesMobile({
  mainImage,
  onImageClick,
  quantity
}: HeaderImagesMobileProps) {
  return (
    <div className="flex flex-col gap-2 md:hidden">
      <figure className="h-[250px] group cursor-pointer overflow-hidden rounded-lg relative">
        <Image
          src={mainImage.url}
          alt="Imagen principal de la propiedad"
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onClick={() => onImageClick(mainImage)}
          priority
        />
        <figcaption className="sr-only">Imagen principal de la propiedad</figcaption>
        <QuantityImages quantity={quantity} />
      </figure>
    </div>
  )
}
