
// 7-. Calcular el perímetro y área de un rectángulo: Crear un 
// algoritmo que permita al usuario ingresar el largo y el ancho 
// de un rectángulo, y calcular su perímetro y área. Las fórmulas son:
// Perímetro: P = 2*(largo+ancho)
// Área: A=largo×ancho

document.writeln("Algoritmo para calcular el perimetro y area de un rectangulo: <br>");

const largo = parseFloat(prompt("Ingrese el largo del rectangulo: "));
const ancho = parseFloat(prompt("Ingrese el ancho del rectangulo: "));

const perimetro = 2 * (largo + ancho);
const area = largo * ancho;

document.writeln("El largo del rectangulo es: " + largo + "<br>");
document.writeln("El ancho del rectangulo es: " + ancho + "<br>");
document.writeln("El perimetro del rectangulo es: " + perimetro + "<br>");
document.writeln("El area del rectangulo es: " + area);
