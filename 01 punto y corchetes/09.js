// Ejemplo 9: Eliminar una propiedad de un objeto

// Crea un objeto llamado persona con varias propiedades,
// incluida una propiedad llamada email. Luego, elimina la 
// propiedad email del objeto utilizando notación de punto
// y notación de corchetes.

let persona = {
  nombre: "Marco Antonio",
  apellido: "Valencia",
  email: "marco@gmail.com",
};

// Eliminando con notación de punto
// delete persona.email;
// console.log(persona);

// Eliminando con notación de corchetes
delete persona["email"];
console.log(persona);
