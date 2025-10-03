'use client';

import { FavoriteButton } from "./components/FavoriteButton";
import { PropertyActions } from "./components/PropertyActions";
import { PropertyDescription } from "./components/PropertyDescription";
import { PropertyDetails } from "./components/PropertyDetails";
import { PropertyHeader } from "./components/PropertyHeader";
import { PropertyImage } from "./components/PropertyImage";
import { PropertyLocation } from "./components/PropertyLocation";
import { PropertySearch } from "@/src/features/property/public/interfaces";
import Link from "next/link";
import { formatCurrency } from "@/src/myLib";
import { mockImages } from "./constants";

interface CardPropertyProps {
  property: PropertySearch;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void
}

export function CardProperty({ property, isFavorite, toggleFavorite }: CardPropertyProps) {
  const handleFavoriteClick = async (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); await toggleFavorite(property.id); };
  const handleWhatsAppClick = (e: React.MouseEvent) => { e.preventDefault(); e.stopPropagation(); window.open(`https://wa.me/?text=${encodeURIComponent(`Hola, estoy interesado en la propiedad ubicada en ${property.address} - ${formatCurrency(property.price, property.currency)}`)}`, '_blank'); };

  return (
    <article className="bg-[#f5f5f5] rounded-lg shadow-sm border border-gray-200 md:h-[295px] overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300 group relative">
      <Link href={property.url} className="flex w-full h-full" target="_blank">
        <div className="flex flex-col md:flex-row w-full h-full">
          <PropertyImage images={property.images?.length ? property.images : mockImages} location={property.address} />
          <div className="space-y-1 p-4 flex-1 flex flex-col justify-between overflow-hidden">
            <PropertyHeader type={property.propertyType} category={property.propertyCategory} price={property.price} currency={property.currency} />
            <PropertyLocation location={property.address} district={property.district!} department={property.department!} />
            <PropertyDescription description={property.description} />
            <PropertyDetails createdAt={property.createdAt} area={property.area!} bedrooms={property.bedrooms!} bathrooms={property.bathrooms!} />
            <PropertyActions onWhatsApp={handleWhatsAppClick} />
          </div>
        </div>
      </Link>
      <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick} />
    </article>
  );
}
