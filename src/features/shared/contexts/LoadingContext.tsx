"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type LoadingContextType = {
    loadingState: { loading: boolean; message?: string | undefined }
    setLoading: (message?: string) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loadingState, setLoadingState] = useState<{ loading: boolean, message?: string | undefined }>({
        loading: false,
        message: undefined
    })

    const setLoading = (msg?: string) => setLoadingState({ loading: !loadingState.loading, message: msg });

    return (
        <LoadingContext.Provider value={{ setLoading, loadingState }}>
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) throw new Error("useLoading must be used within a LoadingProvider");
    return context;
};
