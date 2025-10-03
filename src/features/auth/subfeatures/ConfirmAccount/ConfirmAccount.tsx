'use client'

import { Auth } from '@/src/features/auth/services'
import { AuthToken } from '@/src/features/auth/interfaces'
import { InputOtp } from '@/src/myLib'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AuthInfoMessage, RequestTokenButton } from '@/src/features/auth/components'

export function ConfirmAccount({ token }: AuthToken) {
    const [needToken, setNeedToken] = useState(false)
    const router = useRouter()

    return (
        <div className=' flex justify-center flex-col gap-1 pb-3'>

            {!needToken && (
                <>
                    <AuthInfoMessage message='Introduce el codigo de confirmacion' />
                    <InputOtp
                        serviceFunction={Auth.confirmAccount}
                        token={token}
                        onSuccessCallback={() => router.replace('/auth/iniciar-sesion')}
                        onErrorCallback={(data) => {
                            if (data.message === 'Token expirado, solicite uno nuevo') {
                                setNeedToken(true)
                            }
                        }}
                    />
                </>

            )}

            {needToken && (
                <>
                    <AuthInfoMessage message='Tu token ha expirado' />
                    <RequestTokenButton message='Solicitar token' />
                </>
            )}
        </div>
    )
}
