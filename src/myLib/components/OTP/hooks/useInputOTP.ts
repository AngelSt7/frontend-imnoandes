"use client";

import { useEffect, useState } from "react"
import { useOtpUi } from "./useOtpUi"
import { useSubmitMutation } from "@/src/myLib/hooks"
import { Payload, UseInputOTP } from "../interfaces/interface"

export const useInputOTP = ({
  serviceFunction,
  onSuccessCallback,
  token,
  onErrorCallback
}: UseInputOTP) => {
  const { Slot, FakeDash } = useOtpUi()
  const [otp, setOtp] = useState("")

  const mutationOptions: any = {
    serviceFunction,
    onSuccessCallback,
  }

  if (onErrorCallback) {
    mutationOptions.onErrorCallback = onErrorCallback
  }

  const { mutate } = useSubmitMutation(mutationOptions)

  useEffect(() => {
    if (otp.length === 6) {
      const payload: Payload = { otp }
      if (token) payload.token = token
      mutate(payload)
    }
  }, [otp])

  return {
    otp,
    setOtp,
    Slot,
    FakeDash,
  }
}
