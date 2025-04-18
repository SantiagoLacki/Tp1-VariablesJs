
// 6-. Convertir grados Fahrenheit a Celsius: Crear un algoritmo 
// que permita al usuario ingresar una temperatura en grados Fahrenheit 
// y convertirla a grados Celsius. La fórmula para convertir de 
// Fahrenheit a Celsius es: C= (5/9)​*(F−32)

document.writeln("Algoritmo para convertir °F a °C: <br>");

const fahrenheit = parseFloat(prompt("Ingrese temperatura en °F: "));
const celsius = (5/9) * (fahrenheit - 32);

document.writeln(`La temperatura en °C de ${fahrenheit} °F es: ${celsius} °C`);