import { AuthInfoMessage, RequestTokenButton } from "@/src/features/auth/components";

export function RequestToken() {
    return (
        <div className=" flex flex-col justify-center  items-center pb-1 xs:pb-3">
            <AuthInfoMessage message='Tu token ha expirado. Solicita uno nuevo para continuar.' />
            <RequestTokenButton message='Solicitar token' />
        </div>
    )
}
