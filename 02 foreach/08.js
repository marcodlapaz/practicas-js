// Ejemplo 8: Sumar todos los elementos de un arreglo.

// Crea un arreglo de números y utiliza el método forEach
// para sumar todos los elementos y mostrar el resultado
// en la consola.

let numeros = [1, 2, 3, 4, 5];
let suma = 0;

numeros.forEach((numero) => {
  suma += numero;
});

console.log(suma);
