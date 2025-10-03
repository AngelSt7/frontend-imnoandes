"use client";

import { AdminProperty, ImageMain } from "@/src/features/property/admin/interfaces";
import { Controller, useForm } from "react-hook-form";
import { Image, PropertyAdmin } from "@/src/features/property/admin/services";
import { ImageMainProps } from "../interfaces";
import { useModalUtils, useSubmitMutation } from "@/src/myLib/hooks";
import toast from "react-hot-toast";
import { revalidateCarrousel, revalidateProperty, revalidateSearch } from "@/src/actions";
import { useLoading } from "@/src/features/shared";

export const useImageMain = ({ currentId, meta, setMeta, propertyId }: ImageMainProps) => {
    const { setLoading }  = useLoading();
    const { closeModal } = useModalUtils();
    const { handleSubmit, control
     } = useForm<{ imageMain: ImageMain }>({
        mode: "onChange",
        defaultValues: { imageMain: meta?.imageMain }
    });

    const isValid = meta?.imageMain !== null

    const onSubmit = (data: { imageMain: ImageMain }) => {
        const formData = new FormData();
        formData.append('images', data.imageMain as File | string);
        mutate({ formData, propertyId });
    };

    const { mutate } = useSubmitMutation({
        serviceFunction: async (data: { formData: FormData; propertyId: AdminProperty['id'] }) => {
            const uploadResult = await Image.create({ formData: data.formData, type: 'main' });
            const { url, publicId } = uploadResult.urls[0];
            const propertyResult = await PropertyAdmin.createImageMain({
                ...(currentId ? { id: currentId } : {}),
                propertyId: data.propertyId,
                url,
                publicId,
            });
            return propertyResult;
        },
        cancelToast: true,
        invalidateQueries: [
            ['property', "custom-images", propertyId]
        ],
        onCharge: () => setLoading("Actualizando imagen principal"),
        onSuccessCallback: async (data) => {
            setMeta(prev => ({ ...prev, imageMain: data.image }));
            toast.success('Imagen subida y vinculada correctamente');
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
        currentId,
        Controller,
        meta,
        setMeta,
        propertyId,
    }
}