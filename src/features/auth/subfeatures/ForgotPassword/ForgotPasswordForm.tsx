'use client'

import { AiOutlineMail } from 'react-icons/ai';
import { Auth } from '@/src/features/auth/services';
import { AuthForgotPassword } from '@/src/features/auth/interfaces';
import { Input } from '@/src/myLib/components';
import { useForm } from 'react-hook-form';
import { useSubmitMutation } from '@/src/myLib/hooks';
import { AuthButton, AuthInfoMessage, Heading } from '@/src/features/auth/components';
import { useState } from 'react';

export function ForgotPasswordForm() {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<AuthForgotPassword>();

    const { mutate } = useSubmitMutation({
        serviceFunction: Auth.forgotPassword,
        onSuccessCallback: () => setSubmitted(true),
    });

    const onSubmit = (data: AuthForgotPassword) => mutate(data)

    if (submitted)  return <AuthInfoMessage message="Código enviado. Revisa tu correo e ingresa el código para restablecer tu contraseña" whitBorder classNames='pb-3' />

    return (
        <>
            <AuthInfoMessage message="Ingresa tu email y te enviaremos un código de recuperación" />
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="  flex w-full border-b border-gray-300 flex-col gap-4 p-6 shadow-md">

                <Input
                    type="email"
                    label="Email"
                    field='email'
                    htmlFor='email'
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

                <AuthButton text="Solicitar token" />
            </form>
        </>
    )
}
