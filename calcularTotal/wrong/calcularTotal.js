function calcularTotal(precio, cantidad) {
  // Función sin nombre para calcular el descuento
  const calcularDescuento = function (precio) {
    if (precio >= 100) {
      return precio * 0.1;
    } else {
      return 0;
    }
  };

  // Variable sin nombre para almacenar el descuento
  const descuento = calcularDescuento(precio);

  // Cálculo del total sin comentarios
  const total = precio * cantidad - descuento;

  return total;
}

// Ejemplo de uso
const precioProducto = 120;
const cantidadProducto = 2;
const totalCompra = calcularTotal(precioProducto, cantidadProducto);

console.log(`El total de la compra es: $${totalCompra}`);
