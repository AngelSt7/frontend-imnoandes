import { Card, CardBody, Skeleton } from "@heroui/react";

export function CardCarrouselSkeleton() {
    return (
        <Card
            shadow="sm"
            className="w-[300px] h-[380px] overflow-hidden"
        >
            <CardBody className="p-0 bg-[#f5f5f5]">
                <div className="relative min-h-[200px] max-h-[200px]">
                    <Skeleton className="w-full h-full rounded-t-lg" />
                </div>
                
                <div className="p-4 space-y-3">
                    <div className="space-y-2">
                        <Skeleton className="w-3/4 h-4 rounded-lg" />
                        <Skeleton className="w-1/2 h-8 rounded-lg" />
                    </div>
                    
                    <div className="space-y-2">
                        <Skeleton className="w-full h-4 rounded-lg" />
                        <Skeleton className="w-2/3 h-4 rounded-lg" />
                    </div>
                    
                    <div className="flex items-center gap-4 pt-1">
                        <Skeleton className="w-16 h-4 rounded-lg" />
                        <Skeleton className="w-16 h-4 rounded-lg" />
                        <Skeleton className="w-16 h-4 rounded-lg" />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}