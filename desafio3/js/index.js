alert ("Bienvenido a nuestro sitio web!")

let nombreProducto = "sanguchitos"
let precioUnitario = "1000"

let cantidadDeseada = prompt (`Ingresa la cantidad de ${nombreProducto} que desea comprar:`)

precioFinalSinDescuento = precioUnitario * cantidadDeseada

if(cantidadDeseada >= 5) {
   
    precioFinalSinDescuento = precioFinalSinDescuento - precioFinalSinDescuento * 0.1 
}


alert(`el total de su compra de ${cantidadDeseada} ${nombreProducto} es de $${precioFinalSinDescuento} `)