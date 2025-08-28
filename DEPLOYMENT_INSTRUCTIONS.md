# Instrucciones para Despliegue Externo

Este documento explica cómo preparar el proyecto Lendanfit para ser desplegado en plataformas externas como Vercel, Netlify, o cualquier otro hosting.

## Pasos Completados ✅

1. **Dependencias de Replit eliminadas**:
   - `@replit/vite-plugin-cartographer` ❌ Eliminado
   - `@replit/vite-plugin-runtime-error-modal` ❌ Eliminado

2. **Dependencias principales reinstaladas**:
   - `vite` ✅
   - `tsx` ✅ 
   - `express` ✅

## Configuración Requerida para Despliegue Externo

### Para Vite Config (Archivo protegido en Replit)
Cuando exportes el proyecto, necesitarás crear un `vite.config.ts` limpio sin referencias a Replit:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
```

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto para producción:

```
NODE_ENV=production
PORT=5000
```

### Scripts de Build para Vercel
El `package.json` ya incluye los scripts necesarios:
- `npm run build` - Construye tanto frontend como backend
- `npm run start` - Inicia el servidor en producción

### Estructura de Archivos
```
/
├── client/          # Frontend React
├── server/          # Backend Express
├── shared/          # Tipos compartidos
├── dist/            # Build output
├── package.json     # Dependencias
└── vite.config.ts   # Configuración Vite
```

## Configuración para Vercel

Crea un archivo `vercel.json` en la raíz:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/dist/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/public/$1"
    }
  ]
}
```

## Estado del Proyecto

✅ **Listo para exportar**: El proyecto ha sido limpiado de dependencias específicas de Replit
✅ **Responsive**: Compatible con móviles, tablets y desktop
✅ **Sin autenticación**: No requiere base de datos externa
✅ **Autocontenido**: Todos los datos están en archivos estáticos

## Funcionalidades

- ✅ Cuestionario interactivo
- ✅ Dashboard personalizado  
- ✅ Plan de ejercicio de 6 meses
- ✅ Plan nutricional de 6 meses
- ✅ Generación de PDF
- ✅ Navegación móvil optimizada
- ✅ Tema oscuro profesional

El proyecto está completamente preparado para ser exportado y desplegado en cualquier plataforma de hosting moderna.