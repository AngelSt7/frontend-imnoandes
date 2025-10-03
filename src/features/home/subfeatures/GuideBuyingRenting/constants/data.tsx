import { ShieldCheck, Eye, FileCheck, DollarSign, MapPin, Building, Key, MessageCircle } from "lucide-react";

export const alquilerChecklist = [
  {
    category: 'Verificación del Usuario',
    icon: ShieldCheck,
    items: [
      'Verifica que el perfil del arrendador tenga la insignia de "Usuario Verificado"',
      'Revisa las calificaciones y comentarios de otros usuarios',
      'Comprueba que tenga más de una propiedad publicada o historial en la plataforma',
      'Solicita referencias de inquilinos anteriores si es posible'
    ]
  },
  {
    category: 'Inspección de la Propiedad',
    icon: Eye,
    items: [
      'Agenda una visita presencial, nunca alquiles sin ver el inmueble',
      'Verifica que la propiedad coincida con las fotos y descripción del anuncio',
      'Revisa el estado de instalaciones eléctricas, tuberías y acabados',
      'Comprueba el funcionamiento de electrodomésticos incluidos',
      'Evalúa la iluminación natural y ventilación de cada ambiente',
      'Verifica la seguridad del edificio o zona (cerraduras, accesos, iluminación)'
    ]
  },
  {
    category: 'Documentación Legal',
    icon: FileCheck,
    items: [
      'Solicita la partida registral actualizada de la propiedad',
      'Verifica que el arrendador sea el propietario legítimo o tenga autorización',
      'Asegúrate de que el inmueble no tenga cargas, gravámenes o embargos',
      'Lee detenidamente el contrato antes de firmar',
      'Verifica que el contrato incluya: monto, fecha de pago, duración, servicios incluidos',
      'Considera legalizar el contrato ante notario para mayor seguridad'
    ]
  },
  {
    category: 'Costos y Pagos',
    icon: DollarSign,
    items: [
      'Confirma el monto exacto del alquiler y servicios adicionales',
      'Pregunta sobre el monto del depósito de garantía (usualmente 1-2 meses)',
      'Aclara qué servicios están incluidos (agua, luz, internet, mantenimiento)',
      'Establece el método de pago y fechas acordadas',
      'Solicita siempre recibos por cada pago realizado',
      'NUNCA realices pagos antes de ver la propiedad y verificar la identidad del propietario'
    ]
  },
  {
    category: 'Comodidades y Ubicación',
    icon: MapPin,
    items: [
      'Evalúa la cercanía a tu trabajo, estudios o lugares frecuentes',
      'Verifica el acceso a transporte público y vías principales',
      'Comprueba la disponibilidad de servicios cercanos (mercados, farmacias, bancos)',
      'Investiga sobre la seguridad del barrio y habla con vecinos si es posible',
      'Evalúa el nivel de ruido en diferentes horarios del día'
    ]
  }
];

export const compraChecklist = [
  {
    category: 'Verificación del Vendedor',
    icon: ShieldCheck,
    items: [
      'Confirma que el perfil tenga la insignia de "Usuario Verificado"',
      'Verifica la identidad del vendedor solicitando DNI o documentos oficiales',
      'Comprueba que el vendedor sea el propietario registral',
      'Revisa el historial y reputación del usuario en la plataforma',
      'Si es una inmobiliaria, verifica su registro y licencias de funcionamiento'
    ]
  },
  {
    category: 'Due Diligence Legal',
    icon: FileCheck,
    items: [
      'Solicita la partida registral actualizada (no mayor a 30 días)',
      'Verifica que no existan cargas, hipotecas, embargos o gravámenes',
      'Confirma que los linderos y medidas coincidan con el registro',
      'Revisa que el inmueble tenga licencia de construcción y conformidad de obra',
      'Comprueba que los impuestos prediales estén al día',
      'Verifica que no existan deudas de servicios o mantenimiento pendientes',
      'Contrata a un abogado especializado en derecho inmobiliario'
    ]
  },
  {
    category: 'Inspección Técnica',
    icon: Building,
    items: [
      'Contrata a un inspector profesional o ingeniero para evaluar la estructura',
      'Revisa el estado de cimientos, columnas, vigas y techos',
      'Verifica instalaciones eléctricas, sanitarias y de gas',
      'Comprueba la ausencia de humedad, filtraciones o grietas estructurales',
      'Evalúa el estado de acabados, pisos, ventanas y puertas',
      'Solicita planos actualizados y certificados de conformidad'
    ]
  },
  {
    category: 'Valorización y Financiamiento',
    icon: DollarSign,
    items: [
      'Investiga el valor de mercado de propiedades similares en la zona',
      'Considera contratar un tasador profesional certificado',
      'Calcula los costos adicionales: notariales, registrales, impuestos',
      'Si necesitas crédito hipotecario, consulta con varias entidades financieras',
      'Verifica tu capacidad de endeudamiento y ahorro para la cuota inicial',
      'Negocia el precio basándote en el estado real de la propiedad'
    ]
  },
  {
    category: 'Ubicación y Proyección',
    icon: MapPin,
    items: [
      'Investiga el plan de desarrollo urbano de la zona',
      'Verifica la zonificación del área (residencial, comercial, industrial)',
      'Evalúa el potencial de revalorización del sector',
      'Comprueba la disponibilidad y calidad de servicios básicos',
      'Investiga sobre proyectos de infraestructura futuros en la zona',
      'Considera la accesibilidad y conectividad con otras áreas de la ciudad'
    ]
  },
  {
    category: 'Proceso de Compra',
    icon: Key,
    items: [
      'Formaliza la intención de compra mediante un contrato de arras',
      'Entrega un adelanto (usualmente 10%) como señal de compromiso',
      'Establece plazos claros para la firma de la minuta y escritura pública',
      'Asegúrate de que todos los acuerdos queden por escrito',
      'Realiza la firma de minuta ante notario público',
      'Inscribe la propiedad a tu nombre en Registros Públicos',
      'NUNCA realices pagos sin asesoría legal y sin verificar la documentación'
    ]
  }
];

export const redFlagsAlquiler = [
  'El arrendador solicita pago total adelantado antes de ver la propiedad',
  'Se niega a mostrar documentos de propiedad o identificación',
  'El precio es significativamente más bajo que el mercado',
  'Presiona para firmar el contrato sin tiempo para revisarlo',
  'No permite realizar una visita presencial al inmueble',
  'La propiedad no coincide con las fotos o descripción publicada',
  'Solicita pagos mediante métodos no rastreables (efectivo anónimo)',
  'No proporciona recibos por los pagos realizados'
];

export const redFlagsCompra = [
  'El vendedor no puede mostrar la partida registral actualizada',
  'Se niega a permitir inspección técnica por un profesional',
  'Existen cargas, hipotecas o gravámenes sin aclarar',
  'Los documentos presentan inconsistencias o alteraciones',
  'Presiona para cerrar el trato rápidamente sin tiempo para verificar',
  'El precio está muy por debajo del valor de mercado sin justificación',
  'No hay transparencia sobre el historial de la propiedad',
  'Solicita pagos sin formalizar mediante contratos notariados',
  'Los linderos o medidas no coinciden con el registro',
  'Existen deudas pendientes de impuestos o servicios sin resolver'
];

export const seguridadTips = [
  {
    icon: MessageCircle,
    title: 'Comunícate por la Plataforma',
    content: 'Mantén todas las conversaciones dentro de ImnoAndes. Esto nos permite protegerte y ayudarte en caso de problemas. Desconfía de quienes insisten en comunicarse únicamente por fuera.'
  },
  {
    icon: Eye,
    title: 'Visitas Presenciales',
    content: 'Nunca comprometas dinero sin haber visitado personalmente la propiedad. Si es posible, visita en diferentes horarios del día para evaluar mejor el entorno y la iluminación.'
  },
  {
    icon: ShieldCheck,
    title: 'Verifica Identidades',
    content: 'Solicita siempre documentos de identidad oficiales y comprueba que coincidan con el propietario registral. No confíes solo en copias o fotos, solicita ver los originales.'
  },
  {
    icon: FileCheck,
    title: 'Documentación Completa',
    content: 'Exige documentos legales actualizados y consúltalos con un abogado antes de firmar cualquier contrato o realizar pagos importantes. La asesoría legal es una inversión que te protege.'
  }
];