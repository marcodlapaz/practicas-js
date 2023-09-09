// Ejemplo 7: Acceder a una propiedad de un objeto dentro de un arreglo

// Crea un arreglo llamado personas que contiene 
// objetos de personas. Cada objeto tiene una propiedad 
// nombre. Luego, crea una variable llamada indice que 
// contiene el índice del objeto que deseas acceder y 
// muestra el nombre de esa persona utilizando notación
// de corchetes.

let personas = [
  { nombre: "Marco" },
  { nombre: "Antonio" },
  { nombre: "Erica" },
];
let indice = 1;

console.log(personas[indice]["nombre"]);
