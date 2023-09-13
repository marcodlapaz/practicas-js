// Ejemplo 6: Filtrar números pares.

// Dado un arreglo de números, utiliza la función map
// para filtrar solo los números pares y devolver un nuevo
// arreglo.

let numeros = [1, 2, 3, 4, 5];

let pares = numeros.map((numero) => {
  if (numero % 2 === 0) {
    return numero;
  }
});

console.log(pares);
console.log(pares.length);
console.log(typeof pares);
