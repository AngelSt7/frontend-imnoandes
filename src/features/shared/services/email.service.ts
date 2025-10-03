import nest from "@/src/api/nest";
import { errorHttp } from "@/src/features/shared/utils";
import { ContactInfoForm, PublicContactForm } from "@/src/features/shared/interfaces";

const ROUTES = {
    CONCACT_OWNER: `/email/contact-owner`,
    REQUEST_INFO: `/email/request-info`
}
export class Email {
    
    static contactOwner = async (formData: PublicContactForm) => {
        try {
            const url = ROUTES.CONCACT_OWNER;
            const { data } = await nest.post(url, formData)
            return data
        } catch (error) { errorHttp(error) }
    };

    static requestInfo = async (formData: ContactInfoForm) => {
        try {
            const url = ROUTES.REQUEST_INFO;
            const { data } = await nest.post(url, formData)
            return data
        } catch (error) { errorHttp(error) }
    };

}