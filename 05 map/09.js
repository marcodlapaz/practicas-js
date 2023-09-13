// Ejemplo 9: Multiplicar elementos por su índice.

// Dado un arreglo de números, utiliza la función map
// para multiplicar cada número por su índice y devolver
// un nuevo arreglo.

let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map((valor, indice) => {
  return valor * indice;
});

console.log(resultado);
