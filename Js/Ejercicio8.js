
// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo: 
// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

document.writeln("Algoritmo para determinar si un numero es divisible en 2: <br>");

const numero = parseInt(prompt("Ingrese un numero: "))

if (numero % 2 === 0) {
  document.writeln(`El numero ${numero}, SI es divisible en 2. <br>`);
}
else {
  document.writeln(`El numero ${numero}, NO es divisible en 2.`);
}