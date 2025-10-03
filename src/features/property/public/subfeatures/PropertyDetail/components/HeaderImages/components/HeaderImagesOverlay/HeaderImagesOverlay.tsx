'use client'
import Image from "next/image"
import { ControlButtons } from './ControlButtons'
import { PublicProperty } from "@/src/features/property/public/interfaces"
import { useEffect } from "react"

interface HeaderImagesOverlayProps {
  images: PublicProperty["images"]
  metaOverlay: { show: boolean; index: number }
  currentIndex: number
  currentImage: PublicProperty["images"][0] | undefined
  closeOverlay: () => void
  showPrev: () => void
  showNext: () => void
}

export function HeaderImagesOverlay({
  images,
  metaOverlay,
  currentIndex,
  currentImage,
  closeOverlay,
  showPrev,
  showNext,
}: HeaderImagesOverlayProps) {

  useEffect(() => {
    if (metaOverlay.show) document.body.classList.add("no-scroll")
    return () => document.body.classList.remove("no-scroll")
  }, [metaOverlay.show])
  if (!metaOverlay.show || !currentImage) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imágenes ampliadas"
      className="fixed top-0 left-0 w-dvw h-dvh bg-black bg-opacity-90 flex items-center justify-center z-40"
      onClick={closeOverlay}
    >

      <ControlButtons controlButton='close' closeOverlay={closeOverlay} />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white text-lg font-medium z-50">
        {currentIndex + 1} / {images.length}
      </div>

      <ControlButtons controlButton='prev' showPrev={showPrev} />

      <div
        className="flex items-center justify-center max-h-[80vh] max-w-[90vw] z-40"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.url}
          alt="Imagen ampliada"
          width={1200}
          height={800}
          className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-3xl"
          sizes="90vw"
          priority
        />
      </div>

      <ControlButtons controlButton='next' showNext={showNext} />

    </div>
  )
}