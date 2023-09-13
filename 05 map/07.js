// Ejemplo 7: Capitalizar palabras.

// Dado un arreglo de palabras en minúsculas,
// utiliza la función map para capitalizar la primera
// letra de cada palabra y devolver un nuevo arreglo.

let palabras = ["hola", "mundo"];

let primerLetra = palabras.map((palabra) => {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
});

console.log(primerLetra);
