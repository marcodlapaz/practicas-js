// Ejemplo 10: Destructuración de objetos.

// Crea un objeto alumno con propiedades como
// nombre, edad y calificación. Luego, utiliza la
// destructuración de objetos para extraer y mostrar
// las propiedades.

let alumno = {
  nombre: "Marco",
  edad: 32,
  calificacion: 51,
};

let { nombre, edad, calificacion } = alumno;

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Calificación: ${calificacion}`);
