'use client'

import { FieldValues } from "react-hook-form";
import { InputProps } from "./interfaces/interface";
import { useInputClasses } from "./hooks/useInputClasses";
import { InputLabel } from "./components/InputLabel";
import { InputField } from "./components/InputField";
import { Errors } from "@/src/components";

export function Input<T extends FieldValues>({
  type,
  htmlFor,
  placeholder,
  disabled = false,
  errorMessage,
  Icon,
  inputMode,
  label,
  max,
  maxLength,
  register,
  rules = {},
  variant = "default",
  className,
  field,
}: InputProps<T>) {
  const isTextArea = type === "textarea";
  const isNumeric = inputMode === "numeric" || inputMode === "tel" || type === "number";

  const finalRules = isNumeric
    ? { ...rules, setValueAs: (v: string) => (v === "" || v == null ? null : Number(v)) }
    : rules;

  const inputClasses = useInputClasses(errorMessage, variant, isTextArea);
  const autoCompleteValue = type === "password" ? "new-password" : "off";
  const inputId = `input-${label ?? htmlFor}`;

  return (
    <div className={`flex flex-col w-full gap-2 ${className ?? ""}`}>
      {variant === "default" && (
        <InputLabel
          htmlFor={inputId}
          label={label}
          variant={variant}
          errorMessage={errorMessage}
          isTextArea={isTextArea}
        />
      )}

      <div className="relative ">
        <InputField
          id={inputId}
          label={label}
          type={type}
          inputMode={inputMode}
          max={max}
          maxLength={maxLength}
          disabled={disabled}
          placeholder={variant === "floating" ? " " : placeholder}
          autoCompleteValue={autoCompleteValue}
          inputClasses={inputClasses}
          register={register(field, finalRules)}
          isTextArea={isTextArea}
        />

        {variant === "floating" && (
          <InputLabel
            htmlFor={inputId}
            label={label}
            variant={variant}
            errorMessage={errorMessage}
            isTextArea={isTextArea}
          />
        )}

        {Icon && !isTextArea && (
          <Icon
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 "
            size={20}
          />
        )}
      </div>

      {errorMessage && <Errors>{errorMessage.message?.toString()}</Errors>}
    </div>

  );
}
