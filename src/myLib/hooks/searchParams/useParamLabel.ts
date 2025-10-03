'use client'

import { use, useMemo } from "react";
import { useQueryParam } from "@/src/myLib/hooks/searchParams/useQueryParam";
import { SharedSelection } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

export interface Option {
  key: string;
  value: string;
}

export function useParamLabel(
  key: string,
  options: Option[],
  defaultLabel: string = "Cualquier opción"
) {
  const params = useSearchParams();
  const router = useRouter();
  const query = new URLSearchParams(params.toString())
  const { getParam, clearParams } = useQueryParam();

  const getLabel = () => {
    const value = getParam(key);
    if (!value) return new Set(["ALL"]);
    const match = options.find(opt => opt.key === value);
    return new Set([match?.key || "ALL"]);
  };

  const getText = useMemo(() => {
    const value = getParam(key);
    const selectedOption = options.find(opt => opt.key === value);
    return selectedOption?.value || defaultLabel;
  }, [getParam, key, options, defaultLabel]);

  const handleChange = (keys: SharedSelection) => {
    const selectedKey = Array.from(keys)[0].toString();
    if (selectedKey === "ALL") {
      clearParams([key]);
    } else {
      query.delete("page");
      query.set(key, selectedKey);
      router.push(`?page=1&${query.toString()}`);
    }
  };

  return { getLabel, getText, handleChange };
}
