import { AdminProperty } from "@/src/features/property/admin/interfaces";
import { MetaOrquest } from "../../../interfaces";
import { Dispatch, SetStateAction } from "react";

export interface ImageMainProps {
    currentId?: AdminProperty['id']
    meta: MetaOrquest
    setMeta: Dispatch<SetStateAction<MetaOrquest>>
    propertyId: AdminProperty['id']
}
