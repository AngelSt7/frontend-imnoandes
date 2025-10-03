import { z } from "zod";

export const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    lastname: z.string(),
    email: z.string().email(),
    authProvider: z.enum(["LOCAL", "GOOGLE"]), 
    confirmed: z.boolean(),
    birthDate: z.preprocess((val) => new Date(val as string), z.date()), 
    phone: z.number().nullable(),
    createdAt: z.preprocess((val) => new Date(val as string), z.date()),
    exp: z.number()
});


export const userUpdatePhoneSchema = z.object({
    phone: z.number().nullable(),
})

export const userUpdateEmailSchema = z.object({
    email: z.string().email(),
})

export const userUpdatePasswordSchema = z.object({
    email: z.string().email(),
    currentPassword: z.string(), 
    newPassword: z.string(),
    repeatPassword: z.string()
})