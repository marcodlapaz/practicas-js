// Ejemplo 1: Duplicar los elementos de un arreglo.

// Dado un arreglo de números, utiliza la función map
// para duplicar cada elemento y devolver un nuevo arreglo.

let numeros = [1, 2, 3];

let duplicados = numeros.map((numero) => {
  return numero * 2;
});

console.log(duplicados);