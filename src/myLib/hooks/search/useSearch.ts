'use client'

import { ApiResponse } from "@/src/features/shared";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useDebounce, useQueryParam } from "@/src/myLib/hooks";
import { useEffect, useMemo, useState } from "react";
import { useGetFilters } from "./useGetFilters";
import { useRouter, useSearchParams } from "next/navigation";

interface UseSearchProps<T> {
  baseKey: String[];
  functionService: (filters: any) => Promise<ApiResponse<T> | undefined>;
  validParams: string[]
}

export const useSearch = <T,>({
  baseKey,
  functionService,
  validParams
}: UseSearchProps<T>) => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const { getParam } = useQueryParam()
  const { getParams } = useGetFilters(validParams)

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const filters = useMemo(() => getParams(searchParams), [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (debouncedSearch.trim()) {
      params.set("search", debouncedSearch);
    } else {
      params.delete("search");
    }
    params.set("page", "1");
    router.push(`?${params.toString()}`);
  }, [debouncedSearch]);

  const queryKey = useMemo(
    () => [...baseKey, filters.query],
    [baseKey, filters]
  );

  const { data: response, isFetching: isLoading } = useQuery({
    queryKey,
    queryFn: () => functionService(filters),
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (response?.meta && Number(getParam("page")) > response.meta.totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.push(`?${params.toString()}`);
    }
  }, [response?.meta, searchParams, getParam, router]);

  return {
    search,
    setSearch,
    data: response?.data ?? [],
    meta: response?.meta ?? undefined,
    isLoading
  };
};