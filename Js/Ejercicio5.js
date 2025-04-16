
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

const numero1 = parseInt(prompt("Ingrese el primer numero a sumar: "));
const numero2 = parseInt(prompt("Ingrese el segundo numero a sumar: "));
document.writeln(`La suma de los numeros ${numero1} y ${numero2} es: `, numero1+numero2);