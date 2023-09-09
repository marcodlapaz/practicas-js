const persona = { nombre: "Juan", edad: 30 };

for (let clave in persona) {
  console.log(clave); // Imprime "nombre" y "edad"
  console.log(persona[clave]); // Imprime "Juan" y 30
}
