import { z } from "zod"
import { userSchema, userUpdateEmailSchema, userUpdatePasswordSchema, userUpdatePhoneSchema } from "../schemas"

export type UserUpdatePhone = z.infer<typeof userUpdatePhoneSchema>
export type UserUpdatePassword = z.infer<typeof userUpdatePasswordSchema>
export type UserUpdateEmail = z.infer<typeof userUpdateEmailSchema>
export type UserInfo = z.infer<typeof userSchema>