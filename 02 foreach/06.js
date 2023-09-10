// Ejemplo 6: Iterar sobre un arreglo de objetos y mostrar propiedades.

// Crea un arreglo de objetos con propiedades nombre y edad. Utiliza el
// método forEach para mostrar el nombre y la edad de cada objeto en la
// consola.

let personas = [
  {
    nombre: "Marco",
    edad: 32,
  },
  {
    nombre: "Antonio",
    edad: 33,
  },
];

personas.forEach((persona) => {
  console.log(persona.nombre);
  console.log(persona.edad);
});
