import { GalleryIcon, ImageIcon } from "../icons";

export const Tabs = [
    {
        key: 'main',
        rounded: 'rounded-l-[22px]',
        title: (
            <div className="flex items-center gap-2" >
                <ImageIcon />
                <span> Imagen principal</span>
            </div>
        )
    },
    {
        key: 'gallery',
        rounded: 'rounded-r-[22px]',
        title: (
            <div className="flex items-center gap-2" >
                <GalleryIcon />
                <span> Galería de imágenes </span>
            </div>
        )
    }
];