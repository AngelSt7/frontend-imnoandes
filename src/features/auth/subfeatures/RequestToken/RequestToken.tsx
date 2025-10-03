'use client'

import { AiOutlineMail } from 'react-icons/ai';
import { Auth } from '@/src/features/auth/services';
import { AuthRequestToken } from '@/src/features/auth/interfaces';
import { Input } from '@/src/myLib/components';
import { useForm } from 'react-hook-form';
import { useSubmitMutation } from '@/src/myLib/hooks';
import { AuthButton, AuthInfoMessage } from '@/src/features/auth/components';
import { useState } from 'react';

export function RequestTokenForm() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<AuthRequestToken>();

    const { mutate } = useSubmitMutation({
        serviceFunction: Auth.requestToken,
        onSuccessCallback: () => setSubmitted(true),
    })

    const onSubmit = (data: AuthRequestToken) => mutate(data)

    if (submitted) return <AuthInfoMessage message='El token fue enviado a tu email, por favor revisa tu bandeja de entrada' whitBorder classNames='pb-3' />
    
    return (
        <>
            <AuthInfoMessage message="Ingresa tu email para recibir un nuevo código de verificación" />

            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="  flex w-full border-b border-gray-300 flex-col gap-4 p-6 shadow-md">

                <Input
                    type="email"
                    label="Email"
                    htmlFor='email'
                    field='email'
                    placeholder='Ingresa tu email'
                    register={register}
                    rules={{
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "El email no es válido"
                        }
                    }}
                    errorMessage={errors.email}
                    Icon={AiOutlineMail}
                />

                <AuthButton text="Enviar token" />
            </form>
        </>
    )
}
