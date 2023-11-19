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

function filtrarProductos(){
    let palabraClave= prompt("ingrese el producto que desea buscar").toLowerCase()
    let resultado = lista.filter((x)=>x.nombre.toLowerCase().inculdes(palabraClave))
    if (resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontró el producto "+ palabraClave)
    }
}

filtrarProductos()