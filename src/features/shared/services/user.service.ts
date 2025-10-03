import nest from "@/src/api/axios"
import { UserUpdateEmail, UserUpdatePassword, UserUpdatePhone } from "@/src/features/user/interfaces"
import { errorHttp } from "@/src/features/shared/utils"

const ROUTES = {
    INFO: `/auth`,
    INFO_COMPLETE_ACCOUNT: `/auth/info-account`,
    UPDATE_PHONE: `/user/phone`,
    UPDATE_EMAIL: `/user/email`,
    UPDATE_PASSWORD: `/user/password`,
}

export class User {

    static async infoAccount(jwt: string) {
        try {
            const url = ROUTES.INFO_COMPLETE_ACCOUNT;
            const { data } = await nest.get(url, {
                headers: {
                    Cookie: `SESSION=${jwt}`
                }
            });
            return data;
        } catch (error) { errorHttp(error); }
    }

    static async validate(jwt: string) {
        try {
            const url = ROUTES.INFO;
            const { data } = await nest.get(url, {
                headers: {
                    Cookie: `SESSION=${jwt}`
                }
            });
            return data;
        } catch (error) { errorHttp(error); }
    }


    static async updatePhone(FormData: UserUpdatePhone) {
        try {
            const url = ROUTES.UPDATE_PHONE
            const { data } = await nest.patch(url, FormData)
            return data
        } catch (error) { errorHttp(error) }
    }

    static async updateEmail(FormData: UserUpdateEmail) {
        try {
            const url = ROUTES.UPDATE_EMAIL
            const { data } = await nest.patch(url, FormData)
            return data
        } catch (error) { errorHttp(error) }
    }

    static async updatePassword(FormData: UserUpdatePassword) {
        try {
            const url = ROUTES.UPDATE_PASSWORD
            const payload = {
                currentPassword: FormData.currentPassword,
                newPassword: FormData.newPassword,
                email: FormData.email
            }
            const { data } = await nest.patch(url, payload)
            return data
        } catch (error) { errorHttp(error) }
    }


}