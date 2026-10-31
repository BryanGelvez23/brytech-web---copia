# AGENTS.md — BryTech

Guía para agentes y desarrolladores que continúen el prototipo.

## Alcance actual

Prototipo frontend académico con HTML, CSS y JavaScript. No hay backend, ni MySQL, ni autenticación real.

## No hacer

- No redibujar ni sustituir `assets/logo/Logo_BryTech.jpg`.
- No mover ni borrar fotografías originales sin autorización del dueño del proyecto.
- No presentar precios, existencias, SKU, garantías o tiempos de entrega como información comercial auténtica.
- No guardar contraseñas en `localStorage`.
- No introducir React, Angular, Vue, Tailwind, Bootstrap ni un empaquetador en esta etapa.

## Dónde están los datos

- Catálogo: `js/data.js` (`BryTechData`).
- Carrito: `js/cart.js` (`BryTechCart`), clave `brytech_carrito_demo` en `localStorage`.
- Pedidos de simulación: `sessionStorage`, clave `brytech_pedidos_demo`.
- Interfaz: `js/app.js`.
- Estilos: `styles.css` (variables de marca).

## Variantes de color

Un modelo con varios colores es un solo producto y varias variantes. El carrito usa `productoId::varianteId`.

## Imágenes pendientes de revisión

La carpeta `assets/productos/mandos/AuricularesCable/` contiene fotos de auriculares QKZ AK6. En el prototipo se muestran como audífonos, sin mover archivos.

## Paleta

- Grafito `#111318`
- Blanco `#FFFFFF`
- Azul `#2563EB`
- Acero `#64748B`
- Gris `#F1F5F9`
