import { z } from "zod"
import { locationSearchSchema, locationsSearchSchema } from "../schemas"

export type LocationSearch = z.infer<typeof locationSearchSchema>
export type LocationsSearch = z.infer<typeof locationsSearchSchema>
