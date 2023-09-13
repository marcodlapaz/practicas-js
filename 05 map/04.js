// Ejemplo 4: Obtener longitudes de cadenas.

// Dado un arreglo de cadenas, utiliza la función map
// para obtener la longitud de cada cadena y devolver un
// nuevo arreglo.

let palabras = ["hola", "mundo"];

let longitudes = palabras.map((palabra) => {
  return palabra.length;
});

console.log(palabras);
console.log(longitudes);
