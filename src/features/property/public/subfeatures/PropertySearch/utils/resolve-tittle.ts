import { PROPERTY_CATEGORY_TRANSLATE, PROPERTY_TYPE_TRANSLATE } from "@/src/features/property/admin";
import { LocationsSearch } from "@/src/features/property/public/interfaces";

export const resolveTittle = (items: number, type: string, categories: string[], locales: LocationsSearch) => {

    const CAT = categories.map(c => `${PROPERTY_CATEGORY_TRANSLATE[c as keyof typeof PROPERTY_CATEGORY_TRANSLATE]}s`).join(' o ')

    return `Mostrando ${items} ${CAT} en ${PROPERTY_TYPE_TRANSLATE[type as keyof typeof PROPERTY_TYPE_TRANSLATE]}
    ${locales.length > 0
        ? 'en ' + locales.map(l => l.label).join(' o ')
        : 'en Perú'
    }
    `
}