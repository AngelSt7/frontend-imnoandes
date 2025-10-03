import { StateCreator } from "zustand";

export type ContactSlice = {
    modalContact: boolean,
    changeContactModal: () => void
};

export const useModalContact: StateCreator<ContactSlice> = (set) => ({
    modalContact: false,
    changeContactModal: () => { set((state) => ({ modalContact: !state.modalContact })) },
})
