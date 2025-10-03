
"use client"

import { Card, CardBody, Image } from "@heroui/react";
import { CarrouselItem } from "@/src/features/property/public/interfaces";
import { FavoriteButton } from "@/src/features/property/public/subfeatures/PropertySearch/components/Card/components/FavoriteButton";
import { formatCurrency } from "@/src/myLib/utils";
import { PROPERTY_CATEGORY_TRANSLATE, PROPERTY_TYPE_TRANSLATE } from "@/src/features/property/admin/constants";
import Link from "next/link";

export default function CardCarrousel({ item, isFavorite, toggleFavorite }: { item: CarrouselItem, isFavorite: (id: string) => boolean, toggleFavorite: (id: string) => void }) {
    return (
        <Card
            isPressable
            isHoverable={true}
            shadow="sm"
            as={"div"}
        >
            <Link href={item.url} target="_blank">
                <CardBody className="p-0 bg-[#f5f5f5]">
                    <div className="flex relative min-h-[200px] max-[200px]">
                        <Image
                            alt="Propiedad image"
                            height={"100%"}
                            width={"100%"}
                            className="object-cover"
                            radius="sm"
                            shadow="md"
                            property="priority"
                            fetchPriority="high"
                            src={item.image || 'https://res.cloudinary.com/dihj0ezqt/image/upload/v1757214009/images/ebtb5rqotek7e1rv1f0e.jpg'}
                        />
                    </div>
                    
                    
                    <div className="p-4 space-y-3">
                        <div className="space-y-2">
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium">
                                    {PROPERTY_TYPE_TRANSLATE[item.propertyType]} · {PROPERTY_CATEGORY_TRANSLATE[item.propertyCategory]}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-2xl font-bold">
                                    {formatCurrency(item.price, item.currency)}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            <p className="text-sm font-normal text-zinc-900">{item.address}</p>
                            <p className="text-sm font-normal text-neutral-600 capitalize">{item.district}, {item.department}</p>
                        </div>

                        <div className="flex items-center gap-4 text-neutral-600 pt-1">
                            <div className="flex items-center gap-1">
                                <span className="text-sm">{item.area}m²</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm">{item.bedrooms} Dorm</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm">{item.bathrooms} Baños</span>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Link>
                <FavoriteButton isFavorite={isFavorite(item.id)} onClick={() =>toggleFavorite(item.id)} />
        </Card>
    );
}