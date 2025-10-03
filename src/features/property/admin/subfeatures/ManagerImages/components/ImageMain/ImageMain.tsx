"use client";

import { Button } from '@heroui/react';
import { FileUploader } from '@/src/myLib/components';
import { ImageMainProps } from './interfaces';
import { useImageMain } from './hooks';
import toast from 'react-hot-toast';

export function ImageMain({ currentId, meta, setMeta, propertyId }: ImageMainProps) {

    const { handleSubmit, onSubmit, control, Controller, isValid } = useImageMain({ currentId, meta, setMeta, propertyId });

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className=' space-y-4' >

            <div className=' flex justify-between'>
                <h2 className='text-gray-800 text-2xl'>Imagen principal</h2>
                <Button type='submit'
                    disabled={!isValid}
                    radius='full' className={`bg-zinc-800 text-white font-semibold py-2 transition-all hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-400  ${!isValid && 'opacity-50 cursor-not-allowed'}`}>
                    Guardar
                </Button>
            </div>

            <FileUploader
                controller={Controller}
                name="imageMain"
                rules={{ required: "La imagen principal es obligatoria, pero puede cerrar el formulario para guardar sin ella" }}
                control={control}
                multiple={false}
                maxFiles={1}
                minWidth={1280}
                minHeight={960}
                maxWidth={2000}
                maxHeight={1800}
                maxFileSize={5}
                allowedTypes={["image/png", "image/jpeg"]}
                onError={(error) => toast.error(error)}
                onChange={(files) =>
                    setMeta(prev => ({
                        ...prev,
                        imageMain: Array.isArray(files) ? files[0] : files
                    }))
                }
            />

        </form>
    )
}