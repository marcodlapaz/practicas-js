function numeroSimetrico(num) {
  let cadenaOriginal = num.toString();
  let cadenaInvertida = cadenaOriginal.split("").reverse().join("");

  return cadenaOriginal === cadenaInvertida;
}

console.log(numeroSimetrico(121));
