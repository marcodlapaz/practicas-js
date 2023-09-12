// Ejemplo 7: Crear objetos con métodos.

// Crea un objeto rectangulo con propiedades de
// longitud y ancho. Agrega un método para calcular
// el área del rectángulo.

let rectangulo = {
  longitud: 10,
  ancho: 6,

  calcularArea() {
    return this.longitud * this.ancho;
  },
};

console.log(rectangulo.calcularArea());
