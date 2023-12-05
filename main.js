const Producto = function (nombre,precio,stock){
    this.nombre=nombre
    this.precio=precio
    this.stock=stock
}
let producto1 = new Producto ("pollera corta",16000,6)
let producto2 = new Producto ("camisa",12000,9)
let producto3 = new Producto ("musculosa lisa",9200,12)
let producto4 = new Producto ("pantalon",17000,8)
let producto5 = new Producto ("pollera larga",16900,5)
let producto6 = new Producto ("musculosaa estampada",9500,10)

let lista=[producto1,producto2,producto3,producto4,producto5,producto6]

if (localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista=lista
}

function filtrarProductos(){
    const body = document.querySelector("body")
    const  input = document.getElementById("filtrar").value
    const palabraClave = input.trim().toLowerCase()
    const resultado = lista.filter((producto)=>producto.nombre.toLowerCase().includes(palabraClave))

    if (resultado.length>0){

        const container = document.createElement("div")
        container.classList.add("container")

        resultado.forEach((producto)=>{
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = producto.nombre
        card.appendChild(nombre)

        const precio = document.createElement("p")
        precio.textContent = `tiene un valor de $ ${producto.precio}`
        card.appendChild(precio)

        const stock = document.createElement("p")
        stock.textContent = `quedan en stock: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)


        } )
        body.appendChild(container)
    }else{
        alert("no se encotró el producto "+palabraClave)
    }
    localStorage.setItem("productos", JSON.stringify(lista))
}


const boton = document.getElementById("boton")
boton.classList.add("button")
boton.addEventListener("click",filtrarProductos)