// Ejemplo 2: Convertir palabras a mayúsculas.

// Dado un arreglo de palabras, utiliza la función map
// para convertir todas las palabras a mayúsculas y devolver
// un nuevo arreglo.

let palabras = ["hola", "mundo"];

let mayusculas = palabras.map((palabra) => {
  return palabra.toUpperCase();
});

console.log(palabras);
console.log(mayusculas);
