import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { useFormFilter } from "../../hooks";
import FormArea from "./FormArea";
import { FilterArea } from "../../interfaces";

interface CurrencyProps {
    getParam: (key: string) => string | undefined
    clearParams: (keys: string[]) => void
}

export function AreaFilter({ getParam, clearParams }: CurrencyProps) {
    const tittle = "Área";
    const defaultValues = { 
        minArea: getParam("minArea") && Number(getParam("minArea")),  
        maxArea: getParam("maxArea") && Number(getParam("maxArea")) 
    } as FilterArea

    const { register, handleSubmit, errors , onSubmit, handleClearParams } = useFormFilter<FilterArea>({
        defaultValues,
        clearParams,
        clearKeys: ["minArea", "maxArea"],
    })

    return (
        <Popover showArrow offset={10} placement="bottom">
            <PopoverTrigger>
                <Button variant="flat">{tittle}</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px]">
                {(titleProps) => (
                    <div className="px-1 py-2 w-full space-y-3 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 mb-4 " {...titleProps}>
                            {tittle}
                        </h3>
                        <FormArea 
                            register={register}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                            errors={errors}
                            handleClearParams={handleClearParams}
                        />
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}
