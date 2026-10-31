# BryTech — Tienda Web

**Potencia accesible. Calidad real.**

Prototipo frontend de la tienda oficial de BryTech: tecnología y accesorios para gaming, estudio, oficina, productividad, hogar y uso cotidiano. Identidad visual 70 % minimalista, 20 % tecnológica y 10 % gamer.

- **Ubicación inicial:** Cúcuta, Norte de Santander, Colombia.
- **Instagram:** [BryTech.co](https://www.instagram.com/BryTech.co/)
- **WhatsApp:** [3178385428](https://wa.me/573178385428)

Este README distingue con claridad qué es frontend de demostración y qué requiere backend.

## Cómo abrir el prototipo

1. Abre la carpeta `brytech-web` en Visual Studio Code o Cursor.
2. Sirve la carpeta con Live Server o con un servidor estático local.
3. Entra a `index.html`.

No hace falta instalar Node.js, frameworks ni base de datos en esta etapa.

## Estructura

```text
brytech-web/
├── index.html              Página principal (RF01)
├── catalogo.html           Catálogo, búsqueda y filtros (RF02, RF03)
├── producto.html           Ficha y variantes (RF04)
├── carrito.html            Carrito (RF05)
├── checkout.html           Pedido de demostración (RF06)
├── pedido.html             Consulta de pedido (RF07)
├── cuenta.html             Registro e inicio de sesión (RF11)
├── admin.html              Preparación de backoffice (RF08–RF10)
├── styles.css
├── js/
│   ├── data.js             Catálogo centralizado
│   ├── cart.js             Carrito y simulación local
│   └── app.js              Interfaz compartida y páginas
├── README.md
├── AGENTS.md
└── assets/
    ├── logo/Logo_BryTech.jpg
    ├── identidad/
    ├── banners/
    ├── redes/
    └── productos/          Fotografías originales (no se movieron)
```

## Qué está implementado (frontend)

| Código | Estado |
|---|---|
| RF01 Inicio | Implementado: logo original, menú, buscador, carrito, banner, lema, categorías, destacados, beneficios, WhatsApp y pie. |
| RF02 Catálogo | Implementado con las fotografías locales. Combos y accesorios existen como categorías vacías. |
| RF03 Filtros | Búsqueda, categoría, rango de precio, orden, mostrar todos, limpiar y mensaje vacío. |
| RF04 Detalle | Página de producto con galería, color, precio COP de demostración y alta al carrito. |
| RF05 Carrito | Altas, cantidades, borrado, subtotal, unidades, variantes separadas y `localStorage`. |
| RF06 Checkout | Formulario validado. Simulación en `sessionStorage`. No afirma registro en servidor. |
| RF07 Pedidos | Consulta de demostración. Si no hay simulación en esta sesión, lo indica con claridad. |
| RF08–RF10 Admin | Página documental + tabla de solo lectura. Sin CRUD real. |
| RF11 Cuenta | Formularios visibles. No autenticación ficticia ni guardado de contraseñas. |

## Qué es demostrativo

- Todos los **precios** son de demostración. No son tarifas comerciales verificadas.
- Las **existencias** están en `null`. No se muestran cantidades reales ni se bloquea la venta por inventario.
- No hay **SKU** verificados.
- Las **descripciones** se limitan a lo que se puede inferir del nombre de archivo y de la fotografía. No hay fichas técnicas inventadas.
- El carrito en `localStorage` no es una base de datos ni un pedido.
- Un identificador `BRY-DEMO-####` solo vive en la sesión del navegador.

## Inventario de imágenes

### Logo

- `assets/logo/Logo_BryTech.jpg` — logo original circular (fondo blanco). Se usa en encabezado y pie, sin recortes agresivos.

### Productos agrupados por modelo (variantes de color)

| Producto | Variantes | Archivos |
|---|---|---|
| Attack Shark X11 | Negro, blanco, rojo | `mouses/Mouse Attack Shark X11 *.jpg` |
| Ajazz 139 V2 | Negro, blanco, rojo | `mouses/Mouse Ajjazz 139V2 *.jpg` |
| Lenovo N220 | Negro, blanco | `mouses/Mouse Inalámbrico Lenovo N220 *.png` |
| Ajazz NK61 | Blanco, negro, negro/gris/amarillo | `teclados/AjjazzNK61_*` |
| Easy SMX X05 Pro | Negro, blanco | `mandos/Mando Easy SMX X05 Pro *.jpg` |
| Ajazz NK68 | Lila (3 fotos del mismo color) | `teclados/AjjazzNK68_lila*` |
| Ajazz AK820 | Gris (2 fotos) | `teclados/AjjazzAK820_gris*` |

El resto de modelos tiene una sola fotografía y se trata como un producto con un acabado único.

### Pendiente de reclasificación (no se movieron archivos)

`assets/productos/mandos/AuricularesCable/` contiene fotografías de auriculares **QKZ AK6**. La carpeta está dentro de mandos, pero el contenido no corresponde a controles. En el prototipo se muestran como audífonos de cable, **sin mover ni borrar** los archivos. Revisión manual solicitada.

### Carpetas preparadas y aún vacías

`assets/identidad/`, `assets/banners/`, `assets/redes/`, `assets/productos/combos/`, `assets/productos/accesorios/`, `assets/productos/otros/`.

No hay banners propios: el encabezado de inicio usa un bloque tipográfico, no una imagen inventada.

## Arquitectura futura: Spring Boot + MySQL

El prototipo ya separa productos, variantes, categorías, carrito, clientes y pedidos. En la etapa de backend, `js/data.js` debe dejar de ser la fuente de verdad.

### Entidades previstas

- **Categoria:** id, nombre, descripcion, activa.
- **Producto:** id, nombre, descripcion, categoria_id, precio, publicado, caracteristicas.
- **Variante:** id, producto_id, color, sku, activa.
- **Imagen:** id, producto_id o variante_id, ruta, orden.
- **Inventario:** variante_id, cantidad (fuente de existencias).
- **Usuario:** id, nombre, correo, hash_password, rol (CLIENTE / ADMIN).
- **Pedido:** id, usuario_id o datos de invitado, fecha, estado, total, ciudad, direccion, telefono, observaciones.
- **PedidoItem:** id, pedido_id, variante_id, cantidad, precio_unitario_congelado.

Relaciones: una categoría tiene muchos productos; un producto tiene muchas variantes; cada variante tiene inventario e imágenes; un pedido tiene muchos ítems.

Estados de pedido previstos: `pendiente`, `confirmado`, `en_preparacion`, `enviado`, `entregado`, `cancelado`.

### Endpoints de API (propuesta)

```text
GET    /api/categorias
GET    /api/productos
GET    /api/productos/{id}
GET    /api/productos?q=&categoria=&min=&max=&orden=

POST   /api/auth/registro
POST   /api/auth/login
POST   /api/auth/logout

POST   /api/pedidos                  (valida precios e inventario en servidor)
GET    /api/pedidos/{id}             (autorizado o token de consulta)
GET    /api/admin/pedidos
PATCH  /api/admin/pedidos/{id}/estado

POST   /api/admin/productos
PUT    /api/admin/productos/{id}
PATCH  /api/admin/productos/{id}/precio
POST   /api/admin/variantes
PATCH  /api/admin/inventario/{varianteId}
```

Los totales y el stock definitivos **nunca** deben tomarse del navegador.

### Seguridad que debe vivir en el servidor

- Hash de contraseñas (BCrypt o equivalente).
- Sesiones o JWT con caducidad, HTTPS y cookies `HttpOnly` si aplica.
- Autorización por roles para el panel admin.
- Validación de entradas y protección CSRF.
- Recalcular precios e inventario al confirmar el pedido.
- No persistir secretos ni contraseñas en el frontend.

## Paleta (variables CSS)

| Color | Código | Uso |
|---|---|---|
| Grafito | `#111318` | Textos fuertes, pie, banner |
| Blanco | `#FFFFFF` | Fondos |
| Azul eléctrico | `#2563EB` | Botones, enlaces, acentos |
| Gris acero | `#64748B` | Textos secundarios |
| Gris claro | `#F1F5F9` | Superficies y separadores |

## Limitaciones del prototipo

- Sin pagos, envíos reales, ni tiempos de entrega.
- Sin inventario verificado.
- Sin cuentas de usuario.
- Persistencia local ≠ pedido.
- Algunas fotos de teclado muestran la marca Nacodex aunque el archivo diga Ajazz; se documenta, no se inventa una ficha distinta.

## Próximos pasos sugeridos

1. Confirmar precios comerciales reales y existencias por variante.
2. Reclasificar `AuricularesCable` si corresponde.
3. Completar fichas técnicas verificadas.
4. Diseñar el esquema MySQL y los controladores Spring Boot a partir de las entidades anteriores.
5. Sustituir `BryTechData.PRODUCTOS` por llamadas `fetch` a la API.
