/* 3. Procesamiento de compras
Requerimiento:
Implementa una función procesarCompra(cliente, productos) donde:
• cliente es un objeto con {nombre, correo}.
• productos es una lista de objetos con {nombre, precio}.
La función debe:
1. Validar con try...catch que el cliente tenga los dos datos y que los productos sean
válidos.
2. Utilizar spread para crear un nuevo objeto con toda la información del cliente.
3. Usar destructuración para separar el primer producto comprado del resto.
4. Retornar un informe con:
o Total de productos
o Precio total
o Primer producto adquirido

Resultado esperado:
Un informe completo y coherente, construido con técnicas de inmutabilidad y manejo
seguro de errores.
 */
const procesarCompra=(cliente, productos)=>{
  try {
    if (!cliente.nombre && !cliente.correo) {
      throw new Error("El cliente debe tener nombre y correo");
    }
    let valorTotal=0;
    if (productos.length == 0) {
      throw new Error("La lista de productos no puede estar vacia");
    }

    else{
      for (const producto of productos) {
        if (!producto.nombre && !producto.precio) {
          throw new Error("El producto debe tener nombre y precio");
        }
        else valorTotal += producto.precio;
      }
    }
    
    const[primero,...resto]=productos;
    return `Total de productos: ${productos.length},
    Precio total: ${valorTotal},
    Primer producto Adquirido: nombre= ${primero.nombre}, precio= ${primero.precio}`
  } catch (error) {
    return error.message;
  }
}
const cliente={nombre: "Sol", correo: "valentinaserrano120@gmail.com"};
const productos=[{nombre: "arroz", precio: 20000},
                {nombre: "maiz", precio: 50000},
                {nombre: "pasta", precio: 3000},
]

console.log(procesarCompra(cliente,productos));

//El punto 2 es redundante