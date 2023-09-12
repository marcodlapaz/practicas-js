// Ejemplo 9: Usar clases para crear objetos.

// Crea una clase Persona con propiedades como
// nombre y edad. Luego, crea objetos utilizando
// la clase.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

let persona1 = new Persona("Marco", 32);
let persona2 = new Persona("Carmen", 35);

console.log(persona1);
console.log(persona2);