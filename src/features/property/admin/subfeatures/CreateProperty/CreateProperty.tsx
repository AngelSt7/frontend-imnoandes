'use client'

import { ButtonsControl, ButtonSubmit, TabsForms } from '@/src/myLib/components/Form';
import { FormDataProperty } from '@/src/features/property/admin/interfaces'
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { PropertyAdmin } from '@/src/features/property/admin/services';
import { useControlStep, useStepRules } from '../Form';
import { useState } from 'react';
import { useModalUtils, useStepsForm, useStepUpdater, useSubmitMutation } from '@/src/myLib/hooks';
import { useUser } from '@/src/features/user/contexts/UserContext';
import { revalidateCarrousel, revalidateSearch } from '@/src/actions';
import { LoadingOverlay, useLoading } from '@/src/features/shared';

export function CreateProperty() {

    const user = useUser()
    const { closeModal } = useModalUtils();
    const { setLoading } = useLoading()
    const { getStepsConfig } = useControlStep<FormDataProperty>();
    const [stepsConfig] = useState(() => getStepsConfig());
    const { methods, handleSubmit, canGoNext, canGoPrev, goToNextStep, goToPrevStep, goToStep, renderStep, currentStep, isStepComplete, updateStep, isAllStepsComplete, reset, getIncompleteStepsDetails } = useStepsForm<FormDataProperty>({ steps: stepsConfig, validationMode: 'message' });
    useStepUpdater({ formMethods: methods, rules: useStepRules(), updateStep });

    const { mutate, isPending } = useSubmitMutation({
        serviceFunction: PropertyAdmin.create,
        invalidateQueries: [["properties", user.id]],
        onSuccessServerActions: [ async () => { await Promise.all([revalidateSearch(), revalidateCarrousel()]) } ],
        onCharge: () => setLoading("Creando propiedad"),
        onSuccessCallback: () => { reset(), closeModal() },
    });

    const onSubmit: SubmitHandler<FormDataProperty> = (data: FormDataProperty) => mutate(data);

    return (
        <>
            <LoadingOverlay />
            <FormProvider {...methods}>
                <form noValidate className='mt-3' encType="multipart/form-data">
                    <TabsForms
                        numSteps={stepsConfig.length}
                        currentStep={currentStep}
                        isStepComplete={isStepComplete}
                        goToStep={goToStep}
                    />

                    {renderStep()}

                    <div className="flex w-full flex-col xs:flex-row mt-8 gap-2 xs:gap-3 xs:justify-between">
                        <ButtonsControl canGoNext={canGoNext} canGoPrev={canGoPrev} goToNextStep={goToNextStep} goToPrevStep={goToPrevStep} />
                        <ButtonSubmit
                            isPending={isPending}
                            isFormComplete={isAllStepsComplete}
                            incompleteStepsDetails={getIncompleteStepsDetails()}
                            onSubmit={() => handleSubmit(onSubmit)()}
                        />
                    </div>
                </form>
            </FormProvider>
        </>
    );
}