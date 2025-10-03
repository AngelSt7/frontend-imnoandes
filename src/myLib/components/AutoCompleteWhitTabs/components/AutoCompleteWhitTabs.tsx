'use client'
import { Autocomplete as Auto, AutocompleteItem } from '@heroui/react';
import { AutoCompleteWhitTabs as IAutoCompleteWhitTabs } from "../interfaces/autoCompleteWhitTabs";
import { FieldValues } from "react-hook-form";
import { Option } from "@/src/myLib/interfaces";
import { Tabs } from "./Tabs";
import { useAutoCompleteWhitTabs } from "../hooks/useAutoCompleteWhitTabs";
import { useRef } from "react";
import { ErrorComponentsRegistry } from '@/src/config';

export function AutoCompleteWhitTabs<T extends FieldValues>({
    data,
    errorMessage,
    name,
    label = "Seleccionar opción",
    control,
    controller: Controller,
    rules,
    errorComponent,
    placeholder
}: IAutoCompleteWhitTabs<T>) {

    const ErrorComponent = ErrorComponentsRegistry[errorComponent ?? "default"];
    const position = useRef<HTMLDivElement>(null);

    return (
        <div ref={position} className="relative " style={{ zIndex: 'auto' }}>
            <label className="text-base font-semibold">
                {label} ({data.length})
            </label>

            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { value, onChange }, fieldState }) => {
                    const { myFilter, filterData, handleChange, handleDelete, inputValue, selectedItems, setInputValue } = useAutoCompleteWhitTabs({ data, value, onChange});
                   
                    return (
                        <>
                            <Auto
                                aria-label={label}
                                defaultFilter={myFilter}
                                defaultItems={filterData}
                                inputValue={inputValue}
                                size='lg'
                                placeholder={placeholder ?? "Buscar..."}
                                onInputChange={setInputValue}
                                onSelectionChange={(keys) => handleChange(keys?.toString() || "")}
                                popoverProps={{
                                    portalContainer: position.current ?? undefined,
                                    placement: "bottom-start",
                                }}
                                listboxProps={{
                                    emptyContent: "No se encontraron resultados"
                                }}
                            >
                                {(item) => (
                                    <AutocompleteItem key={item.key}>
                                        {item.label}
                                    </AutocompleteItem>
                                )}
                            </Auto>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {selectedItems.length === 0 ? (
                                    <span className="text-sm text-gray-500">No hay servicios seleccionados</span>
                                ) : selectedItems.map((item: Option) => (
                                    <Tabs key={item.key} item={item} handleDelete={handleDelete} />
                                ))}
                            </div>

                            {fieldState.error && <ErrorComponent message={errorMessage} />}
                        </>
                    );
                }}
            />
        </div>
    );
}
