'use client';

import { useStatusForm } from './hooks/useStatusForm';
import { useAppStore } from '@/src/store/useAppStore';
import { CheckEmailForm, CheckPasswordForm, RequestToken, RequiredOTP } from './components';
import { useErrorToast } from './hooks';

export function LoginOrquest({ isModal }: { isModal?: boolean }) {
    useErrorToast();
    const { statusForm, setStatusForm } = useStatusForm();
    const onChangeLogin = useAppStore(state => state.onChangeLogin);

    return (
        <div className='border-b border-gray-300 px-6 pb-6'>
            {statusForm.init && (
                <CheckEmailForm statusForm={statusForm} setStatusForm={setStatusForm} />
            )}
            {(statusForm.requiredPassword && statusForm.meta.email) && (
                <CheckPasswordForm isModal={isModal} email={statusForm.meta.email} />
            )}
            {(statusForm.requestToken && statusForm.meta.email) && <RequestToken />}
            {statusForm.requiredOtp && <RequiredOTP isModal={isModal} onChangeLogin={onChangeLogin} />}
        </div>
    )
}