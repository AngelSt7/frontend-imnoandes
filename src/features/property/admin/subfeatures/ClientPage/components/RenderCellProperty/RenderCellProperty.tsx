import { Actions } from "@/src/myLib/hooks/modal";
import { AdminProperty } from "@/src/features/property/admin/interfaces";
import { Chip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import { formatCurrency, formatDate } from "@/src/myLib/utils";
import { RenderCellsProps, statusColorMap, VerticalDotsIcon } from "@/src/myLib/components/Table";
import { PROPERTY_CATEGORY_TRANSLATE, PROPERTY_TYPE_TRANSLATE } from "@/src/features/property/admin/constants";
import { Clipboard } from "@/src/components";
import { searchUrl } from "../../../../utils";

export const RenderCellProperty = ({
    onMutate,
    onOpenModal,
    item,
    columnKey
}: RenderCellsProps<AdminProperty>) => {
    const cellValue = item[columnKey as keyof typeof item];

    switch (columnKey) {

        case "name":
            return <Clipboard text={item.name} context={"Nombre"} opacity={false} />

        case "price":
            return formatCurrency(item.price, item.currency);

        case "propertyType":
            return PROPERTY_TYPE_TRANSLATE[item.propertyType];

        case "propertyCategory":
            return PROPERTY_CATEGORY_TRANSLATE[item.propertyCategory];

        case "availability":
            const statusText = item.availability === true ? "activo" : "inactivo";
            return (
                <Chip
                    className="capitalize cursor-pointer select-none"
                    color={statusColorMap[statusText]}
                    size="sm"
                    variant="flat"
                    onDoubleClick={() => onMutate?.(item.id)}
                    role="button"
                    tabIndex={0}
                >
                    {statusText}
                </Chip>
            );

        case "createdAt":
            return formatDate(item.createdAt, "short");

        case "updatedAt":
            return formatDate(item.updatedAt, "short");

        case "actions":
            return (
                <div className="relative flex justify-end items-center gap-2">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button isIconOnly size="sm" variant="light" className=" transition-colors duration-400">
                                <VerticalDotsIcon className="text-zinc-400" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu disabledKeys={item.availability === false ? ["edit", "delete"] : []}>
                            <DropdownItem key="edit" onPress={() => {
                                onOpenModal?.({ action: Actions.edit, id: item.id });
                            }}>
                                Editar
                            </DropdownItem>
                            <DropdownItem key="detail" onPress={() => onOpenModal?.({ action: Actions.details, id: item.id })}>
                                Ver detalles
                            </DropdownItem>
                            <DropdownItem key="custom" onPress={() => onOpenModal?.({ action: Actions.customImages, id: item.id })}>
                                Personalizar propiedad
                            </DropdownItem>
                            <DropdownItem key="share" onPress={() => searchUrl(item.url)} >
                                Compartir propiedad
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            );

        default:
            return cellValue;
    }
};
