const inventario = ["Cámara", "Trípode", "Micrófono"];

function agregarInventario(lista, nuevoItem) {
    const nuevaLista = [...lista, nuevoItem];

    console.log(`El inventario actual tiene ${nuevaLista.length} ítems.`);

    return nuevaLista;

}

const inventarioActualizado = agregarInventario(inventario, "luces");

console.log("Inventario original:", inventario);
console.log("Inventario actualizado:", inventarioActualizado);
