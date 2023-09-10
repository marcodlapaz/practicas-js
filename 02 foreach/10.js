// Ejemplo 10: Crear un nuevo arreglo a partir de otro.

// Crea un arreglo de números y utiliza el método forEach
// para crear un nuevo arreglo que contenga los elementos
// multiplicados por 2.

let numeros = [1, 2, 3, 4, 5];
let nuevoArray = [];

numeros.forEach((numero) => {
  nuevoArray.push(numero * 2);
});

console.log(nuevoArray);