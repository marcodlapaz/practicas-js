// let productos = [{ name: 'TV LCD', price: 100 }, { name: 'Computadora', price: 500 }]
// productos.pluck(productos, 'name') -> ['TV LCD', 'Computadora']

function pluck(array, propiedad) {
    let valores = array.map(elemento => {
        return elemento[propiedad];
    })

    return valores
}

let productos = [{ name: 'TV LCD', price: 100 }, { name: 'Computadora', price: 500 }]
console.log(pluck(productos, 'name'));