"use client";

import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormDataProperty } from "@/src/features/property/admin/interfaces";
import { useEffect, useRef } from "react";

type CascadeResetProps = {
  watch: UseFormWatch<FormDataProperty>;
  setValue: UseFormSetValue<FormDataProperty>;
  defaultValues: FormDataProperty;
};

export function useCascadeReset({ watch, setValue, defaultValues }: CascadeResetProps) {
  const departmentId = watch("departmentId");
  const provinceId = watch("provinceId");

  const prevDepartmentRef = useRef<string | null>(defaultValues.departmentId ?? null);
  const prevProvinceRef = useRef<string | null>(defaultValues.provinceId ?? null);

  useEffect(() => {
    if (departmentId !== prevDepartmentRef.current) {
      setValue("provinceId", "");
      setValue("districtId", "");
      prevDepartmentRef.current = departmentId ?? null;
    }
  }, [departmentId, setValue]);

  useEffect(() => {
    if (provinceId !== prevProvinceRef.current) {
      setValue("districtId", "");
      prevProvinceRef.current = provinceId ?? null;
    }
  }, [provinceId, setValue]);
}
