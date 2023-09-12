// Ejemplo 4: Eliminar propiedades de un objeto.

// Crea un objeto fruta con propiedades como
// nombre y color. Luego, elimina la propiedad "color"
// y muestra el objeto resultante en la consola.

let fruta = {
  nombre: "Manzana",
  color: "verde",
};

console.log(fruta);
delete fruta.color;

console.log(fruta);
