// Ejemplo 4: Encontrar el elemento más grande en un arreglo de números.

// Crea un arreglo de números y utiliza el método forEach para encontrar
// el elemento más grande y mostrarlo en la consola.

let numeros = [1, 2, 6, 4, 3];
let masGrande = 0;

numeros.forEach((numero) => {
  if (numero > masGrande) {
    masGrande = numero;
  }
});

console.log(masGrande);
