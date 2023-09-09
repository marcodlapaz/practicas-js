// Ejemplo 2: Acceder a una propiedad por nombre dinámico

// Crea un objeto llamado producto con las propiedades
// nombre, precio y descuento. Luego, crea una variable 
// llamada propiedad que contiene el nombre de la propiedad 
// que deseas acceder dinámicamente (por ejemplo, "precio" o "descuento")
// y muestra el valor de esa propiedad utilizando notación de corchetes.

let producto = {
  nombre: "TV",
  precio: 1000,
  descuento: 100,
};

let propiedad = "descuento";

console.log(producto[propiedad]);
