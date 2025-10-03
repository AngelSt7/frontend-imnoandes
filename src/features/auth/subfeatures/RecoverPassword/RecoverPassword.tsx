'use client'

import { useState } from "react";
import { AuthOtp } from "@/src/features/auth/interfaces";
import { AssignPassword, TokenPassword } from "./components";
import { AuthInfoMessage, RequestTokenButton } from "@/src/features/auth/components";

export interface StatusOrquestPassword {
  tokenId: AuthOtp['token'];
  valid: boolean;
  needToken: boolean
}

export function RecoverPassword({ token }: { token: AuthOtp['token'] }) {
  const [statusOrquestPassword, setStatusOrquestPassword] = useState<StatusOrquestPassword>({
    tokenId: '', valid: false, needToken: false
  });

  return (
    <>
      {!statusOrquestPassword.valid && !statusOrquestPassword.needToken && <TokenPassword token={token} setStatusOrquestPassword={setStatusOrquestPassword} />}
      {statusOrquestPassword.valid && <AssignPassword tokenId={statusOrquestPassword.tokenId} />}
      {statusOrquestPassword.needToken && <div className=" flex flex-col justify-center  items-center pb-3 border-b border-gray-300">
        <AuthInfoMessage message='Tu token ha expirado. Solicita uno nuevo para continuar.' />
        <RequestTokenButton message='Solicitar token' href="/auth/olvido-contrasena" />
        </div>}
    </>
  )
}
