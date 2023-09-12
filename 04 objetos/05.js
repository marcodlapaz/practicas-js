// Ejemplo 5: Iterar sobre las propiedades de un objeto.

// Crea un objeto persona con propiedades como nombre,
// edad y género. Luego, utiliza un bucle for...in para
// iterar sobre las propiedades y mostrarlas en la consola.

let persona = {
  nombre: "Marco",
  edad: 32,
  genero: "masculino",
};

for (let propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}
