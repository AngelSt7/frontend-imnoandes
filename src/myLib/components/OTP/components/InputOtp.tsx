'use client'

import { OTPInput } from 'input-otp'
import { InputOtpProps } from '../interfaces/interface'
import { useInputOTP } from '../hooks/useInputOTP'

export function InputOtp({ serviceFunction, onSuccessCallback, token, onErrorCallback }: InputOtpProps) {

  const { otp, setOtp, Slot, FakeDash } = useInputOTP({ serviceFunction, onSuccessCallback, onErrorCallback, token })

  return (
    <div className=' flex items-center justify-center mx-auto mt-2'>
    <OTPInput
      maxLength={6}
      value={otp}
      onChange={setOtp}
      containerClassName="group flex items-center has-[:disabled]:opacity-30"
      render={({ slots }) => (
        <>
          <div className="flex">
            {slots.slice(0, 3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>

          <FakeDash />

          <div className="flex">
            {slots.slice(3).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        </>
      )}
      />
      </div>
  )
}
