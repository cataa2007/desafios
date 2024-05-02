alert ("Bienvenido a nuestro sitio web!")

let nombreProducto = "sanguchitos"
let precioUnitario = "1000"

let cantidadDeseada = prompt (`Ingresa la cantidad de ${nombreProducto} que desea comprar:`)

function totalGastado (precioUnitario, cantidadDeseada) {
    resultado = precioUnitario * cantidadDeseada
    console.log(`El total gastado en el producto es $${resultado}`)
}

totalGastado(precioUnitario,cantidadDeseada)