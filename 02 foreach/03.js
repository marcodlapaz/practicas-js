// Ejemplo 3: Calcular el doble de cada número en un arreglo.

// Crea un arreglo de números y utiliza el método forEach para
// calcular el doble de cada número y mostrar los resultados
// en la consola.

let numeros = [1, 2, 3, 4, 5];
let dobles = [];

numeros.forEach((numero) => {
  dobles.push(numero * 2);
});

console.log(dobles);
