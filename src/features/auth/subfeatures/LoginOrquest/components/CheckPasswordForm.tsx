'use client'

import { Auth, AuthButton, AuthCheckEmail, AuthInfoMessage } from "@/src/features/auth";
import { AuthLogin } from "@/src/features/auth/interfaces";
import { Input, useSubmitMutation } from "@/src/myLib";
import { useAppStore } from "@/src/store/useAppStore";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { AiOutlineLock } from "react-icons/ai";

interface CheckPasswordFormProps {
    email: AuthCheckEmail['email'],
    isModal?: boolean
}

export function CheckPasswordForm({ email, isModal }: CheckPasswordFormProps) {
    const onChangeLogin = useAppStore(state => state.onChangeLogin);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AuthLogin>({ defaultValues: { email: email } });
    const router = useRouter();

    const { mutate } = useSubmitMutation({
        serviceFunction: Auth.login,
        onErrorCallback: () => reset(),
        onSuccessCallback: () => {
            reset();
            if (isModal) { onChangeLogin(), router.refresh() } else {
                router.replace('/es')
            }
        }
    });

    const onSubmit = async (data: AuthLogin) => mutate(data)

    return (
        <>
            <AuthInfoMessage message='Ingresa tu contraseña para continuar' />
            <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col ">
                <Input
                    field="password"
                    type="password"
                    label="Contraseña"
                    htmlFor='password'
                    placeholder='Ingrese su contraseña'
                    register={register}
                    rules={{
                        required: "La contraseña es obligatoria",
                        minLength: {
                            value: 8,
                            message: "La contraseña debe tener al menos 8 caracteres"
                        }
                    }}
                    errorMessage={errors.password}
                    Icon={AiOutlineLock}
                />

                <AuthButton text='Ingresar' />
            </form>
        </>
    )
}
