
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo: 
// input: 15 , 3
// Output: El 15 es el número más grande

document.writeln("Algoritmo para determinar que numero de los ingresados es mayor: <br>");

const num1 = parseInt(prompt("Ingrese el primer numero: "));
const num2 = parseInt(prompt("Ingrese el segundo numero: "));

if (num1 != num2) {
  if (num1 > num2) {
    document.writeln(`${num1} es mayor que ${num2}`);
  }
  else {
    document.writeln(`${num2} es mayor que ${num1}`);
  }
}
else {
  document.writeln(`${num1} = ${num2} <br> Los numeros son iguales.`);
}
