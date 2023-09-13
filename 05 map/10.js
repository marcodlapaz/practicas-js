// Ejemplo 10: Redondear números decimales.

// Dado un arreglo de números decimales, utiliza
// la función map para redondear cada número al entero
// más cercano y devolver un nuevo arreglo.

let decimales = [1.2, 5.6, 10.5];

let redondeados = decimales.map((decimal) => {
  return Math.round(decimal);
});

console.log(redondeados);
