import { z } from "zod";

export const locationSearchSchema = z.object({
  slug: z.string(),
  label: z.string()
})

export const locationsSearchSchema = z.array(locationSearchSchema)
