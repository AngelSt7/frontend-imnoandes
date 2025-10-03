'use client'

import { PublicProperty } from "@/src/features/property/public/interfaces"
import { HeaderImagesDesktop } from "./components/HeaderImagesDesktop"
import { HeaderImagesMobile } from "./components/HeaderImagesMobile"
import { HeaderImagesOverlay } from "./components/HeaderImagesOverlay/HeaderImagesOverlay"
import { HeaderImagesTablet } from "./components/HeaderImagesTablet"
import { useHeaderImages } from "./hooks/useHeaderImages"
import { useHeaderImagesOverlay } from "./hooks/useHeaderImagesOverlay"

interface Props {
  images: PublicProperty["images"]
}

export function HeaderImages({ images }: Props) {
  const {
    mainImage,
    visibleGalleryImages,
    remainingCount,
    imagesArray,
  } = useHeaderImages(images)

  const {
    metaOverlay,
    currentIndex,
    currentImage,
    openOverlay,
    closeOverlay,
    showPrev,
    showNext,
  } = useHeaderImagesOverlay(imagesArray)

  return (
    <section aria-label="Galería de imágenes de la propiedad" className="w-full">
      <HeaderImagesDesktop
        mainImage={mainImage}
        images={visibleGalleryImages}
        remainingCount={remainingCount}
        onImageClick={(img) => openOverlay(img.url)}
        quantity={imagesArray.length}
      />
      <HeaderImagesTablet
        mainImage={mainImage}
        galleryImages={visibleGalleryImages}
        remainingCount={remainingCount}
        onImageClick={(img) => openOverlay(img.url)}
        quantity={imagesArray.length}
      />
      <HeaderImagesMobile
        mainImage={mainImage}
        onImageClick={(img) => openOverlay(img.url)}
        quantity={imagesArray.length}
      />

      {metaOverlay.show && currentImage && (
        <HeaderImagesOverlay
          currentIndex={currentIndex}
          currentImage={currentImage}
          images={imagesArray}
          metaOverlay={metaOverlay}
          closeOverlay={closeOverlay}
          showPrev={showPrev}
          showNext={showNext}
        />
      )}
    </section>
  )
}
