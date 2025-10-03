import { Dispatch, SetStateAction } from 'react'
import { Auth } from '@/src/features/auth/services'
import { StatusOrquestPassword } from '@/src/features/auth/subfeatures/RecoverPassword/RecoverPassword'
import { AuthToken } from '@/src/features/auth/interfaces'
import { InputOtp } from '@/src/myLib/components'
import { AuthInfoMessage } from '@/src/features/auth/components'

type TokenPasswordProps = {
    setStatusOrquestPassword: Dispatch<SetStateAction<StatusOrquestPassword>>
    token: AuthToken['token']
}
export function TokenPassword({ setStatusOrquestPassword, token }: TokenPasswordProps) {
    return (
        <div className=' pb-4 border-b border-gray-300'>
            <AuthInfoMessage message='Ingresa el código que llegó a tu email' />
            <InputOtp
                serviceFunction={Auth.validateToken}
                token={token}
                onSuccessCallback={(data) => setStatusOrquestPassword(prev => ({ ...prev, tokenId: data.tokenId, valid: true }))}
                onErrorCallback={(data) => {
                    if (data.message === 'Token expirado, solicite uno nuevo') {
                        setStatusOrquestPassword(prev => ({ ...prev, needToken: true }))
                    }
                }}
            />
        </div>
    )
}
