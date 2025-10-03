'use client'

import { DateInput } from '@heroui/react'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'
import { Errors } from '@/src/components/Errors'
import { useBirthDateForForm } from './hooks'

type DateForFormProps<T extends FieldValues> = {
  name: Path<T>
  label?: string
  htmlFor?: string
  control: Control<T>
  setValue: any
}

export function DateForForm<T extends FieldValues>({
  name,
  label,
  htmlFor,
  control,
  setValue
}: DateForFormProps<T>) {
  const inputId = `input-${label ?? htmlFor}`

  return (
    <div>
      <label
        htmlFor={inputId}
        className="overflow-hidden whitespace-nowrap text-ellipsis text-base font-semibold text-[#202021]"
      >
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        rules={{
          validate: () => useBirthDateForForm({ value: null, setValue }).validateDate()
        }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
            <div className={`mt-[8px] mb-2 rounded-md border ${error ? 'border-[#d10b30]' : 'border-[#afaeae]'}`}>
              <DateInput
                size="lg"
                labelPlacement="outside"
                value={field.value ?? null}
                onChange={(val) => {
                    field.onChange(val)
                }}
                onBlur={field.onBlur}
                />
            </div>
              {error && <Errors>{error.message}</Errors>}
                </>
          )
        }}
      />
    </div>
  )
}
