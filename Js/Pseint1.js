
// 1.- Realizar una suma de dos números:  Crear un algoritmo que permita al 
// usuario ingresar dos números, realizar la suma de ambos y mostrar el resultado.

document.writeln("Algoritmo que suma dos numeros ingresados por el usuario: <br>");

const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));
let suma = num1 + num2;

document.writeln(`Los numeros ingresados son: ${num1} y ${num2} <br>`);
document.writeln(`La suma de ${num1} + ${num2} es: ${suma}`);
