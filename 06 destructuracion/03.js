// Ejemplo 3: Valores predeterminados.

// Dado un objeto usuario con propiedades
// como nombre y correo electrónico, utiliza
// la destructuración de objetos para extraer
// estas propiedades y asignar valores predeterminados
// en caso de que falten.

let usuario = {
  nombre: "Marco",
};

let { nombre, correo = "sinCorreo@correo.com" } = usuario;

console.log(`Nombre: ${nombre} Correo: ${correo}`);
