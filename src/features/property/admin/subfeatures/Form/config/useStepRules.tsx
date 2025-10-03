"use client";
import { FormDataProperty } from "@/src/features/property/admin/interfaces";
import { PROPERTY_CATEGORY } from "@/src/features/property/admin/constants";
import { useControlStep } from "./useControlStep";
import { useCreateStepRules } from "@/src/myLib/hooks"
import toast from "react-hot-toast";

export function useStepRules() {
  const { getStepThreeConfig, getStepFourConfig } = useControlStep();

  const rules = [
    useCreateStepRules<FormDataProperty>({
      stepIndex: 2,
      watchFields: ["propertyCategory", "hasParking"],
      condition: (values) => !!values.propertyCategory,
      getConfig: (values) =>
        getStepThreeConfig(
          values.propertyCategory,
          Boolean(values.hasParking)
        ),
    }),
    useCreateStepRules<FormDataProperty>({
      stepIndex: 3,
      watchFields: ["propertyCategory"],
      condition: (values) => !!values.propertyCategory,
      getConfig: (values) => getStepFourConfig(values.propertyCategory),
      onComplete: (values) => {
        if (values.propertyCategory === PROPERTY_CATEGORY.TERRENO) {
          toast.success("Paso 4 completado automáticamente por la categoría del inmueble");
        }
      }
    })

  ];

  return rules;
}
