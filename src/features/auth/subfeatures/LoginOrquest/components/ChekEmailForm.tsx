'use client'

import { AiOutlineMail } from 'react-icons/ai';
import { Auth } from '@/src/features/auth/services';
import { AuthButton, AuthInfoMessage } from '@/src/features/auth/components';
import { AuthCheckEmail } from '@/src/features/auth/interfaces';
import { ButtonGoogle } from '../../ButtonGoogle';
import { CheckEmailFormProps } from '../interfaces';
import { Input } from '@/src/myLib/components';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useSubmitMutation } from '@/src/myLib/hooks'

export function CheckEmailForm({ setStatusForm }: CheckEmailFormProps) {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<AuthCheckEmail>();
    const router = useRouter()

    const { mutate } = useSubmitMutation({
        serviceFunction: Auth.checkEmail,
        onSuccessCallback: (data) => {
            if (data.status === 'INCOMPLETE_PROFILE' && data.redirect) {
                router.replace(data.redirect)
                return
            }
            setStatusForm({
                requestToken: false, requiredOtp: data.requiredOtp, requiredPassword: data.requiredPassword, init: false, meta: { email: getValues("email") },
            })
        },
        onErrorCallback: (data) => {
            if (data.message === 'Usuario no confirmado, solicite un token para confirmar su cuenta') {
                setStatusForm({
                    requestToken: true, requiredOtp: false, requiredPassword: false, init: false, meta: { email: getValues("email") },
                })
            }
        }
    });

    const onSubmit = async (data: AuthCheckEmail) => mutate(data)

    return (
        <>
            <AuthInfoMessage message='Ingresa tu email para comenzar' />
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4 ">
                <Input
                    field="email"
                    type="email"
                    label="Email"
                    htmlFor='email'
                    placeholder='Ingresa tu email'
                    register={register}
                    rules={{
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "El email no es válido",
                        }
                    }}
                    errorMessage={errors.email}
                    Icon={AiOutlineMail}
                />

                <div className=' flex flex-col'>
                    <ButtonGoogle />
                    <AuthButton text='Continuar' />
                </div>
            </form>
        </>
    )
}
