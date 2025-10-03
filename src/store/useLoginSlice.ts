import { StateCreator } from "zustand";

export type LoginSlice = {
    statusModalLogin: boolean
    onChangeLogin: () => void
};

export const useLoginSlice: StateCreator<LoginSlice> = (set) => ({
    statusModalLogin: false,
    onChangeLogin: () => { set((state) => ({ statusModalLogin: !state.statusModalLogin })) },
})
