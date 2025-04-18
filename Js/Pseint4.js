
// 4-. Determinar si un número es par o impar: Crear un 
// algoritmo que permita al usuario ingresar un número y 
// determinar si es par o impar. Mostrar el resultado.

document.writeln("Algoritmo para determinar si un numero es par o impar: <br>");

const numero = parseInt(prompt("Ingrese un numero para saber si es par o impar: "));

document.writeln("El numero ingresado es: ", numero, ". <br>");

if (numero % 2 == 0) {
  document.writeln("El numero ingresado es par");
}
else {
  document.writeln("El numero ingresado es impar");
}
