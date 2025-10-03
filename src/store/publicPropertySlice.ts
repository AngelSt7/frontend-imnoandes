import { StateCreator } from "zustand";
import { PropertySearch } from "../features/property/public";

export type PublicPropertySlice = {
    propertiesFavorites: PropertySearch[]
    setPropertyFavorite: (property: PropertySearch) => void
    deletePropertyFavorite: (property: PropertySearch) => void
};

export const publicPropertySlice: StateCreator<PublicPropertySlice> = (set) => ({
    propertiesFavorites: [],
    setPropertyFavorite: (property: PropertySearch) => {set((state) => ({ propertiesFavorites: [...state.propertiesFavorites, property] }))},
    deletePropertyFavorite: (property: PropertySearch) => {set((state) => ({ propertiesFavorites: state.propertiesFavorites.filter(p => p.id !== property.id) }))},
})
