
// 9.- Escribe un programa que pida una palabra y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:
// input: Hola mundo
// Output: oauo

document.writeln("Algoritmo que define las vocales de una palabra: <br>");

const palabra = prompt("Ingrese una palabra (max. 10 caracteres): ").toLowerCase();
let vocales = "";

if (palabra.length < 10) {
  if (palabra.charAt(0)== "a" || palabra.charAt(0)== "e" ||palabra.charAt(0)== "i" || palabra.charAt(0)== "o" || palabra.charAt(0)== "u"){
    vocales += palabra.charAt(0);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(1)== "a" || palabra.charAt(1)== "e" ||palabra.charAt(1)== "i" || palabra.charAt(1)== "o" || palabra.charAt(1)== "u"){
    vocales += palabra.charAt(1);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(2)== "a" || palabra.charAt(2)== "e" ||palabra.charAt(2)== "i" || palabra.charAt(2)== "o" || palabra.charAt(2)== "u"){
    vocales += palabra.charAt(2);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(3)== "a" || palabra.charAt(3)== "e" ||palabra.charAt(3)== "i" || palabra.charAt(3)== "o" || palabra.charAt(3)== "u"){
    vocales += palabra.charAt(3);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(4)== "a" || palabra.charAt(4)== "e" ||palabra.charAt(4)== "i" || palabra.charAt(4)== "o" || palabra.charAt(4)== "u"){
    vocales += palabra.charAt(4);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(5)== "a" || palabra.charAt(5)== "e" ||palabra.charAt(5)== "i" || palabra.charAt(5)== "o" || palabra.charAt(5)== "u"){
    vocales += palabra.charAt(5);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(6)== "a" || palabra.charAt(6)== "e" ||palabra.charAt(6)== "i" || palabra.charAt(6)== "o" || palabra.charAt(6)== "u"){
    vocales += palabra.charAt(6);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(7)== "a" || palabra.charAt(7)== "e" ||palabra.charAt(7)== "i" || palabra.charAt(7)== "o" || palabra.charAt(7)== "u"){
    vocales += palabra.charAt(7);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(8)== "a" || palabra.charAt(8)== "e" ||palabra.charAt(8)== "i" || palabra.charAt(8)== "o" || palabra.charAt(8)== "u"){
    vocales += palabra.charAt(8);
    document.writeln("La palabra/palabra ingresada con tiene estas vocales: ", vocales);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
  if (palabra.charAt(9)== "a" || palabra.charAt(9)== "e" ||palabra.charAt(9)== "i" || palabra.charAt(9)== "o" || palabra.charAt(9)== "u"){
    vocales += palabra.charAt(9);
    console.log("Se agrego a la variable vocal: ", vocales);
  }
}
document.writeln("La palabra ingresada es: ", palabra ,"<br>");
document.writeln("Las vocales encontradas son: ", vocales);
