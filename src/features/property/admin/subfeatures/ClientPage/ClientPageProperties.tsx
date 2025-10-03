"use client";

import { Actions, useModalUtils, useQueryParam, useSubmitMutation } from "@/src/myLib/hooks";
import { AdminProperty, TOP_CONTENT_SHOW } from "@/src/features/property/admin/interfaces";
import { buildKey, resolveFunction } from "@/src/features/property/admin/utils";
import { COLUMNS } from "@/src/features/property/admin/constants";
import { Filters, RenderCellProperty, TopContent, AddButton } from "./components";
import { GenericDataWrapper, GenericModal, TableContent } from "@/src/myLib/components";
import { PropertyAdmin } from "@/src/features/property/admin/services";
import { validParams } from "./constants";
import { UserInfo } from "@/src/features/user/interfaces";
import { LoadingProvider } from "@/src/features/shared/contexts/LoadingContext";

export function ClientPageProperties({ user }: { user: UserInfo }) {
    const { openModal, closeModal } = useModalUtils();
    const { getParam } = useQueryParam();
    const ID = getParam("id");
    const action = getParam("action");
    const { mutate } = useSubmitMutation({
        serviceFunction: PropertyAdmin.changeStatus,
        invalidateQueries: [["properties", user.id]],
    });

    return (
        <LoadingProvider>
            <div className='block md:hidden'>
                <AddButton
                    onPress={() => openModal({ action: Actions.create })}
                    label="Agregar propiedad"
                />
            </div>
            <TableContent<AdminProperty, TOP_CONTENT_SHOW>
                columns={COLUMNS}
                topContent={TopContent}
                baseKey={["properties", user.id]}
                defaultVisibleColumns={["name", "price", "currency", "propertyType", "propertyCategory", "availability", "actions"]}
                renderCells={RenderCellProperty}
                renderCellsProps={{
                    onOpenModal: openModal,
                    onMutate: mutate
                }}
                renderFilters={Filters}
                onList={PropertyAdmin.list}
                getRowId={(item) => item.id}
                validParams={validParams}
            />

            <GenericModal closeModal={closeModal} />

            {((ID && action === "details") || (ID && action === "edit") || (ID && action === "custom-images")) && (
                <GenericDataWrapper
                    id={ID}
                    user={user}
                    serviceFunction={resolveFunction(ID, action)!}
                    queryKey={buildKey(action, ID)}
                    closeModal={closeModal}
                />
            )}

        </LoadingProvider>
    );
}
