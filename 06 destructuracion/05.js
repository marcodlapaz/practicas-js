// Ejemplo 5: Destructuración en funciones.

// Crea una función llamada obtenerInformacion que
// recibe un objeto estudiante con propiedades como
// nombre y calificación. Utiliza la destructuración
// de objetos en la función para extraer y mostrar la
// información.

function obtenerInformacion(estudiante) {
  let { nombre, calificacion } = estudiante;

  return `Nombre: ${nombre} Calificación: ${calificacion}`;
}

let estudiante = {
  nombre: "Marco",
  calificacion: 51,
};

console.log(obtenerInformacion(estudiante));
