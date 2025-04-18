
// 3-. Multiplicar un número por 10:  Crear un algoritmo 
// que permita al usuario ingresar un número y luego 
// mostrar el resultado de multiplicarlo por 10.

document.writeln("Algoritmo que multiplica el numero ingresado por 10: <br>");

const multiplicar = parseInt(prompt("Ingrese el numero a multiplicar (x10): "));
let resultado = "";

document.writeln(`El numero ingresado es: ${multiplicar}. <br>`);

resultado = multiplicar * 10;

document.writeln(`El resultado de multiplicar ${multiplicar} por 10 es: ${resultado}.`);
