# Festival de Música Electrónica 2025 - Flyer Web

Este proyecto es una aplicación web creada con React, Vite, TypeScript y Tailwind CSS que muestra un flyer interactivo para un festival de música electrónica.

## Características

- 🎵 Diseño moderno y responsive inspirado en flyers de festivales
- ⏰ Contador regresivo en tiempo real hasta el evento
- 📱 Completamente responsive para móviles y escritorio
- 🎨 Interfaz moderna con gradientes y efectos visuales
- 📊 Información detallada del evento (fecha, hora, lugar, capacidad)
- 💰 Sección de precios y botón de reserva
- 📞 Información de contacto completa

## Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción y desarrollo rápido
- **Tailwind CSS** - Framework de CSS para diseño utilitario

## Instalación y Uso

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter para revisar el código

## Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal con el flyer
├── main.tsx         # Punto de entrada de la aplicación
└── index.css        # Estilos base con Tailwind CSS
```

## Personalización

Para personalizar el flyer:

1. **Fecha del evento**: Modifica la variable `targetDate` en `App.tsx`
2. **Información del evento**: Edita los datos en las secciones correspondientes
3. **Colores y diseño**: Modifica las clases de Tailwind CSS
4. **Características destacadas**: Actualiza la sección "Lo Más Destacado"

## Contribución

1. Fork el proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
