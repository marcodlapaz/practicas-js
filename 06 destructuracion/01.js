// Ejemplo 1: Destructurar propiedades de un objeto.

// Dado un objeto persona con propiedades como nombre
// y edad, utiliza la destructuración de objetos para extraer
// y mostrar esas propiedades.

let persona = {
  nombre: "Marco",
  edad: 32,
};

let { nombre, edad } = persona;

console.log(`Nombre: ${nombre}, edad: ${edad}`);
