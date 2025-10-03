import { AuthCompleteAccount } from "@/src/features/auth/interfaces"
import { UserInfo } from "@/src/features/user/interfaces"

export const formatCompleteAccount = (user: UserInfo): AuthCompleteAccount => {
    return {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        phone: "",
        birthDate: ""
    }
}