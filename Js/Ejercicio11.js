
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo: 
// input: 20
// input: 210
// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.

document.writeln("Algoritmo que define si un número es divisible por 2, 3, 5 o 7: <br>");

const numero = parseInt(prompt("Ingrese un numero para determinar si es divisible por 2, 3, 5 o 7: "));
divisible = "";

document.writeln("El número ingresado es: ", numero, " <br>");

if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
  if (numero % 2 == 0) {
    divisible += " por 2";
  }
  
  if (numero % 3 == 0) {
    divisible += " por 3";
  }
  
  if (numero % 5 == 0) {
    divisible += " por 5";
  }
  
  if (numero % 7 == 0) {
    divisible += " por 7";
  }
  document.writeln("El número ", numero, " es divisible", divisible , ". <br>");
}
else {
  document.writeln("El número ", numero, " no es divisible en: 2, 3, 5 ni 7.");
}
