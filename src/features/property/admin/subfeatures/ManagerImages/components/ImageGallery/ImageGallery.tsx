"use client";
import { Button } from '@heroui/react';
import { FileUploader } from '@/src/myLib/components';
import { ImageGalleryProps } from './interfaces';
import { useImagesGallery } from './hooks';
import toast from 'react-hot-toast';

export function ImageGallery({ meta, setMeta, propertyId }: ImageGalleryProps) {
    const { handleSubmit, Controller, isValid, onSubmit, control } = useImagesGallery({ meta, setMeta, propertyId });

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className='space-y-4' >

            <div className=' flex justify-between'>
                <h2 className='text-gray-800 text-2xl'>Imagenes de galería</h2>
                <Button type='submit'
                    disabled={isValid}
                    radius='full' className={`bg-zinc-800 text-white font-semibold py-2 transition-all hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-400  ${isValid && 'opacity-50 cursor-not-allowed'}`}>
                    Guardar
                </Button>
            </div>

            <FileUploader
                controller={Controller}
                name="imagesGallery"
                allowedTypes={['image/jpeg', 'image/png', 'image/jpg']}
                rules={{
                    validate: {
                        required: (files) => Array.isArray(files) && files.length > 0 || 'Por favor, selecciona al menos una imagen',
                        min: (files) => Array.isArray(files) && files.length >= 5 || "Debes subir al menos 5 imágenes",
                        max: (files) => Array.isArray(files) && files.length <= 10 || "Máximo 10 imágenes permitidas",
                    }
                }}
                control={control}
                multiple={true}
                maxFiles={10}
                minWidth={800}
                minHeight={600}
                maxWidth={2000}
                maxHeight={1500}
                maxFileSize={3}
                onError={(error) => toast.error(error)}
                onChange={(data) =>
                    setMeta(prev => ({
                        ...prev,
                        imagesGallery: Array.isArray(data) ? data : [data]
                    }))
                }
            />

        </form>
    )
}