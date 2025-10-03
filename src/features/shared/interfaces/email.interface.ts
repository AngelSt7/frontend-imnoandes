import { z } from "zod"
import { contactInfoSchema, publicContactFormSchema } from "../schemas"

export type PublicContactForm = z.infer<typeof publicContactFormSchema>
export type ContactInfoForm = z.infer<typeof contactInfoSchema>
