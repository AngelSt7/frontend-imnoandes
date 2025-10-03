import { AuthToken } from "@/src/features/auth/interfaces"

export interface InputOtpProps {
  serviceFunction: (data: any) => Promise<any>,
  onSuccessCallback?: (data: any) => any,
  token?: AuthToken['token']
  onErrorCallback?: (data: any) => any
}

export interface Payload {
  otp: string,
  token?: AuthToken['token']
}

export interface UseInputOTP {
  serviceFunction: (data: any) => Promise<any>
  onSuccessCallback: ((data: any) => any) | undefined
  token: string | undefined
  onErrorCallback?: (data: any) => any | undefined
}