
// 5-. Calcular el precio con descuento: Crear un algoritmo 
// que permita ingresar el precio de un producto y aplicar un 
// descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.

document.writeln("Algoritmo para determinar el descuento del 15% del un precio mayor a 1000: <br>");

let precio = parseFloat(prompt("Ingrese el precio del producto (debe ser mayor a $1000): "));
let descuento = "";
let precioFinal = "";

if (precio > 1000) {
  descuento = precio * 0.15;
  precioFinal = precio - descuento;
  document.writeln("El precio ingresado es: $" + precio + "<br>");
  document.writeln("El descuento del 15% de $" + precio + " es: $" + descuento + "<br>");
  document.writeln("El precio final a pagar es: ", precioFinal);
}
else {
  document.writeln("Ingrese un precio mayor a $1000.")
}