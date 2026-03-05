let productos = ["teclado", "mouse", "pantalla "];

function agregarProductos(lista, nuevosProductos, productosCopia) {
 let  nuevaLista = [...lista, ...nuevosProductos];
 return nuevaLista;

}

let nuevoProducto = "impresora";
let nueevalista = agregarProductos(productos, nuevoProducto);


console.log(productos);
console.log(nueevalista);