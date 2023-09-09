// Ejemplo 10: Acceder a propiedades de un objeto anidado dentro de un arreglo

// Crea un arreglo llamado empleados que contiene objetos de 
// empleados. Cada objeto tiene una propiedad datos que es un 
// objeto con propiedades nombre y edad. Luego, crea una variable 
// llamada indice que contiene el índice del empleado que deseas 
// acceder y muestra el nombre y la edad de ese empleado utilizando 
// notación de corchetes.

let empleados = [
  {
    datos: {
      nombre: "Marco",
      edad: 32,
    },
  },
  {
    datos: {
      nombre: "Antonio",
      edad: 33,
    },
  },
];

let indice = 1;

console.log(empleados[indice]["datos"]["nombre"]);
console.log(empleados[indice]["datos"]["edad"]);
