// Ejemplo 5: Combinar elementos de dos arreglos.

// Dados dos arreglos de la misma longitud, utiliza
// la función map para combinar elementos de ambos arreglos
// y devolver un nuevo arreglo combinado.

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];

let combinados = arr1.map((valor, indice) => {
  return valor + arr2[indice];
});

console.log(arr1);
console.log(arr2);
console.log(combinados);
