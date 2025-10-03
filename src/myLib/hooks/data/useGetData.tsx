'use client'

import { useQuery, keepPreviousData } from "@tanstack/react-query";

interface GetProps<T extends (id?: any) => Promise<any>> {
  functionService: T;
  queryKey: string[];
  id?: Parameters<T>[0];
  enabled?: boolean;
}

export const useGetData = <T extends (id?: any) => Promise<any>>({
  functionService,
  queryKey,
  enabled,
  id,
}: GetProps<T>) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => (id ? functionService(id) : functionService()),
    refetchOnWindowFocus: false,
    retry: false,
    placeholderData: keepPreviousData,
    enabled
  });
};
