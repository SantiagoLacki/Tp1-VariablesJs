
// Pedir la edad y decir si es mayor de edad: Crear un algoritmo 
// que pida la edad del usuario y determine si es mayor de edad (18 años o más).

document.writeln("Algoritmo que determina si eres mayor de edad o no: <br>");

const edad = parseInt(prompt("Ingrese su edad:"));

document.writeln(`La edad ingresada es: ${edad}. <br>`);

if (edad > 0) {
  if (edad >= 18) {
    document.writeln("Eres mayor de edad.");
  }
  else {
    document.writeln("Eres menor de edad.");
  }
}
else {
  document.writeln("La edad ingresada no es válida.");
}
