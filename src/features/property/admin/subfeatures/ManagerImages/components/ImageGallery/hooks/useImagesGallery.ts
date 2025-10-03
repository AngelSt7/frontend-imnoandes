"use client";

import { Image, PropertyAdmin } from "@/src/features/property/admin/services";
import { ImageGallery, AdminProperty } from "@/src/features/property/admin/interfaces";
import { ImageGalleryProps } from "../interfaces";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useModalUtils, useSubmitMutation } from "@/src/myLib/hooks";
import toast from "react-hot-toast";
import { useLoading } from "@/src/features/shared";
import { revalidateCarrousel, revalidateProperty, revalidateSearch } from "@/src/actions";

export const useImagesGallery = ({ meta, setMeta, propertyId }: ImageGalleryProps) => {
    const { setLoading } = useLoading();
    const { closeModal } = useModalUtils();
    const { handleSubmit, control } = useForm<{ imagesGallery: ImageGallery }>({
        mode: "onChange",
        defaultValues: { imagesGallery: meta?.imagesGallery || [] }
    });

    const formatPublicId = (url: string) => {
        const formated = url.split('/');
        const folder = `${formated.at(-2)}/${formated.at(-1)}`
        return folder.slice(0, folder.indexOf('.'))
    }

    const isValid = meta?.imagesGallery?.length === 0 || meta?.imagesGallery === null

    const onSubmit = (data: { imagesGallery: ImageGallery }) => {
        mutate({ data, propertyId });
    }

    const { mutate } = useSubmitMutation({
        serviceFunction: async (data: { data: { imagesGallery: ImageGallery }; propertyId: AdminProperty['id'] }) => {
            const preparedData = {
                urls: Array.isArray(data.data.imagesGallery) ? data.data.imagesGallery.filter(url => typeof url === 'string') : [],
                files: Array.isArray(data.data.imagesGallery) ? data.data.imagesGallery.filter(files => files instanceof File) : []
            }

            const filesFormData = new FormData();
            preparedData.files.forEach((file) => {
                filesFormData.append('images', file);
            })

            const uploadResult = preparedData.files.length > 0
                ? await Image.create({ formData: filesFormData, type: 'gallery' })
                : { urls: [] }

            const formatUrls = preparedData.urls.map(url => ({
                url,
                publicId: formatPublicId(String(url))
            }))


            const payload = {
                propertyId: data.propertyId,
                images: [...formatUrls, ...uploadResult.urls]
            }

            const propertyResult = await PropertyAdmin.createImagesGallery(payload);
            return propertyResult;
        },
        cancelToast: true,
        invalidateQueries: [
            ['property', "custom-images", propertyId]
        ],
        onCharge: () => setLoading("Actualizando galería de la propiedad"),
        onSuccessCallback: async () => {
            toast.success('Galería subida y vinculada correctamente');
            closeModal();
        },
        onSuccessServerActions: [
            async () => {
                await Promise.all([revalidateProperty(propertyId), revalidateSearch(), revalidateCarrousel()
                ])
            }
        ],
    });

    return {
        handleSubmit,
        control,
        isValid,
        onSubmit,
        setMeta,
        Controller
    }
};