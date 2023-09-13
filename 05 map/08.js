// Ejemplo 8: Generar un nuevo objeto a partir de un arreglo.

// Dado un arreglo de objetos con propiedades, utiliza la
// función map para crear un nuevo arreglo de objetos con
// propiedades modificadas.

let objetos = [
  {
    nombre: "Marco",
    edad: 23,
  },
  {
    nombre: "Antonio",
    edad: 32,
  },
];

let arregloDeObjetos = objetos.map((obj) => {
  return { nombre: obj.nombre, edad: obj.edad + 2 };
});

console.log(arregloDeObjetos);
