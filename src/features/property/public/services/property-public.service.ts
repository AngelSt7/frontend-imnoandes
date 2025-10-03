import { carrouselSchema, propertiesSearchSchema, propertySchema } from "@/src/features/property/public/schemas"
import { errorHttp, hashKey } from "@/src/features/shared/utils"
import { SearchFilters } from "../interfaces/search.interface"
import fetchSSR from "@/src/api/fetch"

const ROUTES = {
    CARROUSEL: `property-public/carrousel`,
    SEARCH: `property-public/search`,
    CARD: `/property/card`,
}

const base = `${process.env.NEXT_PUBLIC_NEST_URL}`

export class PropertyPublic {

    static carrousel = async (type: string = 'SALE', quantity: number = 5) => {
        try {
            const url = `${base}/${ROUTES.CARROUSEL}?propertyType=${type}&quantity=${quantity}`
            const res = await fetchSSR(url, { next: { tags: ["carrousel", type], revalidate: 3600 } })
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
            const data = await res.json()
            const parsed = carrouselSchema.safeParse(data)
            if (parsed.success) { return parsed.data }
        } catch (error) { errorHttp(error) }
    }

    static search = async (searchFilters: SearchFilters) => {
        try {
            if (!searchFilters.hasFilters) return null
            const url = searchFilters.hasFilters
                ? `${base}/${ROUTES.SEARCH}?${searchFilters.filters}`
                : `${base}/${ROUTES.SEARCH}`
            const tag = hashKey(searchFilters.tag);
            const res = await fetchSSR(url, { next: { tags: ["properties-search", tag], revalidate: 3600 } })
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
            const data = await res.json()
            const parsed = propertiesSearchSchema.safeParse(data)
            if (parsed.success) { return parsed.data }
        } catch (error) { errorHttp(error) }
    }

    static find = async (id: string) => {
        try {
            const url = `${base}/property-public/${id}`
            const res = await fetchSSR(url, { next: { tags: [`property-${id}`], revalidate: 0 } })
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
            const data = await res.json()
            const parsed = propertySchema.safeParse(data)
            if (parsed.success) { return parsed.data }
        } catch (error) { errorHttp(error) }
    }
}