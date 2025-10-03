'use client'

import { ButtonsControl, ButtonSubmit, TabsForms } from '@/src/myLib/components/Form';
import { FormDataProperty } from '@/src/features/property/admin/interfaces';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { PropertyAdmin } from '@/src/features/property/admin/services';
import { useCascadeReset, useControlStep, useStepRules } from "../Form"
import { useModalUtils, useStepsForm, useStepUpdater, useSubmitMutation } from '@/src/myLib/hooks';
import equal from "fast-deep-equal";
import toast from 'react-hot-toast';
import { UserInfo } from '@/src/features/user/interfaces';
import { revalidateCarrousel, revalidateProperty, revalidateSearch } from '@/src/actions';
import { LoadingOverlay, useLoading } from '@/src/features/shared';

interface EditPropertyProps {
    user?: UserInfo
    defaultValues: FormDataProperty
}

export function EditProperty({ defaultValues, user }: EditPropertyProps) {
    const { closeModal } = useModalUtils();
    const { getStepsOnEdit } = useControlStep();
    const { setLoading } = useLoading()
    const stepsConfig = getStepsOnEdit(defaultValues.propertyCategory, Boolean(defaultValues.hasParking));
    const { methods, handleSubmit, canGoNext, canGoPrev, goToNextStep, goToPrevStep, goToStep, renderStep, currentStep, isStepComplete, updateStep, reset, isAllStepsComplete, getIncompleteStepsDetails } = useStepsForm<FormDataProperty>({ steps: stepsConfig, defaultValues, validationMode: 'message' });
    useCascadeReset({ watch: methods.watch, setValue: methods.setValue, defaultValues });
    useStepUpdater({ formMethods: methods, rules: useStepRules(), updateStep });

    const { mutate, isPending } = useSubmitMutation({
        serviceFunction: PropertyAdmin.edit,
        invalidateQueries: [
            ["property", "edit", defaultValues.id],
            ["property", "details", defaultValues.id],
            ["properties", user?.id]
        ],
        onSuccessServerActions: [
            async () => {
                await Promise.all([revalidateProperty(defaultValues.id!), revalidateSearch(), revalidateCarrousel()])
            }
        ],
        onCharge: () => setLoading("Actualizando propiedad"),
        onSuccessCallback: async () => {
            reset();
            closeModal();
        }
    });

    const onSubmit: SubmitHandler<FormDataProperty> = (data: FormDataProperty) => {
        const normalized = { ...data, phone: String(data.phone) };
        if (equal(normalized, defaultValues)) return toast.error("No se han detectado cambios en la propiedad");
        mutate(data);
    };

    return (
        <>
            <LoadingOverlay />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='mt-3'>
                    <TabsForms
                        numSteps={stepsConfig.length}
                        currentStep={currentStep}
                        isStepComplete={isStepComplete}
                        goToStep={goToStep}
                    />

                    {renderStep()}

                    <div className="flex mt-8 gap-3 justify-between">
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