'use client'
import { useQueryParam } from "@/src/myLib/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useControlNumbers = ({ keyParam }: { keyParam: string }) => {
    const params = useSearchParams();
    const router = useRouter();

    const query = useMemo(() => new URLSearchParams(params.toString()), [params]);

    const { getParam, clearParams } = useQueryParam();

    const param = getParam(keyParam)

    const onChange = (value: string) => {
        if (param === value) {
            clearParams([keyParam])
        } else {
            query.delete("page")
            query.set(keyParam, value)
            router.push(`?page=1&${query.toString()}`)
        }
    }

    return {
        param,
        clearParams,
        onChange
    }
}