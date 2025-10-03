'use client'

import { ComponentType, useRef } from "react";
import { Control, ControllerProps, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { Option } from "@/src/myLib/interfaces";
import { Autocomplete as Auto, AutocompleteItem } from "@heroui/react";
import { ErrorComponentsRegistry } from "@/src/config";

interface AutocompleteProps<T extends FieldValues> {
  controller: ComponentType<ControllerProps<T>>;
  data: Option[];
  name: Path<T>;
  control: Control<T>;
  rules: RegisterOptions<T>;
  label?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "lg" | "sm" | "md" | "full";
  errorComponent?: string;
  errorClassName?: string;
}

export function Autocomplete<T extends FieldValues>({
  controller: Controller,
  data,
  name,
  control,
  rules,
  label = "Seleccionar opción",
  placeholder,
  size,
  radius,
  errorComponent,
  errorClassName,
}: AutocompleteProps<T>) {
  const position = useRef<HTMLDivElement>(null);

  const myFilter = (textValue: string, inputValue: string) => {
    if (inputValue.length === 0) return true;
    textValue = textValue.normalize("NFC").toLocaleLowerCase();
    inputValue = inputValue.normalize("NFC").toLocaleLowerCase();
    return textValue.startsWith(inputValue);
  };

  const labelId = `label-${name}`;
  const ErrorComponent = ErrorComponentsRegistry[errorComponent ?? "default"];
  const defaultPlaceholder = placeholder ?? "Seleccione una opción";
  const defaultSize = size ?? "lg";
  const defaultRadius = radius ?? "sm";

  return (
    <div ref={position} className="relative z-[9999] flex w-full flex-col gap-2">
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <label
              id={labelId}
              htmlFor={name}
              className="text-base font-semibold text-[#202021]  flex justify-between items-center w-full"
            >
              <span>{label}</span>
              <span className="text-sm font-normal text-gray-500 ">
                {`(${data.length})`}
              </span>
            </label>

            <div
              className={`mt-[8px] z-[9999] rounded-md border ${fieldState.error
                  ? errorClassName ?? "border-[#d10b30]"
                  : "border-[#afaeae] "
                }`}
            >
              <Auto
                shouldCloseOnBlur={false}
                onMouseDown={(e) => e.stopPropagation()}
                className="w-full"
                defaultFilter={myFilter}
                aria-labelledby={labelId}
                defaultItems={data}
                size={defaultSize}
                radius={defaultRadius}
                selectedKey={field.value || null}
                showScrollIndicators={true}
                popoverProps={{
                  portalContainer: position.current ?? undefined,
                  isNonModal: false,
                }}
                listboxProps={{
                  emptyContent: "No se encontraron resultados",
                }}
                onSelectionChange={(keys) => {
                  if (keys == null) {
                    field.onChange("");
                  } else {
                    field.onChange(keys.toString());
                  }
                }}
                disabledKeys={data
                  .filter((item) => item.active === false || item.active === 0)
                  .map((item) => item.key.toString())}
                placeholder={defaultPlaceholder}
              >
                {(item) => (
                  <AutocompleteItem
                    className="z-[9999]"
                    onMouseDown={(e) => e.stopPropagation()}
                    key={item.key}
                  >
                    {item.label}
                  </AutocompleteItem>
                )}
              </Auto>
            </div>

            {fieldState.error && (
              <ErrorComponent message={fieldState.error.message} />
            )}
          </>
        )}
      />
    </div>
  );
}
