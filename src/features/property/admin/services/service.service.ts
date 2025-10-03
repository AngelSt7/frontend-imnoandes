import nest from "@/src/api/axios"
import { errorHttp, mapFormatUI } from "@/src/features/shared/utils"

const ROUTES = {
    LIST: `/service`
}

export class Service {
    static async list() {
        try {
            const url = `${ROUTES.LIST}`
            const { data } = await nest.get(url)
            const service = mapFormatUI('service').safeParse(data)
            if(service.success) return service.data
        } catch (error) { errorHttp(error) }
    }
}