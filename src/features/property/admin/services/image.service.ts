import nest from "@/src/api/nest";
import { errorHttp } from "@/src/features/shared/utils";
import { FormDataImage } from "../interfaces";

const ROUTES = {
    CREATE: `/images/create`,
}

export class Image {

    static async create({ formData, type }: FormDataImage) {
        try {
            const url = `${ROUTES.CREATE}/${type}`
            const { data } = await nest.post(url, formData)
            return data
        } catch (error) { errorHttp(error) }
    }

}