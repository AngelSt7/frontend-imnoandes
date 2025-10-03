import nest from "@/src/api/nest";
import { errorHttp } from "@/src/features/shared/utils";
import { propertiesSearchSchema } from "@/src/features/property/public/schemas";
import { AdminProperty } from "../../property/admin";


const ROUTES = {
    LISTS_IDS : `favorite/ids`,
    LIST: `favorite`,
    CREATE: `favorite`,
    DELETE: `favorite`
}
export class Favorite {
    
    static list = async (page: number) => {
        try {
            const url = `${ROUTES.LIST}?page=${page}`
            const { data } = await nest.get(url)
            const response = propertiesSearchSchema.safeParse(data)
            if (response.success) { return response.data }
        } catch (error) { errorHttp(error) }
    }
    
    static ids = async () => {
        try {
            const url = `${ROUTES.LISTS_IDS}`
            const { data } = await nest.get(url)
            return data
        } catch (error) { errorHttp(error) }
    }

    static create = async (formData: AdminProperty['id']) => {
        try {
            const url = ROUTES.CREATE
            const { data } = await nest.post(url, { propertyId: formData })
            return data
        } catch (error) { errorHttp(error) }
    }

    static delete = async (id: string) => {
        try {
            const url = `${ROUTES.DELETE}/${id}`
            const { data } = await nest.delete(url)
            return data
        } catch (error) { errorHttp(error) }
    }


}