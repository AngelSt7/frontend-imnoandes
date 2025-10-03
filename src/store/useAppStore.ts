import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { PublicPropertySlice, publicPropertySlice } from "./publicPropertySlice";
import { DrawerSlice, useDrawerSlice } from "./useDrawerSlice";
import { ContactSlice, useModalContact } from "./modalContactSlice";
import { useLoginSlice, LoginSlice } from './useLoginSlice';

export const useAppStore = create<PublicPropertySlice & DrawerSlice & ContactSlice & LoginSlice>()(
    devtools(
        persist(
            (...a) => ({
                ...publicPropertySlice(...a),
                ...useDrawerSlice(...a),
                ...useModalContact(...a),
                ...useLoginSlice(...a),
            }),
            {
                name: "property-storage", 
                partialize: (state) => ({ 
                    propertiesFavorites: state.propertiesFavorites
                }),
            }
        )
    )
);