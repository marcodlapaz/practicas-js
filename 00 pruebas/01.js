// EJERCICIO 1
function soloNumeros(array) {
  let enteros = [];

  array.forEach(element => {
    if (typeof element === "number") {
      enteros.push(element);
    }
  });

  return enteros;
}

// console.log(soloNumeros([1, "Henry", 2,]));
