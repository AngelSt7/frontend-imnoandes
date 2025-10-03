'use client'

import { AiOutlineUser } from "react-icons/ai";
import { Auth } from "@/src/features/auth/services";
import { AuthCompleteAccount } from '@/src/features/auth/interfaces';
import { CountdownTimer } from "./components";
import { DateInput, Input } from "@/src/myLib/components";
import { Phone } from "lucide-react";
import { useForm } from 'react-hook-form';
import { UserInfo } from "@/src/features/user/interfaces";
import { useSubmitMutation } from "@/src/myLib/hooks";
import { useState } from "react";
import { AuthButton, AuthInfoMessage } from "@/src/features/auth/components";

export function CompleteAccountForm({ user }: { user: UserInfo }) {

  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, control } = useForm<AuthCompleteAccount>({
  });

  const { mutate } = useSubmitMutation({
    serviceFunction: Auth.completeAccount,
    navigation: { type: 'replace', url: '/es' },
    onSuccessCallback: () => { setSubmitted(true); },
  });

  const onSubmit = (data: AuthCompleteAccount) => mutate(data);

  if (submitted) {
    return (
      <AuthInfoMessage 
        message="¡Perfil completado! Serás redirigido en un momento" 
        whitBorder={false}
      />
    );
  }

  return (
    <>
      <AuthInfoMessage message="Completa tu perfil para continuar" whitBorder={false} />
      <div>
        <CountdownTimer exp={user.exp} /> 
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4 p-6 shadow-md"
        >
          <div className="flex gap-3 flex-1">
            <Input
              type="text"
              htmlFor="name"
              field="name"
              label="Nombre"
              placeholder="Ingresa tu nombre"
              register={register}
              rules={{ required: "El nombre es obligatorio" }}
              errorMessage={errors.name}
              Icon={AiOutlineUser}
            />
            <Input
              type="text"
              htmlFor="lastname"
              field="lastname"
              label="Apellido"
              placeholder="Ingresa tu apellido"
              register={register}
              rules={{ required: "El apellido es obligatorio" }}
              errorMessage={errors.lastname}
              Icon={AiOutlineUser}
            />
          </div>

          <Input
            type="text"
            htmlFor="phone"
            label="Teléfono"
            placeholder="Ingresa tu teléfono"
            field="phone"
            inputMode="tel"
            register={register}
            rules={{
              required: "El teléfono es obligatorio",
              validate: (value: unknown) => {
                const str = String(value ?? "");
                const regex = /^9\d{8}$/;
                return regex.test(str) || "Ingrese un teléfono válido";
              },
            }}
            errorMessage={errors.phone}
            Icon={Phone}
          />

          <DateInput
            control={control}
            name="birthDate"
            minAge={18}
            label="Fecha de Nacimiento"
            errorMessage={errors.birthDate?.message?.toString()}
          />

          <AuthButton text="Completar Perfil" />
        </form>
      </div>
    </>
  )
}
