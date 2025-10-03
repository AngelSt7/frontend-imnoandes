'use client'
import { InputOtp } from "@/src/myLib"
import { AuthInfoMessage } from "@/src/features/auth/components"
import { Auth } from "@/src/features/auth/services"
import { useRouter } from "next/navigation"

export function RequiredOTP({ isModal, onChangeLogin }: { isModal?: boolean, onChangeLogin?: () => void }) {
        const router = useRouter()
    return (
        <div className='flex flex-col gap-2'>
            <AuthInfoMessage message='Ingresa el código que enviamos a tu email para verificar tu identidad' />
            <InputOtp
                serviceFunction={Auth.confirmAccess}
                onSuccessCallback={(data) => {
                    if (isModal) { onChangeLogin?.(), router.refresh() }
                    else { router.replace(data.redirect ?? '/es') }
                }}
            />
        </div>
    )
}
