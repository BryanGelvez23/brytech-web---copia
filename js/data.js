/**
 * Catálogo centralizado de BryTech.
 *
 * Importante:
 * - Los precios son de DEMOSTRACIÓN y no representan tarifas comerciales verificadas.
 * - No hay existencias reales: stock queda en null hasta que exista inventario de backend.
 * - Las fotografías apuntan a archivos locales originales. No se inventaron rutas.
 * - Las variantes de color del mismo modelo se agrupan en un solo producto.
 *
 * Futura API Spring Boot: GET /api/productos reemplazaría este archivo.
 */
(function (global) {
  "use strict";

  var CATEGORIAS = [
    { id: "audifonos", nombre: "Audífonos", descripcion: "Inalámbricos e intraurales" },
    { id: "auriculares", nombre: "Auriculares de diadema", descripcion: "Diademas para estudio, oficina y gaming" },
    { id: "mouse", nombre: "Mouse", descripcion: "Ratones para trabajo y entretenimiento" },
    { id: "teclados", nombre: "Teclados", descripcion: "Teclados compactos y de escritorio" },
    { id: "mandos", nombre: "Mandos y controles", descripcion: "Controles para consolas y PC" },
    { id: "combos", nombre: "Combos", descripcion: "Conjuntos de productos (sin fotografías aún)" },
    { id: "accesorios", nombre: "Accesorios", descripcion: "Complementos tecnológicos (sin fotografías aún)" }
  ];

  /**
   * Imágenes encontradas en assets/productos/mandos/AuricularesCable/.
   * El nombre de carpeta no coincide con mandos: parecen auriculares de cable QKZ AK6.
   * No se movieron los archivos. Pendiente de reclasificación manual.
   */
  var IMAGENES_PENDIENTES = [
    {
      ruta: "assets/productos/mandos/AuricularesCable/",
      observacion: "Carpeta ubicada dentro de mandos, pero el contenido corresponde a auriculares de cable QKZ AK6. En el prototipo se muestran como un producto de audífonos sin mover archivos."
    }
  ];

  var PRODUCTOS = [
    {
      id: "transformers-tf-t51",
      nombre: "Audífonos Transformers TF-T51",
      categoria: "audifonos",
      destacado: false,
      demo: true,
      precio: 59000,
      descripcion: "Audífonos intraurales del modelo Transformers TF-T51, según la fotografía original disponible. Las características técnicas no se detallan en este prototipo porque no fueron verificadas.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Modelo identificado en el archivo: Transformers TF-T51.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/Audífonos Transformers TF-T51.png"],
      variantes: [
        { id: "tf-t51-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/audífonos/Audífonos Transformers TF-T51.png"], sku: null, stock: null }
      ]
    },
    {
      id: "asus-idol-r27",
      nombre: "Audífonos ASUS Idol R-27",
      categoria: "audifonos",
      destacado: true,
      demo: true,
      precio: 79000,
      descripcion: "Audífonos inalámbricos ASUS Idol R-27 con estuche de carga, según la fotografía original. El archivo de imagen incluye un prefijo con guion bajo y espacio; la ruta se respeta tal como está en el proyecto.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Modelo identificado en el archivo: ASUS Idol R-27.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/_ Audífonos ASUS Idol R-27.png"],
      variantes: [
        { id: "idol-r27-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/audífonos/_ Audífonos ASUS Idol R-27.png"], sku: null, stock: null }
      ]
    },
    {
      id: "lenovo-gm2-pro",
      nombre: "Audífonos Lenovo GM2 Pro",
      categoria: "audifonos",
      destacado: true,
      demo: true,
      precio: 69000,
      descripcion: "Audífonos Lenovo GM2 Pro. La ficha se construyó a partir del nombre del archivo y de la fotografía original. No se añaden especificaciones no verificadas.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Marca y modelo identificados: Lenovo GM2 Pro.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/Audífonos Lenovo GM2 Pro.png"],
      variantes: [
        { id: "gm2-pro-unico", color: "Único", hex: "#1e293b", imagenes: ["assets/productos/audífonos/Audífonos Lenovo GM2 Pro.png"], sku: null, stock: null }
      ]
    },
    {
      id: "lenovo-lp40-pro",
      nombre: "Audífonos Lenovo LP40 Pro",
      categoria: "audifonos",
      destacado: false,
      demo: true,
      precio: 65000,
      descripcion: "Audífonos Lenovo LP40 Pro, presentados con su fotografía original. Precio y existencias de este prototipo son de demostración.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Marca y modelo identificados: Lenovo LP40 Pro.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/Audífonos Lenovo LP40 Pro.png"],
      variantes: [
        { id: "lp40-pro-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/audífonos/Audífonos Lenovo LP40 Pro.png"], sku: null, stock: null }
      ]
    },
    {
      id: "lenovo-lp19",
      nombre: "Audífonos Lenovo LP19",
      categoria: "audifonos",
      destacado: false,
      demo: true,
      precio: 55000,
      descripcion: "Audífonos Lenovo LP19. La descripción comercial detallada se completará cuando exista ficha técnica verificada.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Marca y modelo identificados: Lenovo LP19.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/Audífonos Lenovo LP19.png"],
      variantes: [
        { id: "lp19-unico", color: "Único", hex: "#334155", imagenes: ["assets/productos/audífonos/Audífonos Lenovo LP19.png"], sku: null, stock: null }
      ]
    },
    {
      id: "lenovo-xt62",
      nombre: "Audífonos Lenovo XT62",
      categoria: "audifonos",
      destacado: false,
      demo: true,
      precio: 62000,
      descripcion: "Audífonos Lenovo XT62, con fotografía original del catálogo. Este prototipo no afirma conectividad, autonomía ni otras especificaciones.",
      caracteristicas: [
        "Categoría: audífonos.",
        "Marca y modelo identificados: Lenovo XT62.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/audífonos/Audífonos Lenovo XT62.png"],
      variantes: [
        { id: "xt62-unico", color: "Único", hex: "#0f172a", imagenes: ["assets/productos/audífonos/Audífonos Lenovo XT62.png"], sku: null, stock: null }
      ]
    },
    {
      id: "qkz-ak6",
      nombre: "Auriculares de cable QKZ AK6",
      categoria: "audifonos",
      destacado: false,
      demo: true,
      precio: 49000,
      descripcion: "Auriculares de cable identificados como QKZ AK6 a partir del empaque y de los nombres de archivo. Las fotografías están en assets/productos/mandos/AuricularesCable/ y no se movieron. Revisión pendiente de ubicación definitiva.",
      caracteristicas: [
        "Categoría asignada en el prototipo: audífonos.",
        "Modelo visible en el empaque: QKZ AK6.",
        "Las imágenes permanecen en la carpeta original (dentro de mandos).",
        "Clasificación de carpeta pendiente de revisión manual."
      ],
      imagenes: [
        "assets/productos/mandos/AuricularesCable/1000098812.png",
        "assets/productos/mandos/AuricularesCable/IMG_20260425_112947.png",
        "assets/productos/mandos/AuricularesCable/IMG_20260425_113008.png",
        "assets/productos/mandos/AuricularesCable/1000098811.png",
        "assets/productos/mandos/AuricularesCable/1000163745.png",
        "assets/productos/mandos/AuricularesCable/1000098809.png",
        "assets/productos/mandos/AuricularesCable/_storage_emulated_0_Pictures_Gallery_owner_QKZ AK6_IMG_20260425_112939 (1).png"
      ],
      variantes: [
        {
          id: "qkz-ak6-unico",
          color: "Único",
          hex: "#7c2d12",
          imagenes: [
            "assets/productos/mandos/AuricularesCable/1000098812.png",
            "assets/productos/mandos/AuricularesCable/IMG_20260425_112947.png"
          ],
          sku: null,
          stock: null
        }
      ]
    },
    {
      id: "lenovo-eh140",
      nombre: "Auriculares Lenovo EH140",
      categoria: "auriculares",
      destacado: false,
      demo: true,
      precio: 89000,
      descripcion: "Auriculares de diadema Lenovo EH140, con fotografía original. No se listan especificaciones técnicas no verificadas.",
      caracteristicas: [
        "Categoría: auriculares de diadema.",
        "Marca y modelo identificados: Lenovo EH140.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/auricularesDiadema/Auriculares Lenovo EH140.png"],
      variantes: [
        { id: "eh140-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/auricularesDiadema/Auriculares Lenovo EH140.png"], sku: null, stock: null }
      ]
    },
    {
      id: "asus-idol-asd96",
      nombre: "Auriculares ASUS Idol AS-D96",
      categoria: "auriculares",
      destacado: false,
      demo: true,
      precio: 99000,
      descripcion: "Auriculares de diadema ASUS Idol AS-D96. La ficha usa únicamente el nombre del archivo y la fotografía disponible.",
      caracteristicas: [
        "Categoría: auriculares de diadema.",
        "Modelo identificado: ASUS Idol AS-D96.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/auricularesDiadema/Auriculares ASUS Idol AS-D96.png"],
      variantes: [
        { id: "asd96-unico", color: "Único", hex: "#1e293b", imagenes: ["assets/productos/auricularesDiadema/Auriculares ASUS Idol AS-D96.png"], sku: null, stock: null }
      ]
    },
    {
      id: "onikuma-gt808",
      nombre: "Auriculares ONIKUMA GT808",
      categoria: "auriculares",
      destacado: true,
      demo: true,
      precio: 149000,
      descripcion: "Auriculares de diadema ONIKUMA GT808, según la fotografía original. El prototipo no afirma autonomía, conectividad ni otras especificaciones.",
      caracteristicas: [
        "Categoría: auriculares de diadema.",
        "Modelo identificado: ONIKUMA GT808.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/auricularesDiadema/Auriculares ONIKUMA GT808.jpg"],
      variantes: [
        { id: "gt808-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/auricularesDiadema/Auriculares ONIKUMA GT808.jpg"], sku: null, stock: null }
      ]
    },
    {
      id: "ajazz-nk61",
      nombre: "Teclado Ajazz NK61",
      categoria: "teclados",
      destacado: true,
      demo: true,
      precio: 189000,
      descripcion: "Teclado compacto Ajazz NK61. Las fotografías muestran tres acabados de color del mismo modelo, por lo que se agrupan como variantes y no como productos independientes. En una de las imágenes aparece la marca Nacodex sobre el reposamuñecas.",
      caracteristicas: [
        "Categoría: teclados.",
        "Modelo identificado en archivos: Ajazz NK61.",
        "Tres variantes de color según los nombres de archivo.",
        "Especificaciones de switches o conectividad pendientes de verificación."
      ],
      imagenes: [
        "assets/productos/teclados/AjjazzNK61_blanco.png",
        "assets/productos/teclados/AjjazzNk61_negro.png",
        "assets/productos/teclados/AjjazzNK61_negrogrisamarillo.png"
      ],
      variantes: [
        { id: "nk61-blanco", color: "Blanco", hex: "#f8fafc", imagenes: ["assets/productos/teclados/AjjazzNK61_blanco.png"], sku: null, stock: null },
        { id: "nk61-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/teclados/AjjazzNk61_negro.png"], sku: null, stock: null },
        { id: "nk61-negro-gris-amarillo", color: "Negro, gris y amarillo", hex: "#ca8a04", imagenes: ["assets/productos/teclados/AjjazzNK61_negrogrisamarillo.png"], sku: null, stock: null }
      ]
    },
    {
      id: "ajazz-nk68",
      nombre: "Teclado Ajazz NK68",
      categoria: "teclados",
      destacado: false,
      demo: true,
      precio: 219000,
      descripcion: "Teclado Ajazz NK68. Las tres fotografías disponibles corresponden al acabado lila del mismo modelo (incluyendo una imagen encendida). Se tratan como galería de una sola variante, no como productos distintos.",
      caracteristicas: [
        "Categoría: teclados.",
        "Modelo identificado: Ajazz NK68.",
        "Color identificado en archivos: lila.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/teclados/AjjazzNK68_lila.jpg",
        "assets/productos/teclados/AjjazzNk68_lila1.jpg",
        "assets/productos/teclados/AjjazzNK68_lila_encendido.jpg"
      ],
      variantes: [
        {
          id: "nk68-lila",
          color: "Lila",
          hex: "#a78bfa",
          imagenes: [
            "assets/productos/teclados/AjjazzNK68_lila.jpg",
            "assets/productos/teclados/AjjazzNk68_lila1.jpg",
            "assets/productos/teclados/AjjazzNK68_lila_encendido.jpg"
          ],
          sku: null,
          stock: null
        }
      ]
    },
    {
      id: "ajazz-ak820",
      nombre: "Teclado Ajazz AK820",
      categoria: "teclados",
      destacado: false,
      demo: true,
      precio: 249000,
      descripcion: "Teclado Ajazz AK820 en acabado gris. Las dos fotografías se usan como galería del mismo producto y la misma variante.",
      caracteristicas: [
        "Categoría: teclados.",
        "Modelo identificado: Ajazz AK820.",
        "Color identificado en archivos: gris.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/teclados/AjjazzAK820_gris.jpg",
        "assets/productos/teclados/AjjazzAK820_gris1.jpg"
      ],
      variantes: [
        {
          id: "ak820-gris",
          color: "Gris",
          hex: "#64748b",
          imagenes: [
            "assets/productos/teclados/AjjazzAK820_gris.jpg",
            "assets/productos/teclados/AjjazzAK820_gris1.jpg"
          ],
          sku: null,
          stock: null
        }
      ]
    },
    {
      id: "mouse-minimalista",
      nombre: "Mouse minimalista inalámbrico",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 45000,
      descripcion: "Mouse de perfil simple identificado en el archivo como Mouse Minimalista Inalámbrico. No hay modelo comercial adicional en el nombre del archivo.",
      caracteristicas: [
        "Categoría: mouse.",
        "Nombre de archivo: Mouse Minimalista Inalámbrico.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mouses/Mouse Minimalista Inalámbrico.png"],
      variantes: [
        { id: "minimalista-unico", color: "Único", hex: "#e2e8f0", imagenes: ["assets/productos/mouses/Mouse Minimalista Inalámbrico.png"], sku: null, stock: null }
      ]
    },
    {
      id: "attack-shark-x11",
      nombre: "Mouse Attack Shark X11",
      categoria: "mouse",
      destacado: true,
      demo: true,
      precio: 179000,
      descripcion: "Mouse Attack Shark X11. Negro, blanco y rojo se tratan como variantes de color del mismo modelo. El prototipo no afirma DPI, peso ni tipo de sensor.",
      caracteristicas: [
        "Categoría: mouse.",
        "Modelo identificado: Attack Shark X11.",
        "Tres variantes de color según los nombres de archivo.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/mouses/Mouse Attack Shark X11 Negro.jpg",
        "assets/productos/mouses/Mouse Attack Shark X11 Blanco.jpg",
        "assets/productos/mouses/Mouse Attack Shark X11 Rojo.jpg"
      ],
      variantes: [
        { id: "x11-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/mouses/Mouse Attack Shark X11 Negro.jpg"], sku: null, stock: null },
        { id: "x11-blanco", color: "Blanco", hex: "#f8fafc", imagenes: ["assets/productos/mouses/Mouse Attack Shark X11 Blanco.jpg"], sku: null, stock: null },
        { id: "x11-rojo", color: "Rojo", hex: "#dc2626", imagenes: ["assets/productos/mouses/Mouse Attack Shark X11 Rojo.jpg"], sku: null, stock: null }
      ]
    },
    {
      id: "ajazz-159p",
      nombre: "Mouse Ajazz 159P",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 69000,
      descripcion: "Mouse Ajazz 159P, con fotografía original. Solo hay una imagen, sin variantes de color identificadas.",
      caracteristicas: [
        "Categoría: mouse.",
        "Modelo identificado: Ajazz 159P.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mouses/Mouse Ajjazz 159P.png"],
      variantes: [
        { id: "159p-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/mouses/Mouse Ajjazz 159P.png"], sku: null, stock: null }
      ]
    },
    {
      id: "ajazz-139v2",
      nombre: "Mouse Ajazz 139 V2",
      categoria: "mouse",
      destacado: true,
      demo: true,
      precio: 79000,
      descripcion: "Mouse Ajazz 139 V2. Negro, blanco y rojo se agrupan como variantes de un mismo producto.",
      caracteristicas: [
        "Categoría: mouse.",
        "Modelo identificado: Ajazz 139 V2.",
        "Tres variantes de color según los nombres de archivo.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/mouses/Mouse Ajjazz 139V2 Negro.jpg",
        "assets/productos/mouses/Mouse Ajjazz 139V2 Blanco.jpg",
        "assets/productos/mouses/Mouse Ajjazz 139V2 Rojo.jpg"
      ],
      variantes: [
        { id: "139v2-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/mouses/Mouse Ajjazz 139V2 Negro.jpg"], sku: null, stock: null },
        { id: "139v2-blanco", color: "Blanco", hex: "#f8fafc", imagenes: ["assets/productos/mouses/Mouse Ajjazz 139V2 Blanco.jpg"], sku: null, stock: null },
        { id: "139v2-rojo", color: "Rojo", hex: "#e11d48", imagenes: ["assets/productos/mouses/Mouse Ajjazz 139V2 Rojo.jpg"], sku: null, stock: null }
      ]
    },
    {
      id: "lenovo-n220",
      nombre: "Mouse inalámbrico Lenovo N220",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 59000,
      descripcion: "Mouse inalámbrico Lenovo N220. Negro y blanco son variantes de color del mismo modelo.",
      caracteristicas: [
        "Categoría: mouse.",
        "Modelo identificado: Lenovo N220.",
        "Dos variantes de color según los nombres de archivo.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/mouses/Mouse Inalámbrico Lenovo N220 Negro.png",
        "assets/productos/mouses/Mouse Inalámbrico Lenovo N220 Blanco.png"
      ],
      variantes: [
        { id: "n220-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/mouses/Mouse Inalámbrico Lenovo N220 Negro.png"], sku: null, stock: null },
        { id: "n220-blanco", color: "Blanco", hex: "#f8fafc", imagenes: ["assets/productos/mouses/Mouse Inalámbrico Lenovo N220 Blanco.png"], sku: null, stock: null }
      ]
    },
    {
      id: "inphic-mp6",
      nombre: "Mouse INPHIC MP6",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 72000,
      descripcion: "Mouse INPHIC MP6, con fotografía original. No hay variantes de color identificadas en los archivos.",
      caracteristicas: [
        "Categoría: mouse.",
        "Modelo identificado: INPHIC MP6.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mouses/Mouse INPHIC MP6.png"],
      variantes: [
        { id: "mp6-unico", color: "Único", hex: "#334155", imagenes: ["assets/productos/mouses/Mouse INPHIC MP6.png"], sku: null, stock: null }
      ]
    },
    {
      id: "ajazz-nj08",
      nombre: "Mouse Ajazz Nacodex NJ08",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 85000,
      descripcion: "Mouse identificado en el archivo como Ajazz Nacodex NJ08. Se mantiene el nombre compuesto porque ambas marcas aparecen en el archivo.",
      caracteristicas: [
        "Categoría: mouse.",
        "Nombre de archivo: Mouse Ajjazz Nacodex NJ08.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mouses/Mouse Ajjazz Nacodex NJ08.png"],
      variantes: [
        { id: "nj08-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/mouses/Mouse Ajjazz Nacodex NJ08.png"], sku: null, stock: null }
      ]
    },
    {
      id: "mouse-elegante-delgado",
      nombre: "Mouse elegante delgado inalámbrico",
      categoria: "mouse",
      destacado: false,
      demo: true,
      precio: 49000,
      descripcion: "Mouse de perfil delgado identificado en el archivo como Mouse Elegante Delgado Inalámbrico. No hay un código de modelo adicional en el nombre.",
      caracteristicas: [
        "Categoría: mouse.",
        "Nombre de archivo: Mouse Elegante Delgado Inalámbrico.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mouses/Mouse Elegante Delgado Inalámbrico.png"],
      variantes: [
        { id: "elegante-plata", color: "Plata", hex: "#cbd5e1", imagenes: ["assets/productos/mouses/Mouse Elegante Delgado Inalámbrico.png"], sku: null, stock: null }
      ]
    },
    {
      id: "easy-smx-x15",
      nombre: "Mando Easy SMX X15",
      categoria: "mandos",
      destacado: false,
      demo: true,
      precio: 129000,
      descripcion: "Control Easy SMX X15, con fotografía original. Se trata como un modelo distinto del X05 y del X05 Pro.",
      caracteristicas: [
        "Categoría: mandos y controles.",
        "Modelo identificado: Easy SMX X15.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mandos/Mando Easy SMX X15.jpg"],
      variantes: [
        { id: "x15-unico", color: "Único", hex: "#111318", imagenes: ["assets/productos/mandos/Mando Easy SMX X15.jpg"], sku: null, stock: null }
      ]
    },
    {
      id: "easy-smx-x05",
      nombre: "Mando Easy SMX X05",
      categoria: "mandos",
      destacado: false,
      demo: true,
      precio: 109000,
      descripcion: "Control Easy SMX X05. Se mantiene separado del X05 Pro porque el nombre de archivo indica un modelo distinto.",
      caracteristicas: [
        "Categoría: mandos y controles.",
        "Modelo identificado: Easy SMX X05.",
        "No se agrupa con el X05 Pro.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: ["assets/productos/mandos/Mando Easy SMX X05.jpg"],
      variantes: [
        { id: "x05-unico", color: "Único", hex: "#1e293b", imagenes: ["assets/productos/mandos/Mando Easy SMX X05.jpg"], sku: null, stock: null }
      ]
    },
    {
      id: "easy-smx-x05-pro",
      nombre: "Mando Easy SMX X05 Pro",
      categoria: "mandos",
      destacado: true,
      demo: true,
      precio: 139000,
      descripcion: "Control Easy SMX X05 Pro. Blanco y negro son variantes de color del mismo modelo Pro.",
      caracteristicas: [
        "Categoría: mandos y controles.",
        "Modelo identificado: Easy SMX X05 Pro.",
        "Dos variantes de color según los nombres de archivo.",
        "Información técnica pendiente de verificación."
      ],
      imagenes: [
        "assets/productos/mandos/Mando Easy SMX X05 Pro Negro.jpg",
        "assets/productos/mandos/Mando Easy SMX X05 Pro Blanco.jpg"
      ],
      variantes: [
        { id: "x05pro-negro", color: "Negro", hex: "#111318", imagenes: ["assets/productos/mandos/Mando Easy SMX X05 Pro Negro.jpg"], sku: null, stock: null },
        { id: "x05pro-blanco", color: "Blanco", hex: "#f8fafc", imagenes: ["assets/productos/mandos/Mando Easy SMX X05 Pro Blanco.jpg"], sku: null, stock: null }
      ]
    }
  ];

  function encodeRuta(ruta) {
    return encodeURI(ruta);
  }

  function obtenerProducto(id) {
    for (var i = 0; i < PRODUCTOS.length; i += 1) {
      if (PRODUCTOS[i].id === id) {
        return PRODUCTOS[i];
      }
    }
    return null;
  }

  function obtenerVariante(producto, varianteId) {
    if (!producto || !producto.variantes) {
      return null;
    }
    for (var i = 0; i < producto.variantes.length; i += 1) {
      if (producto.variantes[i].id === varianteId) {
        return producto.variantes[i];
      }
    }
    return producto.variantes[0] || null;
  }

  function obtenerCategoria(id) {
    for (var i = 0; i < CATEGORIAS.length; i += 1) {
      if (CATEGORIAS[i].id === id) {
        return CATEGORIAS[i];
      }
    }
    return null;
  }

  function formatearCOP(valor) {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(valor);
  }

  function imagenPrincipal(producto, variante) {
    if (variante && variante.imagenes && variante.imagenes.length) {
      return encodeRuta(variante.imagenes[0]);
    }
    if (producto && producto.imagenes && producto.imagenes.length) {
      return encodeRuta(producto.imagenes[0]);
    }
    return "";
  }

  function productosDestacados() {
    var lista = [];
    for (var i = 0; i < PRODUCTOS.length; i += 1) {
      if (PRODUCTOS[i].destacado) {
        lista.push(PRODUCTOS[i]);
      }
    }
    return lista;
  }

  function filtrarProductos(filtros) {
    var texto = (filtros.q || "").trim().toLowerCase();
    var categoria = filtros.categoria || "todos";
    var min = filtros.min === "" || filtros.min === undefined ? null : Number(filtros.min);
    var max = filtros.max === "" || filtros.max === undefined ? null : Number(filtros.max);
    var orden = filtros.orden || "relevancia";
    var resultados = [];

    for (var i = 0; i < PRODUCTOS.length; i += 1) {
      var p = PRODUCTOS[i];
      if (categoria !== "todos" && p.categoria !== categoria) {
        continue;
      }
      if (texto) {
        var hay = p.nombre.toLowerCase().indexOf(texto) !== -1 ||
          p.descripcion.toLowerCase().indexOf(texto) !== -1;
        if (!hay) {
          continue;
        }
      }
      if (min !== null && !isNaN(min) && p.precio < min) {
        continue;
      }
      if (max !== null && !isNaN(max) && p.precio > max) {
        continue;
      }
      resultados.push(p);
    }

    resultados.sort(function (a, b) {
      if (orden === "precio-asc") {
        return a.precio - b.precio;
      }
      if (orden === "precio-desc") {
        return b.precio - a.precio;
      }
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre, "es");
      }
      return (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0);
    });

    return resultados;
  }

  global.BryTechData = {
    CATEGORIAS: CATEGORIAS,
    PRODUCTOS: PRODUCTOS,
    IMAGENES_PENDIENTES: IMAGENES_PENDIENTES,
    encodeRuta: encodeRuta,
    obtenerProducto: obtenerProducto,
    obtenerVariante: obtenerVariante,
    obtenerCategoria: obtenerCategoria,
    formatearCOP: formatearCOP,
    imagenPrincipal: imagenPrincipal,
    productosDestacados: productosDestacados,
    filtrarProductos: filtrarProductos
  };
})(window);
