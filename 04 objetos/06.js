// Ejemplo 6: Crear objetos anidados.

// Crea un objeto cliente con propiedades como
// nombre y dirección. Luego, agrega un objeto
// anidado "pedido" con sus propias propiedades.

let cliente = {
  nombre: "Marco",
  direccion: "Villa Salomé",
};

cliente.pedido = {
  tipo: "comida",
  precio: 15.5,
};

console.log(cliente);
