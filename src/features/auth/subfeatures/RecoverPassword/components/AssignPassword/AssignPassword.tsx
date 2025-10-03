import { AiOutlineLock } from 'react-icons/ai';
import { AuthToken, RecoverPassword } from '@/src/features/auth/interfaces'
import { Input } from '@/src/myLib/components';
import { useForm } from 'react-hook-form';
import { useSubmitMutation } from '@/src/myLib/hooks';
import { Auth } from '@/src/features/auth/services';
import { AuthButton, AuthInfoMessage } from '@/src/features/auth/components';

export function AssignPassword({ tokenId }: { tokenId: AuthToken['token'] }) {

    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<RecoverPassword>();

    const { mutate } = useSubmitMutation({
        serviceFunction: Auth.recoverPassword,
        onSettledCallback: () => reset(),
        navigation: { type: 'replace', url: '/auth/iniciar-sesion' },
    });

    const onSubmit = (data: RecoverPassword) => mutate({ ...data, tokenId })

    return (
        <div>
            <AuthInfoMessage message='Actualiza tu contraseña y recupera tu acceso a tu cuenta' />
            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="  flex w-full flex-col gap-4 px-6 pb-6 shadow-md">

                <Input
                    type="password"
                    label="Contraseña"
                    field='password'
                    htmlFor='password'
                    placeholder='Ingresa tu contraseña'
                    register={register}
                    rules={{
                        required: "La contraseña es obligatoria", minLength: {
                            value: 6,
                            message: "La contraseña debe tener mínimo 6 caracteres"
                        }
                    }}
                    errorMessage={errors.password}
                    Icon={AiOutlineLock}
                />

                <Input
                    type="password"
                    htmlFor='repeatPassword'
                    label="Repetir contraseña"
                    field='repeatPassword'
                    placeholder='Repite tu contraseña'
                    register={register}
                    rules={{
                        required: "Debes confirmar la contraseña",
                        validate: (value) =>
                            value === getValues("password") || "Las contraseñas no coinciden"
                    }}
                    errorMessage={errors.repeatPassword}
                    Icon={AiOutlineLock}
                />

                <AuthButton text='Actualizar contraseña' />
            </form>
        </div>
    )
}
