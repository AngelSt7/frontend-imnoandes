import { STATE } from "@/src/features/property/admin/subfeatures/ClientPage/components/Filters/constants";
import { useMemo } from "react";

interface FiltersProps {
    onGetParam: (key: string) => string | undefined
}

export const useFilterState = ({
    onGetParam
} : FiltersProps ) => {
    
        const resolveLabel = (paramKey: string) => {
            const value = onGetParam(paramKey);
            switch (value) {
                case "true":
                    return new Set(["Activos"]);
                case "false":
                    return new Set(["Inactivos"]);
                default:
                    return new Set(["Todos"]);
            }
        };
    
        const getStatusButtonText = useMemo(() => {
            const value = onGetParam("availability");
            const selectedOption = STATE.find(option => {
                if (value === "true") return option.key === "Activos";
                if (value === "false") return option.key === "Inactivos";
                return option.key === "Todos";
            });
            return selectedOption?.value || "Estados";
        }, [onGetParam]);


    return {
        resolveLabel,
        getStatusButtonText
    }
}