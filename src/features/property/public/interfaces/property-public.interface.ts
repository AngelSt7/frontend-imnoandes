import { z } from "zod";
import { propertySearchSchema, propertiesSearchSchema, carrouselItemSchema, propertySchema } from "../schemas";

export type PublicProperty = z.infer<typeof propertySchema>;
export type PropertySearch = z.infer<typeof propertySearchSchema>;
export type PropertiesSearch = z.infer<typeof propertiesSearchSchema>;
export type CarrouselItem = z.infer<typeof carrouselItemSchema>;