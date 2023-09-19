// Seleccionar los elementos del DOM
const color = document.getElementById("color");
const boton = document.querySelector("button");

function generarColorAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indice = Math.floor(Math.random() * 16);
    colorHex += digitos[indice];
  }

  return colorHex;
}

boton.addEventListener("click", function () {
  let colorAleatorio = generarColorAleatorio();
  // Actualizar el texto
  color.innerText = colorAleatorio;
  // Actualizar el color de body
  document.body.style.backgroundColor = colorAleatorio;
});
