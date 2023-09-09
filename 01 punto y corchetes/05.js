// Ejemplo 5: Acceder a una propiedad anidada

// Crea un objeto llamado casa que tiene una propiedad 
// direccion que a su vez contiene propiedades calle y 
// numero. Luego, muestra el número de la casa utilizando 
// notación de punto y notación de corchetes.

let casa = {
  direccion: {
    calle: "Los Sauces",
    numero: 60,
  },
};

// Usando punto
console.log(casa.direccion.numero);

// Usando corchetes
console.log(casa["direccion"]["numero"]);