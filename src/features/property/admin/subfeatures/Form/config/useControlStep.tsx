import { useCallback } from "react";
import { useStepFields } from "../config/useStepFields";
import { StepConfig } from "@/src/myLib/hooks/formStep/interfaces";
import { StepFour, StepOne, StepThree, StepTwo } from "./charge";
import { SkeletonStepFour, SkeletonStepOne, SkeletonStepThree, SkeletonStepTwo } from "../components";

export const useControlStep = <T extends unknown>() => {
  const {
    getStepOneFields,
    getStepTwoFields,
    getStepThreeFields,
    getStepFourFields,
  } = useStepFields();

  const getStepOneConfig = useCallback(
    (): StepConfig<T> => ({
      component: StepOne as React.ComponentType<any>,
      fallback: <SkeletonStepOne />,
      fields: getStepOneFields(),
    }),
    [getStepOneFields]
  );

  const getStepTwoConfig = useCallback(
    (): StepConfig<T> => ({
      component: StepTwo as React.ComponentType<any>,
      fallback: <SkeletonStepTwo />,
      fields: getStepTwoFields(),
    }),
    [getStepTwoFields]
  );

  const getStepThreeConfig = useCallback(
    (propertyCategory?: string, hasParking?: boolean): StepConfig<T> => ({
      component: StepThree as React.ComponentType<any>,
      fallback: <SkeletonStepThree />,
      fields: getStepThreeFields(propertyCategory, hasParking),
    }),
    [getStepThreeFields]
  );

  const getStepFourConfig = useCallback(
    (propertyCategory?: string): StepConfig<T> => ({
      component: StepFour as React.ComponentType<any>,
      fallback: <SkeletonStepFour />,
      fields: getStepFourFields(propertyCategory),
    }),
    [getStepFourFields]
  );

  const getStepsConfig = useCallback(
    (propertyCategory?: string, hasParking?: boolean): StepConfig<T>[] => [
      getStepOneConfig(),
      getStepTwoConfig(),
      getStepThreeConfig(propertyCategory, hasParking),
      getStepFourConfig(propertyCategory),
    ],
    [getStepOneConfig, getStepTwoConfig, getStepThreeConfig, getStepFourConfig]
  );

  const getStepsOnEdit = useCallback(
    (propertyCategory?: string, hasParking?: boolean | undefined | null ) =>
      getStepsConfig(propertyCategory, Boolean(hasParking)),
    [getStepsConfig]
  );

  return {
    getStepsConfig,
    getStepOneConfig,
    getStepTwoConfig,
    getStepThreeConfig,
    getStepFourConfig,
    getStepsOnEdit
  };
};