import { Camera } from "lucide-react";

export function QuantityImages({quantity}: {quantity: number}) {
    return (
        <div className=" absolute bottom-2 left-2 bg-white px-2 py-1 rounded-lg flex items-center gap-1 text-sm cursor-default">
            <Camera className="w-4 h-4" />
            {quantity} Fotos
        </div>
    )
}
