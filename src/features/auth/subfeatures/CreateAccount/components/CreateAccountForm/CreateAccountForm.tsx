'use client'

import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Auth } from '@/src/features/auth/services';
import { AuthButton, AuthInfoMessage } from '@/src/features/auth/components';
import { AuthCreateAccount } from '@/src/features/auth/interfaces';
import { Input } from '@/src/myLib/components';
import { Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useSubmitMutation } from '@/src/myLib/hooks';

export function DataAccountForm({ birthDate }: { birthDate: string }) {
  const [created, setCreated] = useState(false);

  const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm<AuthCreateAccount>();

  const { mutate } = useSubmitMutation({
    serviceFunction: Auth.createAccount,
    onSuccessCallback: () => { reset(); setCreated(true) },
  });

  const onSubmit = (data: AuthCreateAccount) => mutate({ ...data, birthDate });

  if (created) return <AuthInfoMessage message="Hemos enviado un código de verificación a tu correo. Revísalo para confirmar tu cuenta." />

  return (
    <>
      <AuthInfoMessage message="Completa tus datos para crear tu cuenta" />
      <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)} className="flex w-full border-b border-gray-300 flex-col gap-4 py-6">

        <div className='flex gap-3 flex-1'>
          <Input
            type="text"
            label="Nombre"
            field="name"
            htmlFor='name'
            placeholder='Ingresa tu nombre'
            register={register}
            rules={{ required: "El nombre es obligatorio" }}
            errorMessage={errors.name}
            Icon={AiOutlineUser}
          />
          <Input
            type="text"
            label="Apellido"
            field="lastname"
            htmlFor='lastname'
            placeholder='Ingresa tu apellido'
            register={register}
            rules={{ required: "El apellido es obligatorio" }}
            errorMessage={errors.lastname}
            Icon={AiOutlineUser}
          />
        </div>

        <Input
          type="text"
          label="Teléfono"
          field="phone"
          htmlFor='phone'
          placeholder='Ingresa tu número de teléfono'
          register={register}
          rules={{
            required: "El número de teléfono es obligatorio",
            pattern: {
              value: /^\d{9}$/,
              message: "El número de teléfono debe tener exactamente 9 dígitos numéricos"
            }
          }}
          inputMode='tel'
          maxLength={9}
          errorMessage={errors.phone}
          Icon={Phone}
        />

        <Input
          type="email"
          field="email"
          label="Correo electrónico"
          htmlFor='email'
          placeholder='Ingresa tu correo electrónico'
          register={register}
          rules={{
            required: "El correo electrónico es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "El correo electrónico no es válido"
            }
          }}
          errorMessage={errors.email}
          Icon={AiOutlineMail}
        />

        <Input
          type="password"
          label="Contraseña"
          field="password"
          htmlFor='password'
          placeholder='Ingresa tu contraseña'
          register={register}
          rules={{
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres"
            }
          }}
          errorMessage={errors.password}
          Icon={AiOutlineLock}
        />

        <Input
          type="password"
          label="Repite tu contraseña"
          field="repeatPassword"
          htmlFor='repeatPassword'
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

        <AuthButton text="Crear cuenta" />
      </form>
    </>
  );
}
