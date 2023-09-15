// Ejemplo 4: Renombrar propiedades.

// Dado un objeto producto con propiedades como nombre
// y precio, utiliza la destructuración de objetos para
// extraer estas propiedades y renombrarlas mientras las
// extraes

let producto = {
  nombre: "Laptop",
  precio: 400,
};

let { nombre: nombre_producto, precio: precio_producto } = producto;

console.log(`Nombre: ${nombre_producto}`);
console.log(`Precio: ${precio_producto}`);
