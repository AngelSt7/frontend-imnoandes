'use client'
import { useState, useCallback, useEffect, Suspense } from 'react';
import { Path, useForm } from 'react-hook-form';
import { StepConfig, UseStepsFormProps } from '../interfaces';

export function useStepsForm<T extends Record<string, any>>({
  steps: initialSteps,
  defaultValues,
  debug = false,
}: UseStepsFormProps<T>) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<StepConfig<T>[]>(initialSteps);

  const methods = useForm<T>({
    mode: 'onChange',
    criteriaMode: 'all',
    ...(defaultValues && { defaultValues }),
  });

  const { watch, formState, handleSubmit, trigger } = methods;

  const updateStep = useCallback((index: number, newConfig: StepConfig<T>) => {
    setSteps(prev => {
      const updated = [...prev];
      updated[index] = newConfig;
      return updated;
    });
  }, []);

  const isStepComplete = useCallback(
    (stepIndex: number): boolean => {
      if (stepIndex >= steps.length) return false;

      return steps[stepIndex].fields.every(fieldName => {
        const value = watch(fieldName as Path<T>);
        const fieldError = formState.errors[fieldName];

        if (fieldError) return false;

        if (typeof value === 'boolean') return true;
        if (typeof value === 'number') return !isNaN(value);
        if (Array.isArray(value)) return value.length > 0;
        if (typeof value === 'object' && value !== null) return Object.keys(value).length > 0;

        return value !== undefined && value !== null && value !== '';
      });
    },
    [steps, watch, formState.errors]
  );

  const canGoNext = useCallback((): boolean => {
    if (currentStep >= steps.length - 1) return false;
    return isStepComplete(currentStep);
  }, [currentStep, steps.length, isStepComplete]);

  const canGoPrev = useCallback((): boolean => currentStep > 0, [currentStep]);

  const goToNextStep = useCallback(async () => {
    const stepFields = steps[currentStep].fields;
    const isValid = await trigger(stepFields as any, { shouldFocus: true });
    if (isValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  }, [steps, currentStep, trigger]);

  const goToPrevStep = useCallback(() => {
    if (canGoPrev()) {
      setCurrentStep(prev => Math.max(prev - 1, 0));
    }
  }, [canGoPrev]);

  const renderStep = useCallback(() => {
    const currentStepConfig = steps[currentStep];
    if (!currentStepConfig) return null;
    const Component = currentStepConfig.component;

    return (
      <Suspense fallback={currentStepConfig.fallback ?? null}>
        <Component
          register={methods.register}
          errors={formState.errors}
          setValue={methods.setValue}
          watch={watch}
          control={methods.control}
          defaultValues={defaultValues}
        />
      </Suspense>
    );
  }, [currentStep, steps, methods, formState.errors, watch, defaultValues]);


  const goToStep = useCallback(
    async (targetStepIndex: number) => {
      if (targetStepIndex < 0 || targetStepIndex >= steps.length) return;
      if (targetStepIndex < currentStep) {
        setCurrentStep(targetStepIndex);
        return;
      }
      for (let i = currentStep; i < targetStepIndex; i++) {
        const stepFields = steps[i].fields;
        const isValid = await trigger(stepFields as any);
        if (!isValid || !isStepComplete(i)) {
          return;
        }
      }
      setCurrentStep(targetStepIndex);
    },
    [currentStep, steps, trigger, isStepComplete]
  );

  const getIncompleteStepsDetails = () => {
    const incompleteSteps: Array<{
      stepIndex: number;
      stepName?: string;
      missingFields: string[];
    }> = [];

    steps.forEach((step, stepIndex) => {
      const missingFields: string[] = [];

      (step.fields as Path<T>[]).forEach((fieldName) => {
        const value = watch(fieldName);
        const fieldError = formState.errors[fieldName];

        if (fieldError ||
          (typeof value !== 'boolean' &&
            typeof value !== 'number' &&
            !Array.isArray(value) &&
            typeof value !== 'object' &&
            (value === undefined || value === null || value === ''))) {
          missingFields.push(fieldName as string);
        }
      });

      if (missingFields.length > 0) {
        incompleteSteps.push({
          stepIndex,
          stepName: `Paso ${stepIndex + 1}`,
          missingFields
        });
      }
    });

    return incompleteSteps;
  };

  const getDebugState = useCallback(() => {
    const formValues = watch();
    const incompleteDetails = getIncompleteStepsDetails();

    return {
      currentStep,
      totalSteps: steps.length,
      stepFields: steps[currentStep]?.fields ?? [],
      values: formValues,
      errors: formState.errors,
      isStepComplete: isStepComplete(currentStep),
      incompleteStepsDetails: incompleteDetails,
      isFormComplete: incompleteDetails.length === 0
    };
  }, [currentStep, steps, watch, formState.errors, isStepComplete]);

  const isCurrentStepComplete = isStepComplete(currentStep);

  const isAllStepsComplete = (() => {
    const hasErrors = Object.keys(formState.errors).length > 0;
    if (hasErrors) return false;

    return steps.every((_, index) => isStepComplete(index));
  })();

  const getIncompleteSteps = useCallback(
    (): number[] =>
      steps
        .map((_, index) => (isStepComplete(index) ? null : index))
        .filter((i): i is number => i !== null),
    [steps, isStepComplete]
  );

  const validateAllSteps = useCallback(async () => {
    const incomplete: number[] = [];
    const incompleteDetails = getIncompleteStepsDetails();

    const allFields = steps.flatMap(step => step.fields);
    await trigger(allFields as any);

    for (let i = 0; i < steps.length; i++) {
      if (!isStepComplete(i)) {
        incomplete.push(i);
      }
    }

    return {
      valid: incomplete.length === 0,
      incompleteSteps: incomplete,
      incompleteDetails
    };
  }, [steps, trigger, isStepComplete]);

  useEffect(() => {
    if (debug) {
    }
  }, [debug, getDebugState]);

  return {
    methods,
    handleSubmit,
    canGoNext,
    canGoPrev,
    goToNextStep,
    goToPrevStep,
    renderStep,
    currentStep,
    watch,
    formState,
    isStepComplete: (stepIndex?: number) =>
      isStepComplete(stepIndex ?? currentStep),
    goToStep,
    totalSteps: steps.length,
    updateStep,
    getDebugState,
    reset: methods.reset,
    isCurrentStepComplete,
    isFormComplete: isAllStepsComplete,
    getIncompleteSteps,
    getIncompleteStepsDetails,
    validateAllSteps,
    isAllStepsComplete,
  };
}