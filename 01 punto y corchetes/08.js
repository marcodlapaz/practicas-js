// Ejemplo 8: Acceder a una propiedad de un objeto dentro de un arreglo con nombre dinámico

// Crea un arreglo llamado productos que contiene 
// objetos de productos. Cada objeto tiene una 
// propiedad cuyo nombre es el código del producto, 
// por ejemplo, "P001". Luego, crea una variable llamada
// codigo que contiene el código del producto que deseas 
// acceder y muestra el nombre de ese producto utilizando 
// notación de corchetes.

let productos = [
  {
    P001: { nombre: "Laptop" },
  },
  {
    P002: { nombre: "PC" },
  },
  {
    P003: { nombre: "Monitor" },
  },
];

let codigo = "P002";

for (let producto of productos) {
    console.log(codigo);
    if (producto[codigo] === codigo) {
        console.log("Entra");
        console.log(producto["codigo"]["nombre"]);
    }
}

