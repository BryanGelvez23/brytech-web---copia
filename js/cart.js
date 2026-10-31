/**
 * Carrito de demostración.
 * Se guarda en localStorage del navegador. No es una base de datos,
 * no reserva inventario y no registra pedidos en un servidor.
 */
(function (global) {
  "use strict";

  var CLAVE = "brytech_carrito_demo";
  var CLAVE_PEDIDOS = "brytech_pedidos_demo";
  var MAX_UNIDADES = 99;

  function leer() {
    try {
      var crudo = localStorage.getItem(CLAVE);
      var datos = crudo ? JSON.parse(crudo) : [];
      return Array.isArray(datos) ? datos : [];
    } catch (error) {
      return [];
    }
  }

  function guardar(items) {
    localStorage.setItem(CLAVE, JSON.stringify(items));
    actualizarContador();
  }

  function claveLinea(productoId, varianteId) {
    return productoId + "::" + varianteId;
  }

  function normalizarCantidad(valor) {
    var n = parseInt(valor, 10);
    if (isNaN(n) || n < 1) {
      return 1;
    }
    if (n > MAX_UNIDADES) {
      return MAX_UNIDADES;
    }
    return n;
  }

  function agregar(productoId, varianteId, cantidad) {
    var producto = BryTechData.obtenerProducto(productoId);
    if (!producto) {
      return { ok: false, mensaje: "El producto no existe en el catálogo de demostración." };
    }
    var variante = BryTechData.obtenerVariante(producto, varianteId);
    if (!variante) {
      return { ok: false, mensaje: "La variante seleccionada no está disponible." };
    }
    var qty = normalizarCantidad(cantidad || 1);
    var items = leer();
    var id = claveLinea(producto.id, variante.id);
    var encontrado = false;
    for (var i = 0; i < items.length; i += 1) {
      if (items[i].id === id) {
        items[i].cantidad = normalizarCantidad(items[i].cantidad + qty);
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      items.push({
        id: id,
        productoId: producto.id,
        varianteId: variante.id,
        cantidad: qty
      });
    }
    guardar(items);
    return {
      ok: true,
      mensaje: producto.nombre + " (" + variante.color + ") se agregó al carrito de demostración."
    };
  }

  function actualizarCantidad(idLinea, cantidad) {
    var items = leer();
    for (var i = 0; i < items.length; i += 1) {
      if (items[i].id === idLinea) {
        items[i].cantidad = normalizarCantidad(cantidad);
        guardar(items);
        return true;
      }
    }
    return false;
  }

  function eliminar(idLinea) {
    var items = leer().filter(function (item) {
      return item.id !== idLinea;
    });
    guardar(items);
  }

  function vaciar() {
    guardar([]);
  }

  function enriquecer() {
    var items = leer();
    var lineas = [];
    var unidades = 0;
    var subtotal = 0;
    for (var i = 0; i < items.length; i += 1) {
      var item = items[i];
      var producto = BryTechData.obtenerProducto(item.productoId);
      if (!producto) {
        continue;
      }
      var variante = BryTechData.obtenerVariante(producto, item.varianteId);
      var cantidad = normalizarCantidad(item.cantidad);
      var precio = producto.precio;
      var importe = precio * cantidad;
      unidades += cantidad;
      subtotal += importe;
      lineas.push({
        id: item.id,
        producto: producto,
        variante: variante,
        cantidad: cantidad,
        precio: precio,
        importe: importe
      });
    }
    return { lineas: lineas, unidades: unidades, subtotal: subtotal };
  }

  function actualizarContador() {
    var resumen = enriquecer();
    var nodos = document.querySelectorAll("[data-cart-count]");
    for (var i = 0; i < nodos.length; i += 1) {
      nodos[i].textContent = String(resumen.unidades);
      nodos[i].hidden = resumen.unidades === 0;
    }
  }

  function leerPedidosDemo() {
    try {
      var crudo = sessionStorage.getItem(CLAVE_PEDIDOS);
      var datos = crudo ? JSON.parse(crudo) : [];
      return Array.isArray(datos) ? datos : [];
    } catch (error) {
      return [];
    }
  }

  function guardarPedidoDemo(pedido) {
    var pedidos = leerPedidosDemo();
    pedidos.unshift(pedido);
    sessionStorage.setItem(CLAVE_PEDIDOS, JSON.stringify(pedidos));
  }

  function buscarPedidoDemo(id) {
    var pedidos = leerPedidosDemo();
    for (var i = 0; i < pedidos.length; i += 1) {
      if (pedidos[i].id === id) {
        return pedidos[i];
      }
    }
    return null;
  }

  function crearIdPedido() {
    var aleatorio = Math.floor(1000 + Math.random() * 9000);
    return "BRY-DEMO-" + aleatorio;
  }

  global.BryTechCart = {
    MAX_UNIDADES: MAX_UNIDADES,
    leer: leer,
    agregar: agregar,
    actualizarCantidad: actualizarCantidad,
    eliminar: eliminar,
    vaciar: vaciar,
    enriquecer: enriquecer,
    actualizarContador: actualizarContador,
    guardarPedidoDemo: guardarPedidoDemo,
    buscarPedidoDemo: buscarPedidoDemo,
    crearIdPedido: crearIdPedido
  };
})(window);
