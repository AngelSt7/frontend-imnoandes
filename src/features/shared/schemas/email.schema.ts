import { z } from "zod"

export const contactInfoSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string()
})

export const publicContactFormSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
  address: z.string(),
  ownerEmail: z.string()
})
