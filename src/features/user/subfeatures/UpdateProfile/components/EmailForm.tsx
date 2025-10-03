'use client'

import { Button } from "@heroui/react";
import { Input } from "@/src/myLib/components";
import { useSubmitMutation } from "@/src/myLib/hooks";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { User } from "@/src/features/user/services";
import { UserInfo, UserUpdateEmail } from "@/src/features/user/interfaces"
 
export function EmailForm({ user }: { user: UserInfo }) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserUpdateEmail>({
        defaultValues: {
            email: user.email
        }
    });

    const { mutate } = useSubmitMutation({ serviceFunction: User.updateEmail })

    const onSubmit = (data: UserUpdateEmail) => mutate(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full">
            <Input
                htmlFor='email'
                type="email"
                field="email"
                label="Email"
                variant="floating"
                placeholder='Ingresa tu email'
                register={register}
                rules={{
                    required: "El email es obligatorio",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "El email no es válido"
                    }
                }
                }
                errorMessage={errors.email}
                Icon={Mail}
            />
            <div className="flex gap-2 ">
                <Button type='submit' radius='md' className='bg-zinc-800 text-white font-semibold py-2 transition-all hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-400 w-full'>
                    Actualizar Email
                </Button>
            </div>
        </form>
    );
}
