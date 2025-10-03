import { Option } from "@/src/myLib/interfaces";
import { ComponentType } from "react";
import { Control, ControllerProps, FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface AutoCompleteWhitTabs<T extends FieldValues> {
    controller: ComponentType<ControllerProps<T>>;
    data: Option[];
    name: Path<T>;
    control: Control<T>;
    rules?: RegisterOptions<T>;
    label?: string;
    errorMessage?: string;
    errorComponent?: string;
    placeholder?: string
}