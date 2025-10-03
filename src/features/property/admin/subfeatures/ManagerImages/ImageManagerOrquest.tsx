'use client'

import { AdminPropertyImages } from "@/src/features/property/admin/interfaces";
import { ControlTabs, ImageGallery, ImageMain } from "./components";
import { MetaOrquest } from "./interfaces";
import { useQueryParam } from "@/src/myLib/hooks";
import { useState } from "react";
import { validate } from "uuid";
import { LoadingProvider } from "@/src/features/shared/contexts/LoadingContext";
import { LoadingOverlay } from "@/src/features/shared";

export default function ImageManagerOrquest({ defaultValues }: { defaultValues: AdminPropertyImages }) {

    const { getParam } = useQueryParam();
    const propertyId = getParam("id");

    const mainImage = defaultValues.find(image => image.type === 'MAIN');
    const imagesGallery = defaultValues
        .filter(image => image.type === 'GALLERY')
        .map(image => image.url)
        .filter((url): url is string => Boolean(url))

    const [activeTab, setActiveTab] = useState<string>("main");
    const [meta, setMeta] = useState<MetaOrquest>({
        imageMain: mainImage?.url ?? null,
        imagesGallery
    });


    if (propertyId && validate(propertyId)) return (
        <LoadingProvider>
            <LoadingOverlay />
            <ControlTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "main" && <ImageMain currentId={mainImage?.id ?? ''} propertyId={propertyId} setMeta={setMeta} meta={meta} />}
            {activeTab === "gallery" && <ImageGallery propertyId={propertyId} setMeta={setMeta} meta={meta} />}
        </LoadingProvider>
    )
}