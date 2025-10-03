import { CURRENCY, PROPERTY_CATEGORY, PROPERTY_TYPE } from "./enums"

export const PROPERTY_TYPE_SELECT = [
  { key: PROPERTY_TYPE.VENTA, label: 'Venta' },
  { key: PROPERTY_TYPE.ALQUITLER, label: 'Alquiler' }
]

export const CURRENCY_SELECT = [
  { key: CURRENCY.PEN, label: 'PEN' },
  { key: CURRENCY.USD, label: 'USD' }
]

export const PROPERTY_CATEGORY_SELECT = [
  { key: PROPERTY_CATEGORY.CASA, label: 'Casa' },
  { key: PROPERTY_CATEGORY.APARTAMENTO, label: 'Apartamento' },
  { key: PROPERTY_CATEGORY.TERRENO, label: 'Terreno' },
  { key: PROPERTY_CATEGORY.COMERCIAL, label: 'Comercial' },
  { key: PROPERTY_CATEGORY.OFICINA, label: 'Oficina' },
  { key: PROPERTY_CATEGORY.ALMACEN, label: 'Almacen' },
]

export const DEPARTMENT_SELECT = [
  { key: '4f08579e-119e-44f9-8aca-6995d1908760', label: 'Lima' },
  { key: 'e364f50f-33d2-4fdc-a8ab-ad54fb74328b', label: 'Cusco' },
  { key: '24548674-023a-4be5-a461-2989f5e73c98', label: 'Ica' },
  { key: '7d54cabf-e561-4fbc-9a2c-e0b0071da34f', label: 'Arequipa' },
  { key: 'dd7662f2-3bc7-48a4-84d8-4a6e2414ea94', label: 'Piura' },
]