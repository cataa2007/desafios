const productos = ["Remera", "Zapatillas", "Campera", "Medias", "Pantalon"]

for (let prod of productos) {
    let h2 = document.createElement ("h2");
    h2.innerHTML = `<p>Nombre: <span style="color: red"> ${prod}</span> </p>`
    document.body.appendChild(h2)
}
console.dir(document)

