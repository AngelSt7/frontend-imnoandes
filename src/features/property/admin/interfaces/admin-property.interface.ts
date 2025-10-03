import { z } from "zod";
import { findPropertySchema, formDataPropertySchema, propertiesListSchema, propertyDetailsSchema, propertyImagesSchema, propertySchema } from "../schemas";

export type FormDataProperty = z.infer<typeof formDataPropertySchema>

export type AdminProperties = z.infer<typeof propertiesListSchema>
export type AdminProperty = z.infer<typeof propertySchema>

export type AdminDetailsProperty = z.infer<typeof propertyDetailsSchema>
export type AdminPropertyById = z.infer<typeof findPropertySchema>

export type AdminPropertyImages = z.infer<typeof propertyImagesSchema>
