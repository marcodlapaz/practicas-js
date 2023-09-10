// Ejemplo 5: Filtrar elementos de un arreglo.

// Crea un arreglo de números y utiliza el método forEach
// para filtrar los números mayores que 10 y mostrarlos
// en la consola.

let numeros = [1, 20, 3, 44, 10];
let mayoreADiez = [];

numeros.forEach((numero) => {
  if (numero > 10) {
    mayoreADiez.push(numero);
  }
});

console.log(mayoreADiez);
