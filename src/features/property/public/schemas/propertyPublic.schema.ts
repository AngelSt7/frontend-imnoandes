import { z } from "zod";
import { MetaSchema } from '../../../shared/schemas';
import { CURRENCY, PROPERTY_CATEGORY, PROPERTY_TYPE } from "@/src/features/property/admin/constants";

export const carrouselItemSchema = z.object({
  id: z.string().uuid(),
  price: z.number(),
  currency: z.string(),
  propertyType: z.string(),
  propertyCategory: z.string(),
  address: z.string(),
  createdAt: z.union([z.string(), z.date()]),
  bedrooms: z.number().nullish(),
  bathrooms: z.number().nullish(),
  area: z.number(),
  image: z.string().url().nullish(),
  department: z.string().nullish(),
  district: z.string().nullish(),
  url: z.string()
});

export const carrouselSchema = z.array(carrouselItemSchema);

export const propertySchema = z.object({
  name: z.string(),
  address: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  price: z.number(),
  email: z.string(),
  currency: z.nativeEnum(CURRENCY),
  availability: z.boolean(),
  propertyType: z.nativeEnum(PROPERTY_TYPE),
  propertyCategory: z.nativeEnum(PROPERTY_CATEGORY),
  floor: z.number().nullable().optional(),
  hasParking: z.boolean().nullable().optional(),
  parkingSpaces: z.number().nullable().optional(),
  bedrooms: z.number().nullable().optional(),
  bathrooms: z.number().nullable().optional(),
  area: z.number().nullable().optional(),
  furnished: z.boolean().nullable().optional(),
  hasTerrace: z.boolean().nullable().optional(),
  createdAt: z.string().transform((str) => new Date(str)),
  updatedAt: z.string().transform((str) => new Date(str)),
  yearBuilt: z.number().nullable(),
  description: z.string(),
  extraInfo: z.string().nullable(),
  phone: z.string(),
  department: z.string().nullable(),
  province: z.string().nullable(),
  district: z.string().nullable(),
  services: z.array(z.string()),
  images: z.array(
    z.object({
      url: z.string(),
      type: z.string().nullable().optional(),
    })
  ),
  url: z.string(),
})

export const propertySearchSchema = z.object({
  id: z.string(),
  slug: z.string(),
  price: z.number(),
  currency: z.string(),
  propertyType: z.string(),
  description: z.string(),
  propertyCategory: z.string(),
  address: z.string(),
  hasParking: z.boolean().nullish(),
  parkingSpaces: z.number().nullish(),
  createdAt: z.string().or(z.date()),
  bedrooms: z.number().nullish(),
  bathrooms: z.number().nullish(),
  services: z.array(z.string()),
  area: z.number().nullish(),
  images: z
  .array(
      z.object({
          url: z.string().url(),
          type: z.string()
        })
    )
    .nullish(),
  department: z.string().nullish(),
  district: z.string().nullish(),
  url: z.string()
});

export const propertiesSearchSchema = z.object({
    data: z.array(propertySearchSchema),
    meta: MetaSchema
})

