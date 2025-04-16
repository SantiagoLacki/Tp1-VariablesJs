
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo: 
// input: 15 , 3, 9
// Output: El 15 es el número más grande

document.writeln("Algoritmo para determinar que numero de los ingresados es mayor: <br>");

num1 = parseInt(prompt("Ingrese el primer numero: "));
num2 = parseInt(prompt("Ingrese el segundo numero: "));
num3 = parseInt(prompt("Ingrese el tercer numero: "));

if (num1 > num2) {
  if (num1 > num3) {
    document.writeln(`${num1} es mayor que ${num2} y ${num3}`);
  }
  else {
    document.writeln(`${num3} es mayor que ${num1} y ${num2}`);
  }
}
else if (num2 > num3) {
  document.writeln(`${num2} es mayor que ${num1} y ${num3}.`);
}
else {
  document.writeln(`${num3} es mayor que ${num1} y ${num2}.`);
}
