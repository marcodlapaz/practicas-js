// Ejemplo 3: Agregar una propiedad dinámicamente

// Crea un objeto llamado persona con una propiedad
// nombre. Luego, crea una variable llamada nuevaPropiedad 
// que contiene el nombre de una nueva propiedad que deseas 
// agregar al objeto y otra variable llamada valor que contiene
// el valor de esa nueva propiedad. Agrega la nueva propiedad 
// al objeto utilizando notación de corchetes.

let persona = {
  nombre: "Juan",
};

let nuevaPropiedad = "edad";
let valor = 32;

persona[nuevaPropiedad] = valor;

console.log(persona);