export const Tittles : Record<string, string> = {
    '/dashboard/propiedades': 'Propiedades',
}
export const ActionLabels: Record<string, string> = {
  create: "Añadir",
  edit: "Editar",
  details: "Detalles",
  "custom-images": "Administrar Imagenes",
  "change-status": "Change status of",
};

export const Entity : Record<string, ENTITY> = {
    '/dashboard/propiedades': 'property',
}


type ENTITY = 'property' | 'client'