import { AdminProperty } from "@/src/features/property/admin/interfaces"
import { Dispatch, SetStateAction } from "react"
import { MetaOrquest } from "../../../interfaces"

export interface ImageGalleryProps {
    meta: MetaOrquest
    setMeta: Dispatch<SetStateAction<MetaOrquest>>
    propertyId: AdminProperty['id']
}