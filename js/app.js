/**
 * Interfaz compartida y lógica de cada página del prototipo BryTech.
 */
(function () {
  "use strict";

  var WHATSAPP = "https://wa.me/573178385428";
  var INSTAGRAM = "https://www.instagram.com/BryTech.co/";

  // Productos que protagonizan el héroe y la banda gaming del inicio.
  // Si el id no existe en data.js, el héroe usa el primer destacado y la banda se oculta.
  var ID_PRODUCTO_HEROE = "asus-idol-r27";
  var ID_PRODUCTO_GAMING = "onikuma-gt808";

  function qs(id) {
    return document.getElementById(id);
  }

  function param(nombre) {
    return new URLSearchParams(window.location.search).get(nombre) || "";
  }

  function mostrarToast(mensaje) {
    var toast = qs("toast");
    if (!toast) {
      return;
    }
    toast.textContent = mensaje;
    toast.classList.add("is-visible");
    window.clearTimeout(mostrarToast._t);
    mostrarToast._t = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  /* ---------- Iconos (trazo 1.5, estilo lineal consistente) ---------- */
  function icono(paths, size) {
    return '<svg width="' + (size || 20) + '" height="' + (size || 20) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>";
  }

  function svgCart() {
    return icono('<path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/><path d="M6 6 5 3H2"/>');
  }

  function svgSearch() {
    return icono('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>');
  }

  function svgMenu() {
    return icono('<path d="M4 6h16M4 12h16M4 18h16"/>');
  }

  function svgBox() {
    return icono('<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>', 32);
  }

  function svgWhatsApp() {
    return '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 11.5A8.5 8.5 0 1 1 11.3 3.1 8.5 8.5 0 0 1 20 11.5zm-8.5 7.2a7.2 7.2 0 0 0 3.66-1l.26-.15 3.08.81-.82-3 .17-.28a7.18 7.18 0 1 0-6.35 3.62zm4.02-5.24c-.22-.11-1.3-.64-1.5-.71s-.35-.11-.5.11-.57.71-.7.86-.26.16-.48.05a5.9 5.9 0 0 1-1.73-1.07 6.5 6.5 0 0 1-1.2-1.5c-.13-.22 0-.34.1-.45s.22-.26.33-.4.15-.22.22-.37.03-.28-.02-.4-.5-1.2-.68-1.64-.36-.38-.5-.38h-.43a.83.83 0 0 0-.6.28 2.5 2.5 0 0 0-.78 1.86 4.36 4.36 0 0 0 .9 2.3 9.94 9.94 0 0 0 3.82 3.36c.53.23 1 .4 1.34.52a3.23 3.23 0 0 0 1.48.1 2.43 2.43 0 0 0 1.6-1.13 2 2 0 0 0 .14-1.13c-.06-.1-.2-.16-.42-.27z"/></svg>';
  }

  function paginaActual() {
    return document.body.getAttribute("data-page") || "";
  }

  function navLink(href, label, extra) {
    var actual = window.location.pathname.split("/").pop() || "index.html";
    var current = actual === href ? ' aria-current="page"' : "";
    return '<a href="' + href + '"' + current + (extra || "") + ">" + label + "</a>";
  }

  function renderShell() {
    var header = qs("app-header");
    var footer = qs("app-footer");
    if (header) {
      header.innerHTML =
        '<a class="skip-link" href="#contenido">Saltar al contenido</a>' +
        '<header class="site-header">' +
          '<div class="container header-inner">' +
            '<a class="brand" href="index.html">' +
              '<img class="brand__logo" src="assets/logo/Logo_BryTech.jpg" width="44" height="44" alt="Logo de BryTech">' +
              '<span class="brand__text"><span class="brand__name">BryTech</span><span class="brand__tag">Potencia accesible. Calidad real.</span></span>' +
            "</a>" +
            '<nav class="nav" aria-label="Principal">' +
              navLink("index.html", "Inicio") +
              navLink("catalogo.html", "Catálogo") +
              navLink("pedido.html", "Pedido") +
              navLink("cuenta.html", "Cuenta") +
            "</nav>" +
            '<div class="search-panel" id="search-panel">' +
              '<form class="search-form" action="catalogo.html" method="get" role="search">' +
                '<label class="sr-only" for="q-header">Buscar productos</label>' +
                '<input id="q-header" name="q" type="search" placeholder="Buscar productos">' +
                '<button type="submit">Buscar</button>' +
              "</form>" +
            "</div>" +
            '<div class="header-actions">' +
              '<button class="search-toggle" type="button" aria-label="Buscar" aria-expanded="false" aria-controls="search-panel" data-search-toggle>' + svgSearch() + "</button>" +
              '<a class="cart-link" href="carrito.html" aria-label="Carrito de compras">' +
                svgCart() +
                '<span class="cart-badge" data-cart-count hidden>0</span>' +
              "</a>" +
              '<button class="nav-toggle" type="button" aria-label="Menú" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle>' + svgMenu() + "</button>" +
            "</div>" +
          "</div>" +
          '<nav class="mobile-nav" id="mobile-nav" aria-label="Menú móvil">' +
            navLink("index.html", "Inicio") +
            navLink("catalogo.html", "Catálogo") +
            navLink("carrito.html", "Carrito") +
            navLink("pedido.html", "Consultar pedido") +
            navLink("cuenta.html", "Cuenta") +
          "</nav>" +
        "</header>";
    }

    if (footer) {
      footer.innerHTML =
        '<footer class="footer">' +
          '<div class="container footer-grid">' +
            '<div>' +
              '<div class="footer-brand">' +
                '<img src="assets/logo/Logo_BryTech.jpg" alt="Logo de BryTech">' +
                '<div><strong>BryTech</strong><div>Potencia accesible. Calidad real.</div></div>' +
              "</div>" +
              '<p>Tienda de tecnología y accesorios en Cúcuta, Norte de Santander, Colombia.</p>' +
            "</div>" +
            '<div class="footer-links">' +
              "<strong>Explorar</strong>" +
              '<a href="catalogo.html">Catálogo</a>' +
              '<a href="carrito.html">Carrito</a>' +
              '<a href="pedido.html">Estado del pedido</a>' +
              '<a href="cuenta.html">Mi cuenta</a>' +
            "</div>" +
            '<div class="footer-links">' +
              "<strong>Contacto</strong>" +
              '<a href="' + INSTAGRAM + '" target="_blank" rel="noopener noreferrer">Instagram: @BryTech.co</a>' +
              '<a href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer">WhatsApp: 317 838 5428</a>' +
              "<span>Cúcuta, Norte de Santander</span>" +
            "</div>" +
          "</div>" +
          '<div class="container footer-bottom">' +
            "<span>© " + new Date().getFullYear() + " BryTech. Sitio en desarrollo: los precios son de demostración y el carrito se guarda solo en tu navegador, sin pedidos reales.</span>" +
            '<a href="admin.html">Panel administrativo (prototipo)</a>' +
          "</div>" +
        "</footer>" +
        '<a class="whatsapp-fab" href="' + WHATSAPP + '" target="_blank" rel="noopener noreferrer" aria-label="Escribir a BryTech por WhatsApp">' +
          svgWhatsApp() +
        "</a>" +
        '<div class="toast" id="toast" role="status"></div>';
    }

    var navBtn = document.querySelector("[data-nav-toggle]");
    var searchBtn = document.querySelector("[data-search-toggle]");
    var mobileNav = qs("mobile-nav");
    var searchPanel = qs("search-panel");
    if (navBtn && mobileNav) {
      navBtn.addEventListener("click", function () {
        var abierto = mobileNav.classList.toggle("is-open");
        navBtn.setAttribute("aria-expanded", String(abierto));
      });
    }
    if (searchBtn && searchPanel) {
      searchBtn.addEventListener("click", function () {
        var abierto = searchPanel.classList.toggle("is-open");
        searchBtn.setAttribute("aria-expanded", String(abierto));
        if (abierto) {
          var campo = qs("q-header");
          if (campo) {
            campo.focus();
          }
        }
      });
    }
    BryTechCart.actualizarContador();
  }

  function tarjetaProducto(producto) {
    var variante = producto.variantes[0];
    var img = BryTechData.imagenPrincipal(producto, variante);
    var swatches = producto.variantes.length > 1 ? producto.variantes.map(function (v) {
      var light = v.hex === "#f8fafc" || v.hex === "#ffffff" || v.hex === "#cbd5e1" ? " is-light" : "";
      return '<span class="swatch' + light + '" style="background:' + v.hex + '" title="' + v.color + '"></span>';
    }).join("") : "";
    var detalle = producto.variantes.length > 1
      ? producto.variantes.length + " colores"
      : (variante.color === "Único" ? "" : variante.color);
    var categoria = (BryTechData.obtenerCategoria(producto.categoria) || {}).nombre || "";
    var enlace = "producto.html?id=" + encodeURIComponent(producto.id);
    return (
      '<article class="product-card">' +
        '<a class="product-card__media" href="' + enlace + '" tabindex="-1" aria-hidden="true">' +
          '<img src="' + img + '" alt="' + producto.nombre + '" loading="lazy" decoding="async">' +
        "</a>" +
        '<div class="product-card__body">' +
          '<p class="product-card__cat">' + categoria + "</p>" +
          '<h3><a href="' + enlace + '">' + producto.nombre + "</a></h3>" +
          (detalle ? '<p class="muted">' + detalle + "</p>" : "") +
          '<p class="price">' + BryTechData.formatearCOP(producto.precio) + "</p>" +
          '<span class="demo-chip">Precio demo</span>' +
          (swatches ? '<div class="swatches" aria-hidden="true">' + swatches + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  /** Producto con foto que representa a una categoría (el destacado, o el primero). */
  function representanteCategoria(idCategoria) {
    var lista = BryTechData.PRODUCTOS.filter(function (p) {
      return p.categoria === idCategoria;
    });
    var destacados = lista.filter(function (p) {
      return p.destacado;
    });
    return { total: lista.length, producto: destacados[0] || lista[0] || null };
  }

  function initInicio() {
    var cats = qs("categorias-destacadas");
    var dest = qs("productos-destacados");
    var hero = qs("hero-media");
    var banda = qs("banda-gaming");

    if (hero) {
      var pHero = BryTechData.obtenerProducto(ID_PRODUCTO_HEROE) || BryTechData.productosDestacados()[0];
      if (pHero) {
        hero.innerHTML =
          '<a class="hero-media__link" href="producto.html?id=' + encodeURIComponent(pHero.id) + '">' +
            '<img src="' + BryTechData.imagenPrincipal(pHero, pHero.variantes[0]) + '" alt="' + pHero.nombre + '" fetchpriority="high">' +
            '<span class="hero-media__tag">' + pHero.nombre + "</span>" +
          "</a>";
      }
    }

    if (cats) {
      cats.innerHTML = BryTechData.CATEGORIAS.map(function (c) {
        var info = representanteCategoria(c.id);
        if (!info.producto) {
          return (
            '<div class="category-card category-card--soon">' +
              '<div class="category-card__media category-card__media--empty">' + svgBox() + "</div>" +
              "<strong>" + c.nombre + "</strong>" +
              "<span>" + c.descripcion + "</span>" +
              '<small class="category-card__count">Próximamente</small>' +
            "</div>"
          );
        }
        var cuenta = info.total + (info.total === 1 ? " producto" : " productos");
        return (
          '<a class="category-card" href="catalogo.html?categoria=' + c.id + '">' +
            '<div class="category-card__media"><img src="' + BryTechData.imagenPrincipal(info.producto, info.producto.variantes[0]) + '" alt="" loading="lazy" decoding="async"></div>' +
            "<strong>" + c.nombre + "</strong>" +
            "<span>" + c.descripcion + "</span>" +
            '<small class="category-card__count">' + cuenta + "</small>" +
          "</a>"
        );
      }).join("");
    }

    if (dest) {
      dest.innerHTML = BryTechData.productosDestacados().slice(0, 4).map(tarjetaProducto).join("");
    }

    if (banda) {
      var pg = BryTechData.obtenerProducto(ID_PRODUCTO_GAMING);
      if (pg) {
        var enlaceG = "producto.html?id=" + encodeURIComponent(pg.id);
        banda.innerHTML =
          '<article class="gaming-card">' +
            "<div>" +
              '<p class="eyebrow">Gaming</p>' +
              "<h2>" + pg.nombre + "</h2>" +
              '<p class="gaming-card__text">Diadema para estudio, oficina y gaming.</p>' +
              '<div class="hero-actions">' +
                '<a class="btn btn-primary" href="' + enlaceG + '">Ver producto</a>' +
                '<a class="btn btn-ghost" href="catalogo.html?categoria=' + pg.categoria + '">Ver más diademas</a>' +
              "</div>" +
            "</div>" +
            '<a class="gaming-card__media" href="' + enlaceG + '" tabindex="-1" aria-hidden="true">' +
              '<img src="' + BryTechData.imagenPrincipal(pg, pg.variantes[0]) + '" alt="' + pg.nombre + '" loading="lazy" decoding="async">' +
            "</a>" +
          "</article>";
      }
    }
  }

  function leerFiltrosFormulario() {
    return {
      q: (qs("filtro-q") || {}).value || "",
      categoria: (qs("filtro-categoria") || {}).value || "todos",
      min: (qs("filtro-min") || {}).value || "",
      max: (qs("filtro-max") || {}).value || "",
      orden: (qs("filtro-orden") || {}).value || "relevancia"
    };
  }

  function pintarCatalogo() {
    var grid = qs("catalogo-grid");
    var meta = qs("catalogo-meta");
    var empty = qs("catalogo-vacio");
    if (!grid) {
      return;
    }
    var filtros = leerFiltrosFormulario();
    var lista = BryTechData.filtrarProductos(filtros);
    grid.innerHTML = lista.map(tarjetaProducto).join("");
    if (meta) {
      meta.textContent = lista.length + (lista.length === 1 ? " producto" : " productos") + " · precios de demostración";
    }
    if (empty) {
      empty.hidden = lista.length !== 0;
    }
  }

  function initCatalogo() {
    var select = qs("filtro-categoria");
    if (select) {
      select.innerHTML = '<option value="todos">Todas las categorías</option>' +
        BryTechData.CATEGORIAS.map(function (c) {
          return '<option value="' + c.id + '">' + c.nombre + "</option>";
        }).join("");
    }
    if (qs("filtro-q")) {
      qs("filtro-q").value = param("q");
    }
    if (select && param("categoria")) {
      select.value = param("categoria");
    }
    ["filtro-q", "filtro-categoria", "filtro-min", "filtro-max", "filtro-orden"].forEach(function (id) {
      var el = qs(id);
      if (el) {
        el.addEventListener("input", pintarCatalogo);
        el.addEventListener("change", pintarCatalogo);
      }
    });
    var limpiar = qs("limpiar-filtros");
    if (limpiar) {
      limpiar.addEventListener("click", function () {
        qs("filtro-q").value = "";
        qs("filtro-categoria").value = "todos";
        qs("filtro-min").value = "";
        qs("filtro-max").value = "";
        qs("filtro-orden").value = "relevancia";
        pintarCatalogo();
      });
    }
    pintarCatalogo();
  }

  function initProducto() {
    var id = param("id");
    var producto = BryTechData.obtenerProducto(id);
    var root = qs("producto-detalle");
    if (!root) {
      return;
    }
    if (!producto) {
      root.innerHTML = '<div class="empty-state"><h1>Producto no encontrado</h1><p>El identificador no existe en el catálogo de demostración.</p><a class="btn btn-primary" href="catalogo.html">Volver al catálogo</a></div>';
      return;
    }
    document.title = producto.nombre + " — BryTech";
    var varianteSel = BryTechData.obtenerVariante(producto, param("variante")) || producto.variantes[0];
    var imagenes = (varianteSel.imagenes && varianteSel.imagenes.length ? varianteSel.imagenes : producto.imagenes).slice();
    var categoria = BryTechData.obtenerCategoria(producto.categoria);

    // Solo se muestran características aptas para el cliente; las notas internas del
    // prototipo (pendientes, carpetas, nombres de archivo) se omiten de la ficha.
    var caracteristicas = producto.caracteristicas.filter(function (c) {
      return !/pendiente|carpeta|archivo/i.test(c);
    });
    var hayFichaIncompleta = caracteristicas.length !== producto.caracteristicas.length;

    function render() {
      var principal = BryTechData.encodeRuta(imagenes[0]);
      var thumbs = imagenes.length > 1 ? imagenes.map(function (ruta, i) {
        return '<button type="button" class="' + (i === 0 ? "is-active" : "") + '" data-thumb="' + i + '" aria-label="Ver foto ' + (i + 1) + '"><img src="' + BryTechData.encodeRuta(ruta) + '" alt="Vista ' + (i + 1) + " de " + producto.nombre + '"></button>';
      }).join("") : "";
      var colores = producto.variantes.map(function (v) {
        var active = v.id === varianteSel.id ? " is-active" : "";
        var light = v.hex === "#f8fafc" || v.hex === "#cbd5e1" ? " is-light" : "";
        return '<button type="button" class="color-option' + active + '" data-variante="' + v.id + '" aria-pressed="' + (v.id === varianteSel.id) + '"><span class="swatch' + light + '" style="background:' + v.hex + '"></span>' + v.color + "</button>";
      }).join("");
      var selectorColor = "";
      if (producto.variantes.length > 1) {
        selectorColor = '<div><strong>Color o acabado</strong><div class="color-options">' + colores + "</div></div>";
      } else if (varianteSel.color !== "Único") {
        selectorColor = "<p><strong>Color:</strong> " + varianteSel.color + "</p>";
      }
      var consultaWA = WHATSAPP + "?text=" + encodeURIComponent("Hola BryTech, quiero consultar la disponibilidad de " + producto.nombre + " (" + varianteSel.color + ").");
      root.innerHTML =
        '<div class="product-layout">' +
          '<div class="gallery">' +
            '<div class="gallery__main"><img id="foto-principal" src="' + principal + '" alt="' + producto.nombre + ", " + varianteSel.color + '"></div>' +
            (thumbs ? '<div class="thumbs">' + thumbs + "</div>" : "") +
          "</div>" +
          "<div>" +
            '<p class="eyebrow">' + (categoria ? categoria.nombre : "") + "</p>" +
            "<h1>" + producto.nombre + "</h1>" +
            '<p class="product-price">' + BryTechData.formatearCOP(producto.precio) + "</p>" +
            '<p class="demo-chip">Precio de demostración · no es una tarifa comercial verificada</p>' +
            '<p class="product-desc">' + producto.descripcion + "</p>" +
            selectorColor +
            '<form id="form-agregar">' +
              '<div class="qty-row">' +
                '<label for="cantidad">Cantidad</label>' +
                '<input id="cantidad" name="cantidad" type="number" min="1" max="99" value="1">' +
              "</div>" +
              '<button class="btn btn-primary" type="submit">Agregar al carrito</button>' +
            "</form>" +
            '<p class="muted product-wa">¿Quieres confirmar la disponibilidad? <a href="' + consultaWA + '" target="_blank" rel="noopener noreferrer">Consúltala por WhatsApp</a> antes de hacer tu pedido.</p>' +
            "<h2>Características</h2>" +
            '<ul class="feature-list">' + caracteristicas.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul>" +
            (hayFichaIncompleta ? '<p class="muted">Estamos completando las especificaciones técnicas. Pregúntanos por WhatsApp si necesitas un dato en particular.</p>' : "") +
          "</div>" +
        "</div>";

      root.querySelectorAll("[data-thumb]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var i = Number(btn.getAttribute("data-thumb"));
          qs("foto-principal").src = BryTechData.encodeRuta(imagenes[i]);
          root.querySelectorAll("[data-thumb]").forEach(function (b) { b.classList.remove("is-active"); });
          btn.classList.add("is-active");
        });
      });
      root.querySelectorAll("[data-variante]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          varianteSel = BryTechData.obtenerVariante(producto, btn.getAttribute("data-variante"));
          imagenes = (varianteSel.imagenes && varianteSel.imagenes.length ? varianteSel.imagenes : producto.imagenes).slice();
          render();
        });
      });
      var form = qs("form-agregar");
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var qty = Number(qs("cantidad").value);
        if (!qty || qty < 1) {
          mostrarToast("Indica una cantidad válida, de 1 a 99.");
          return;
        }
        var res = BryTechCart.agregar(producto.id, varianteSel.id, qty);
        mostrarToast(res.mensaje);
      });
    }

    render();
  }

  function initCarrito() {
    var root = qs("carrito-contenido");
    if (!root) {
      return;
    }

    function pintar() {
      var resumen = BryTechCart.enriquecer();
      if (!resumen.lineas.length) {
        root.innerHTML = '<div class="empty-state"><h1>Tu carrito está vacío</h1><p>Agrega productos desde el catálogo. Este carrito se guarda solo en tu navegador.</p><a class="btn btn-primary" href="catalogo.html">Ir al catálogo</a></div>';
        return;
      }
      var items = resumen.lineas.map(function (linea) {
        return (
          '<article class="cart-item" data-linea="' + linea.id + '">' +
            '<img src="' + BryTechData.imagenPrincipal(linea.producto, linea.variante) + '" alt="">' +
            "<div>" +
              "<h3>" + linea.producto.nombre + "</h3>" +
              '<p class="muted">Variante: ' + linea.variante.color + "</p>" +
              '<p>Precio unitario (demo): <strong>' + BryTechData.formatearCOP(linea.precio) + "</strong></p>" +
              '<div class="qty-row">' +
                '<button class="btn btn-ghost" type="button" data-menos aria-label="Reducir cantidad">-</button>' +
                '<input type="number" min="1" max="99" value="' + linea.cantidad + '" data-qty aria-label="Cantidad">' +
                '<button class="btn btn-ghost" type="button" data-mas aria-label="Aumentar cantidad">+</button>' +
                '<button class="btn btn-danger" type="button" data-eliminar>Eliminar</button>' +
              "</div>" +
              "<p>Importe: <strong>" + BryTechData.formatearCOP(linea.importe) + "</strong></p>" +
            "</div>" +
          "</article>"
        );
      }).join("");
      root.innerHTML =
        '<div class="cart-layout">' +
          '<div><h1>Carrito</h1><p class="alert alert-warn">Persistencia local de demostración. No reserva inventario ni genera un pedido real.</p><div class="cart-table">' + items + "</div></div>" +
          '<aside class="summary">' +
            "<h2>Resumen</h2>" +
            "<p>Unidades: <strong>" + resumen.unidades + "</strong></p>" +
            "<p>Subtotal de demostración: <strong>" + BryTechData.formatearCOP(resumen.subtotal) + "</strong></p>" +
            '<a class="btn btn-primary" href="checkout.html">Continuar al checkout</a>' +
            '<button class="btn btn-ghost" type="button" id="vaciar-carrito" style="margin-top:8px;width:100%">Vaciar carrito</button>' +
          "</aside>" +
        "</div>";

      root.querySelectorAll("[data-linea]").forEach(function (nodo) {
        var id = nodo.getAttribute("data-linea");
        var input = nodo.querySelector("[data-qty]");
        nodo.querySelector("[data-menos]").addEventListener("click", function () {
          BryTechCart.actualizarCantidad(id, Number(input.value) - 1);
          pintar();
        });
        nodo.querySelector("[data-mas]").addEventListener("click", function () {
          BryTechCart.actualizarCantidad(id, Number(input.value) + 1);
          pintar();
        });
        input.addEventListener("change", function () {
          var n = parseInt(input.value, 10);
          if (isNaN(n) || n < 1) {
            mostrarToast("La cantidad mínima es 1.");
            n = 1;
          }
          BryTechCart.actualizarCantidad(id, n);
          pintar();
        });
        nodo.querySelector("[data-eliminar]").addEventListener("click", function () {
          BryTechCart.eliminar(id);
          pintar();
        });
      });
      qs("vaciar-carrito").addEventListener("click", function () {
        BryTechCart.vaciar();
        pintar();
      });
    }

    pintar();
  }

  function valor(id) {
    return (qs(id).value || "").trim();
  }

  function setError(id, mensaje) {
    qs(id).textContent = mensaje || "";
  }

  function initCheckout() {
    var form = qs("form-checkout");
    if (!form) {
      return;
    }
    var resumen = BryTechCart.enriquecer();
    var box = qs("checkout-resumen");
    if (!resumen.lineas.length) {
      form.hidden = true;
      qs("checkout-vacio").hidden = false;
      return;
    }
    box.innerHTML = resumen.lineas.map(function (l) {
      return "<li>" + l.producto.nombre + " · " + l.variante.color + " × " + l.cantidad + " — " + BryTechData.formatearCOP(l.importe) + "</li>";
    }).join("") + "<p><strong>Subtotal de demostración: " + BryTechData.formatearCOP(resumen.subtotal) + "</strong></p>";

    var entrega = qs("entrega");
    function toggleDireccion() {
      var necesita = entrega.value === "domicilio";
      qs("campo-direccion").hidden = !necesita;
      qs("direccion").required = necesita;
    }
    entrega.addEventListener("change", toggleDireccion);
    toggleDireccion();

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      var nombre = valor("nombre");
      var telefono = valor("telefono").replace(/\s/g, "");
      var ciudad = valor("ciudad");
      var metodo = entrega.value;
      var direccion = valor("direccion");
      var observaciones = valor("observaciones");

      setError("error-nombre", "");
      setError("error-telefono", "");
      setError("error-ciudad", "");
      setError("error-entrega", "");
      setError("error-direccion", "");

      if (nombre.length < 3) {
        setError("error-nombre", "Escribe tu nombre completo (mínimo 3 caracteres).");
        ok = false;
      }
      if (!/^[0-9]{10}$/.test(telefono)) {
        setError("error-telefono", "Ingresa un teléfono de 10 dígitos, sin espacios.");
        ok = false;
      }
      if (ciudad.length < 2) {
        setError("error-ciudad", "Indica la ciudad.");
        ok = false;
      }
      if (!metodo) {
        setError("error-entrega", "Selecciona un método de entrega.");
        ok = false;
      }
      if (metodo === "domicilio" && direccion.length < 8) {
        setError("error-direccion", "La dirección es necesaria para domicilio.");
        ok = false;
      }
      if (!ok) {
        qs("checkout-mensaje").innerHTML = '<div class="alert alert-error">Revisa los campos marcados antes de continuar.</div>';
        return;
      }

      var pedido = {
        id: BryTechCart.crearIdPedido(),
        fecha: new Date().toISOString(),
        estado: "simulacion-local",
        cliente: { nombre: nombre, telefono: telefono, ciudad: ciudad, direccion: metodo === "domicilio" ? direccion : "", entrega: metodo, observaciones: observaciones },
        items: resumen.lineas.map(function (l) {
          return { productoId: l.producto.id, nombre: l.producto.nombre, variante: l.variante.color, cantidad: l.cantidad, precioDemo: l.precio };
        }),
        totalDemo: resumen.subtotal,
        aviso: "Simulación local. Este identificador no existe en un servidor ni inicia un pedido real."
      };
      BryTechCart.guardarPedidoDemo(pedido);
      BryTechCart.vaciar();
      form.hidden = true;
      qs("checkout-exito").hidden = false;
      qs("pedido-id-demo").textContent = pedido.id;
    });
  }

  function initPedido() {
    var form = qs("form-pedido");
    if (!form) {
      return;
    }
    var pre = param("id");
    if (pre) {
      qs("pedido-id").value = pre;
    }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var id = valor("pedido-id").toUpperCase();
      var salida = qs("pedido-resultado");
      if (!id) {
        salida.innerHTML = '<div class="alert alert-error">Escribe un identificador.</div>';
        return;
      }
      var pedido = BryTechCart.buscarPedidoDemo(id);
      if (!pedido) {
        salida.innerHTML = '<div class="alert alert-warn"><strong>Sin resultado en este navegador.</strong> No hay un pedido de demostración con ese identificador en la sesión actual. El seguimiento real de pedidos requiere backend (Spring Boot) y no está activo.</div>';
        return;
      }
      salida.innerHTML =
        '<div class="alert alert-ok">Se encontró una simulación local, no un pedido de servidor.</div>' +
        '<div class="panel" style="padding:18px">' +
          "<p>Identificador: <strong class=\"mono\">" + pedido.id + "</strong></p>" +
          "<p>Estado mostrado: simulación local (no es un estado operativo de tienda).</p>" +
          "<p>Cliente: " + pedido.cliente.nombre + " · " + pedido.cliente.ciudad + "</p>" +
          "<p>Total de demostración: " + BryTechData.formatearCOP(pedido.totalDemo) + "</p>" +
          "<ul>" + pedido.items.map(function (i) { return "<li>" + i.nombre + " (" + i.variante + ") × " + i.cantidad + "</li>"; }).join("") + "</ul>" +
        "</div>";
    });
  }

  function initCuenta() {
    function bloquear(formId, mensajeId, texto) {
      var form = qs(formId);
      if (!form) {
        return;
      }
      form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var pass = form.querySelector('input[type="password"]');
        if (pass) {
          pass.value = "";
        }
        qs(mensajeId).innerHTML = '<div class="alert alert-warn">' + texto + "</div>";
      });
    }
    bloquear("form-login", "login-mensaje", "El inicio de sesión no está activo. La autenticación segura se implementará en el backend con Spring Security. No se guardó ninguna contraseña.");
    bloquear("form-registro", "registro-mensaje", "El registro de cuentas no está activo. Un formulario frontend no crea usuarios reales ni almacena credenciales. Esta interfaz queda preparada para conectarse a POST /api/auth/registro.");
  }

  function initAdmin() {
    var tbody = qs("admin-productos");
    if (!tbody) {
      return;
    }
    tbody.innerHTML = BryTechData.PRODUCTOS.map(function (p) {
      return "<tr><td>" + p.id + "</td><td>" + p.nombre + "</td><td>" + p.categoria + "</td><td>" + BryTechData.formatearCOP(p.precio) + "</td><td>" + p.variantes.length + "</td><td>stock no verificado</td></tr>";
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderShell();
    var page = paginaActual();
    if (page === "inicio") {
      initInicio();
    }
    if (page === "catalogo") {
      initCatalogo();
    }
    if (page === "producto") {
      initProducto();
    }
    if (page === "carrito") {
      initCarrito();
    }
    if (page === "checkout") {
      initCheckout();
    }
    if (page === "pedido") {
      initPedido();
    }
    if (page === "cuenta") {
      initCuenta();
    }
    if (page === "admin") {
      initAdmin();
    }
  });
})();
