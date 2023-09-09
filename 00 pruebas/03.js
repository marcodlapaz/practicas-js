// let amigos = [{ nombre: 'Tomi', edad: 33 }, { nombre: 'Emi', edad: 25 }]
// buscarAmigo(amigos, "Tomi") -> { nombre: 'Tomi', edad: 33 }

function buscarAmigo(amigos, nombre) {
  let amigo = {};

  for (let i = 0; i < amigos.length; i++) {
    if (nombre === amigos[i].nombre) {
      amigo = amigos[i];
    }
  }

  return amigo;
}

let amigos = [{ nombre: 'Tomi', edad: 33 }, { nombre: 'Emi', edad: 25 }]
console.log(buscarAmigo(amigos, 'Emi'));
