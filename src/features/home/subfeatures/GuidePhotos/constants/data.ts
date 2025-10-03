import { Lightbulb, Camera, Ruler, Star } from "lucide-react";

export const bestPractices = [
    'Limpia y ordena todos los espacios antes de fotografiar',
    'Enciende todas las luces para complementar la iluminación natural',
    'Fotografía todas las habitaciones principales y áreas comunes',
    'Incluye fotos del exterior, fachada y áreas recreativas',
    'Asegúrate de que las imágenes estén enfocadas y nítidas',
    'No uses filtros excesivos que alteren los colores reales'
];

export const commonMistakes = [
    'Fotografiar con poca luz o en horarios nocturnos',
    'Incluir personas, mascotas o elementos personales en las fotos',
    'Tomar fotos con el celular en posición vertical (siempre horizontal)',
    'Subir imágenes borrosas, pixeladas o de baja calidad',
    'No mostrar el estado real de la propiedad',
    'Olvidar fotografiar espacios importantes como baños o cocina'
];

export const imageMainSpecs = {
    title: 'Imagen Principal',
    description: 'La imagen que representa tu propiedad en listados y búsquedas',
    specs: [
        { label: 'Dimensiones mínimas', value: '1280 x 960 píxeles' },
        { label: 'Dimensiones máximas', value: '2000 x 1800 píxeles' },
        { label: 'Tamaño máximo', value: '5 MB' },
        { label: 'Formatos permitidos', value: 'JPG, PNG' },
        { label: 'Cantidad', value: '1 imagen obligatoria' }
    ]
};

export const gallerySpecs = {
    title: 'Imágenes de Galería',
    description: 'Las imágenes adicionales que muestran los detalles de tu propiedad',
    specs: [
        { label: 'Dimensiones mínimas', value: '800 x 600 píxeles' },
        { label: 'Dimensiones máximas', value: '2000 x 1500 píxeles' },
        { label: 'Tamaño máximo', value: '3 MB por imagen' },
        { label: 'Formatos permitidos', value: 'JPG, PNG' },
        { label: 'Cantidad', value: 'Mínimo 2, máximo 10 imágenes' }
    ]
};


export const tips = [
    {
        icon: Lightbulb,
        title: 'Iluminación Natural',
        content: 'Fotografía durante el día con luz natural. Abre cortinas y persianas para aprovechar la luz del sol. Evita usar flash, ya que puede crear sombras duras y colores poco naturales. La mejor hora es entre las 10 AM y 3 PM cuando hay más luz disponible.'
    },
    {
        icon: Camera,
        title: 'Ángulos Estratégicos',
        content: 'Toma las fotos desde las esquinas de cada habitación para capturar la mayor amplitud posible. Mantén la cámara a la altura del pecho o ligeramente más abajo. Esto ayuda a mostrar la verdadera dimensión de los espacios y evita distorsiones.'
    },
    {
        icon: Ruler,
        title: 'Composición y Espacio',
        content: 'Asegúrate de que las líneas horizontales (como zócalos y techos) estén rectas. Evita incluir objetos personales, desorden o elementos que distraigan del espacio. El objetivo es que el futuro inquilino o comprador pueda imaginarse viviendo allí.'
    },
    {
        icon: Star,
        title: 'Destaca lo Mejor',
        content: 'Captura las características únicas de la propiedad: acabados especiales, vistas panorámicas, espacios amplios, áreas verdes o comodidades. Estas son las imágenes que hacen que tu propiedad se destaque entre las demás en el listado.'
    }
];


export const levels = [
  {
    title: "Básico",
    items: [
      "• Smartphone con cámara de 12MP o superior",
      "• Manos firmes o superficie estable",
      "• Luz natural abundante",
    ],
  },
  {
    title: "Intermedio",
    items: [
      "• Trípode para estabilidad",
      "• Lente gran angular",
      "• Editor de fotos básico",
    ],
  },
  {
    title: "Avanzado",
    items: [
      "• Cámara DSLR o mirrorless",
      "• Iluminación artificial adicional",
      "• Software de edición profesional",
    ],
  },
];