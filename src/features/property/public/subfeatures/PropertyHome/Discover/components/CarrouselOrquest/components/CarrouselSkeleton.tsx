import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardCarrouselSkeleton } from "./CardCarrouselSkeleton";

export function CarrouselSkeleton({ quantity = 4 }: { quantity?: number }) {
    return (
        <div className="relative w-full mt-8">
            <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 text-gray-700 p-2 rounded-full backdrop-blur-sm">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/30 text-gray-700 p-2 rounded-full backdrop-blur-sm">
                <ChevronRight className="w-5 h-5" />
            </button>

            <div className="flex overflow-hidden gap-5">
                {Array.from({ length: quantity }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[300px] h-[380px] flex-shrink-0"
                    >
                        <CardCarrouselSkeleton />
                    </div>
                ))}
            </div>
        </div>
    )
}
