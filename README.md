# Inmoandes Frontend

Este proyecto es una aplicación web desarrollada con [Next.js](https://nextjs.org), diseñada para la gestión, publicación y visualización de propiedades inmobiliarias. Incluye funcionalidades avanzadas como carga de imágenes, formularios multi-paso, panel de administración, autenticación, y una experiencia de usuario optimizada tanto para clientes como para administradores.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Scripts Disponibles](#scripts-disponibles)
- [Variables de Entorno](#variables-de-entorno)
- [Despliegue](#despliegue)
- [Guías y Recursos](#guías-y-recursos)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Características

- **Frontend en Next.js** con soporte para SSR y SSG.
- **Carga y gestión de imágenes** con validaciones de tamaño, tipo y dimensiones.
- **Formularios multi-paso** para la creación y edición de propiedades.
- **Panel de administración** para gestión de propiedades y usuarios.
- **Autenticación y autorización**.
- **Internacionalización** (soporte para español).
- **Integración con Cloudinary y otros proveedores de imágenes**.
- **Estilos con Tailwind CSS** y configuración personalizada.
- **Componentes reutilizables** y librería propia (`myLib`).
- **Notificaciones y feedback al usuario** (ej: react-hot-toast).
- **Optimización para SEO** y metadatos dinámicos.
- **Soporte para carga de imágenes arrastrando y soltando**.

---

## Tecnologías

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Cloudinary](https://cloudinary.com/) (para imágenes)
- [Lucide React](https://lucide.dev/) (iconos)
- [react-hot-toast](https://react-hot-toast.com/) (notificaciones)
- [Vercel](https://vercel.com/) (despliegue recomendado)

---

## Estructura del Proyecto

```
.
├── app/                        # Rutas y páginas principales (Next.js App Router)
│   ├── es/                    # Sección en español
│   │   ├── guia-comprar-alquilar/
│   │   └── guia-como-tomar-mejores-fotos/
│   ├── globals.css            # Estilos globales
│   └── layout.tsx             # Layout principal
├── public/                    # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── features/              # Módulos de negocio (propiedades, usuario, etc.)
│   ├── myLib/                 # Librería de componentes y hooks reutilizables
│   ├── constants/             # Constantes globales
│   └── config/                # Configuración y utilidades
├── tailwind/                  # Configuración adicional de Tailwind
├── .env.local                 # Variables de entorno locales
├── next.config.ts             # Configuración de Next.js
├── tailwind.config.ts         # Configuración de Tailwind CSS
├── package.json
└── README.md
```

---

## Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/inmoandes-frontend.git
   cd inmoandes-frontend
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno:**
   - Copia `.env.local.example` a `.env.local` (si existe) y completa los valores necesarios, por ejemplo:
     ```
     NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
     NEXT_PUBLIC_API_URL=https://api.tu-backend.com
     ```

---

## Scripts Disponibles

- `npm run dev` — Inicia el servidor de desarrollo en [http://localhost:3000](http://localhost:3000)
- `npm run build` — Compila la aplicación para producción
- `npm start` — Inicia la aplicación en modo producción
- `npm run lint` — Ejecuta el linter (ESLint)
- `npm run test` — Ejecuta los tests (si están configurados)

---

## Variables de Entorno

Asegúrate de definir las siguientes variables en `.env.local`:

- `NEXT_PUBLIC_FRONTEND_URL` — URL base del frontend
- `NEXT_PUBLIC_API_URL` — URL base del backend/API
- Otras variables necesarias para servicios externos (Cloudinary, etc.)

---

## Despliegue

El despliegue recomendado es en [Vercel](https://vercel.com/):

1. Haz push a tu repositorio en GitHub/GitLab.
2. Importa el proyecto en Vercel.
3. Configura las variables de entorno en el panel de Vercel.
4. El build y despliegue serán automáticos.

Más información en la [documentación oficial de Next.js](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Guías y Recursos

- [Guía para comprar o alquilar una propiedad](https://inmoandes.com/es/guia-comprar-alquilar)
- [Guía para tomar mejores fotos](https://inmoandes.com/es/guia-como-tomar-mejores-fotos)

---

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, abre un issue o un pull request para sugerir mejoras o reportar errores.

---

## Licencia

Este proyecto está bajo la licencia MIT.

---

## Créditos

Proyecto desarrollado por el equipo de Inmoandes.

---
