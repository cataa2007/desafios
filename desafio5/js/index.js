const productos = ["Remera", "Zapatillas", "Campera", "Medias", "Pantalon"]

console.log(productos.length)
for (let i=0; i < productos.length; i++) {
console.log ("Producto" + (i + 1)+ ":"+productos [i]);
}

productos.pop()
console.log ("________")
console.log("nuevo stock despues de la venta:")

for(let i=0; i < productos.length; i++) {
  console.log ("Producto" + (i + 1)+ ":"+productos [i] );
}

