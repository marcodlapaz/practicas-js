// Ejemplo 9: Eliminar elementos duplicados de un arreglo.

// Crea un arreglo con elementos duplicados y utiliza el
// método forEach para eliminar los duplicados y mostrar el
// arreglo resultante en la consola.

let numeros = [1, 2, 3, 4, 5, 1, 3, 6, 5];
let nuevoArr = [];

numeros.forEach((numero) => {
  if (!nuevoArr.includes(numero)) {
    nuevoArr.push(numero);
  }
});

console.log(nuevoArr);
