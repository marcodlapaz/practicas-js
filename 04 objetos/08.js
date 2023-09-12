// Ejemplo 8: Copiar objetos.

// Crea un objeto producto con propiedades como
// nombre y precio. Luego, crea una copia del objeto
// original y muestra ambas versiones en la consola.

let producto = {
  nombre: "Leche",
  precio: 10,
};

// let copiaProducto = producto;
let copiaProducto = Object.assign([], producto);

console.log(producto);
console.log(copiaProducto);
