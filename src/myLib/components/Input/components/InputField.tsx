'use client'

import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  id: string;
  type: string;
  inputMode?: 'text' | 'numeric' | 'decimal' | 'tel' | 'email' | 'url';
  max?: number;
  maxLength?: number;
  disabled?: boolean;
  placeholder?: string;
  autoCompleteValue: string;
  inputClasses: string;
  register: UseFormRegisterReturn;
  isTextArea: boolean;
  label?: string
}

export function InputField({
  type,
  inputMode,
  max,
  maxLength,
  disabled,
  placeholder,
  autoCompleteValue,
  inputClasses,
  register,
  isTextArea,
  label,
  id
}: InputFieldProps) {
  if (isTextArea) {
    return (
      <textarea
        maxLength={maxLength}
        placeholder={placeholder}
        className={inputClasses}
        {...register}
      />
    );
  }

  return (
    <input
      id={id}
      type={type}
      aria-label={label ?? "mensaje"}
      disabled={disabled}
      maxLength={maxLength}
      inputMode={inputMode}
      min={type === "number" ? 0 : undefined}
      max={type === "number" ? max : undefined}
      placeholder={placeholder}
      autoComplete={autoCompleteValue}
      className={inputClasses}
      onKeyDown={(e) => {
        if (
          (inputMode === "numeric" || inputMode === "tel") &&
          !/[0-9]/.test(e.key) &&
          !["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key)
        ) {
          e.preventDefault();
        }
      }}
      {...register}
    />
  );
}
