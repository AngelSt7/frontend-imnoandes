'use client'
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDateInput } from "./hooks";
import { Errors } from "@/src/components";
import { DateInput as DateInputHero } from "@heroui/react";
import { parseDate, DateValue } from "@internationalized/date";

interface DateInputProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    minAge: number;
    errorMessage?: string;
    label: string
}

export function DateInput<T extends FieldValues>({ control, name, minAge, errorMessage, label }: DateInputProps<T>) {
    const { calculateAge, formatToISO } = useDateInput();
    const [localDate, setLocalDate] = useState<DateValue | undefined>(undefined);

    return (
        <>
            <label
                htmlFor={name}
                className="select-none capitalize overflow-hidden whitespace-nowrap text-ellipsis text-base font-semibold text-[#202021] "
            >
                {label}:
            </label>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: "La fecha es obligatoria",
                    validate: (value) => {
                        if (!value) return "La fecha es obligatoria";
                        try {
                            const dateVal = parseDate(value);
                            const age = calculateAge(dateVal);
                            return age >= minAge || `Debe tener al menos ${minAge} años`;
                        } catch {
                            return "Fecha inválida";
                        }
                    }
                }}
                render={({ field }) => {
                    useEffect(() => {
                        if (field.value && !localDate) {
                            try {
                                setLocalDate(parseDate(field.value));
                            } catch {
                                setLocalDate(undefined);
                            }
                        }
                    }, [field.value]);

                    return (
                        <>
                            <div className={`mt-[8px] mb-2 rounded-md border ${errorMessage ? 'border-[#d10b30]' : 'border-[#afaeae]'}`}>
                                <DateInputHero
                                    id={name}
                                    size="lg"
                                    radius="sm"
                                    aria-label="Fecha"
                                    value={localDate}
                                    onChange={(val) => {
                                        setLocalDate(val ?? undefined);
                                        if (val) {
                                            field.onChange(formatToISO(val));
                                        }
                                    }}
                                />
                            </div>
                            {errorMessage && <Errors>{errorMessage}</Errors>}
                        </>
                    );
                }}
            />
        </>
    );
}
