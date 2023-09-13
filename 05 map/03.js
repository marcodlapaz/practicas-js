// Ejemplo 3: Calcular el cuadrado de los números.

// Dado un arreglo de números, utiliza la función map
// para calcular el cuadrado de cada número y devolver
// un nuevo arreglo.

let numeros = [1, 2, 3];

let cuadrado = numeros.map((numero) => {
  return numero ** 2;
});

console.log(cuadrado);
