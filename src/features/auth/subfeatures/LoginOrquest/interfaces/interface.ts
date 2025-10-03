import { Dispatch } from "react"

export interface StatusForm {
    init: boolean,
    requiredPassword: boolean,
    requiredOtp: boolean,
    meta: { email: string | null }
    requestToken: boolean
}

export interface CheckEmailFormProps {
    statusForm: StatusForm,
    setStatusForm: Dispatch<StatusForm>
}