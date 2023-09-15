// Ejemplo 2: Destructurar propiedades anidadas.

// Dado un objeto cliente con propiedades como nombre,
// dirección y un objeto anidado "pedido" con propiedades,
// utiliza la destructuración de objetos para extraer y mostrar
// información del cliente y su pedido.

let cliente = {
  nombre: "Marco",
  direccion: "Villa Salomé",
  pedido: {
    precio: 10.5,
    cantidad: 2,
  },
};

let { nombre, direccion, pedido } = cliente;

console.log("Nombre: " + nombre);
console.log("Dirección: " + direccion);
console.log("Detalles del pedido: ");
console.log("- Precio: " + pedido.precio);
console.log("- Cantidad: " + pedido.cantidad);
