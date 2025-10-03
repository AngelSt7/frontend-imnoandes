import { StateCreator } from "zustand";

export type DrawerSlice = {
    statusDrawer: boolean
    onChangeDrawer: () => void
};

export const useDrawerSlice: StateCreator<DrawerSlice> = (set) => ({
    statusDrawer: false,
    onChangeDrawer: () => { set((state) => ({ statusDrawer: !state.statusDrawer })) },
})
