import { useQueryParam } from "@/src/myLib/hooks";
import { SelectSEO, SelectNumbers, ButtonFilter } from "@/src/myLib/components";
import { Button } from "@heroui/react";
import { useAppStore } from "@/src/store/useAppStore";
import { useDrawerContext } from "@/src/myLib/components/Drawer/contexts/DrawerContext";
import { AllowedFilters } from "./interfaces";
import { PropertyCategory, propertyTypes } from "./components/constants";
import { AreaFilter, BedroomFilter, CurrencyFilter } from "./components";

export function Filters({ show }: { show: AllowedFilters[] }) {

    const { setParam, getParam, keepParams, clearParams } = useQueryParam();
    const onChangeDrawer = useAppStore(state => state.onChangeDrawer)
    const { isInDrawer: inProvider } = useDrawerContext();

    return (
        <>
            {show.includes("filters") && (
                <Button onPress={onChangeDrawer} size="md" variant="flat" className="w-full md:w-fit border border-[#dbdada]">
                    Más filtros
                </Button>
            )}

            {show.includes("clear") && (
                <Button
                    onPress={() => keepParams(['page'])}
                    size="md" variant="flat" className="w-full border border-[#dbdada]"
                >
                    Limpiar
                </Button>
            )}

            {show.includes('currency') && (
                <CurrencyFilter
                    setParam={setParam}
                    getParam={getParam}
                    clearParams={clearParams}
                />
            )}

            {show.includes('bedrooms') && (
                <BedroomFilter
                    getParam={getParam}
                    clearParams={clearParams}
                />
            )}

            {show.includes('propertyType') && (
                <SelectSEO
                    regex={/^(.*\/buscar\/)([^\/\-]+)(-.*)?(\?.*)?$/}
                    mode="single"
                    options={propertyTypes}
                    prefix=""
                    inProvider={inProvider}
                    {...(inProvider ? { onChange: onChangeDrawer } : {})}
                    tittle="Tipo de propiedad"
                />
            )}

            {show.includes('propertyCategory') && (
                <SelectSEO
                    regex={/^(.*\/buscar\/[^\/]+)-de-([^\/\?]+?)(-en-.*)?(\?.*)?$/}
                    mode="multiple"
                    options={PropertyCategory}
                    prefix="-de-"
                    inProvider={inProvider}
                    {...(inProvider ? { onChange: onChangeDrawer } : {})}
                    tittle="Categoría"
                />
            )}


            {show.includes('area') && (
                <AreaFilter
                    getParam={getParam}
                    clearParams={clearParams}
                />
            )}

            {show.includes('minBathrooms') && (
                <SelectNumbers
                    keyParam="minBathrooms"
                    options={[
                        { key: "1", value: "1+" },
                        { key: "2", value: "2+" },
                        { key: "3", value: "3+" },
                        { key: "4", value: "4+" },
                        { key: "5", value: "5+" },
                    ]}
                    tittle="Baños"
                />
            )}

            {show.includes('minParkingSpaces') && (
                <SelectNumbers
                    keyParam="minParkingSpaces"
                    options={[
                        { key: "1", value: "1+" },
                        { key: "2", value: "2+" },
                        { key: "3", value: "3+" },
                        { key: "4", value: "4+" },
                        { key: "5", value: "5+" },
                    ]}
                    tittle="Parqueaderos"
                />
            )}

            {show.includes('published') && (
                <ButtonFilter
                    text="Publicado"
                    keyParam="published"
                    options={[
                        { key: "ALL", value: "Cualquier momento" },
                        { key: "0", value: "Hoy" },
                        { key: "3", value: "Últimos 3 días" },
                        { key: "7", value: "Últimos 7 días" },
                    ]}
                    defaultLabel="En cualquier momento"
                />
            )}
        </>
    )
}
