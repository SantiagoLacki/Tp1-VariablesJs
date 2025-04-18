
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo: 
// input: 20
// Output: El 20 es divisible por 2.

document.writeln("Algoritmo que define si un número es divisible por 2, 3, 5 o 7: <br>");

const numero = parseInt(prompt("Ingrese un numero para determinar si es divisible por 2, 3, 5 o 7: "));

document.writeln("El número ingresado es: ", numero, " <br>");

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
  if (numero % 2 == 0) {
    document.writeln("Es divisible en 2. <br>");
  }
  
  if (numero % 3 == 0) {
    document.writeln("Es divisible en 3. <br>");  
  }
  
  if (numero % 5 == 0) {
    document.writeln("Es divisible en 5. <br>");
  }
  
  if (numero % 7 == 0) {
    document.writeln("Es divisible en 7. <br>");
  }
}
else {
  document.writeln("El número ", numero, " no es divisible en: 2, 3, 5 ni 7.");
}
