import { errorHttp, mapFormatUI } from "@/src/features/shared"
import { locationsSearchSchema } from "../schemas"
import { LocationsSearch, LocationSearch } from "../interfaces"
import nest from "@/src/api/nest"

const ROUTES = {
    SEARCH: `location/search`,
    PROVINCES: `/location/provinces`,
    DISTRICTS: `/location/districts`
}

const base = `${process.env.NEXT_PUBLIC_NEST_URL}`

export class Location {

    static search = async (search: string): Promise<LocationsSearch | undefined> => {
        try {

            const url = `${base}/${ROUTES.SEARCH}?search=${search}`
            const res = await fetch(url)
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
            const data = await res.json()
            const parsed = locationsSearchSchema.safeParse(data)
            if (parsed.success) { return parsed.data }
        } catch (error) { errorHttp(error) }
    }

    static list = async (slugs: LocationSearch['slug'][]): Promise<LocationsSearch | undefined> => {
        try {
            if (!slugs || slugs.length === 0) return undefined;
            const url = `${base}/location?slugs=${slugs.join(",")}`;
            const res = await fetch(url)
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
            const data = await res.json()
            const parsed = locationsSearchSchema.safeParse(data)
            if (parsed.success) { return parsed.data }
        } catch (error) { errorHttp(error) }
    }

    static listProvinces = async (id: string) => {
        try {
            const url = `${ROUTES.PROVINCES}/${id}`
            const { data } = await nest.get(url)
            const prepared = mapFormatUI('province').safeParse(data)
            if (prepared.success) return prepared.data
        } catch (error) { errorHttp(error) }
    }

    static listDistricts = async (id: string) => {
        try {
            const url = `${ROUTES.DISTRICTS}/${id}`
            const { data } = await nest.get(url)
            const prepared = mapFormatUI('district').safeParse(data)
            if (prepared.success) return prepared.data
        } catch (error) { errorHttp(error) }
    }

}