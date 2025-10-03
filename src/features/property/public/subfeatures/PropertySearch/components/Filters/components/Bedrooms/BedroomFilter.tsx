import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";
import { useFormFilter } from "../../hooks";
import FormBedroom from "./FormBedroom";
import { FilterBedrooms } from "../../interfaces";

interface BedroomFilterProps {
    getParam: (key: string) => string | undefined
    clearParams: (keys: string[]) => void
}

export function BedroomFilter({ getParam, clearParams }: BedroomFilterProps) {
    const defaultValues = { 
        minBedrooms: getParam("minBedrooms") &&Number(getParam("minBedrooms")), 
        maxBedrooms: getParam("maxBedrooms") && Number(getParam("maxBedrooms")) 
    } as FilterBedrooms

    const { register, handleSubmit,  errors , onSubmit, handleClearParams } = useFormFilter<FilterBedrooms>({
        defaultValues,
        clearParams
    })

    return (
        <Popover showArrow offset={10} placement="bottom">
            <PopoverTrigger>
                <Button variant="flat">Habitaciones</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px]">
                {(titleProps) => (
                    <div className="px-1 py-2 w-full space-y-3">
                        <p className="text-small font-bold text-foreground" {...titleProps}>
                            Habitaciones
                        </p>
                        <FormBedroom
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
