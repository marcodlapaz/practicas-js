const toppings = document.getElementsByClassName("topping");

for (const topping of toppings) {
  topping.addEventListener("click", mostrarClic);
}

function mostrarClic(e) {
    console.log(e.target.innerText);
}
