/* 2. Fusión de catálogos digitales
Requerimiento:
Tienes dos catálogos:
const catalogoA = [
{ id: 1, nombre: "Curso JavaScript", precio: 40 },
{ id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
{ id: 3, nombre: "Curso CSS", precio: 30 }
];
Crea una función fusionarCatalogos(a, b) que:
1. Use try...catch para validar que ambos parámetros sean arreglos.
2. Utilice spread para fusionarlos sin modificar los originales.
3. Retorne un nuevo catálogo ordenado por precio ascendente.
Resultado esperado:
Una nueva colección combinada, ordenada e inmutable. Si un parámetro no es un arreglo,
debe mostrarse un error comprensible.
 */
const fusionarCatalogos=(catalogo1, catalogo2)=>{
  try {

    if (!Array.isArray(catalogo1) && !Array.isArray(catalogo2)) {
      throw new Error("Una de las listas no es un arreglo");
    }
    else{

      const nuevoArreglo=[...catalogo1,...catalogo2]
      for (let i = 0; i < nuevoArreglo.length; i++) {
        for (let x= 0; x< nuevoArreglo.length - i - 1; x++) {
          if (nuevoArreglo[x].precio > nuevoArreglo[x + 1].precio) {
            let mayor = nuevoArreglo[x];
            nuevoArreglo[x] = nuevoArreglo[x+1];
            nuevoArreglo[x + 1] = mayor;
          }
        }
      }
      return nuevoArreglo;
    }
  } catch (error) {
    return error.message;
  }
}

const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 }
];
const catalogoB = [
  { id: 3, nombre: "Curso CSS", precio: 30 }
];

console.log(fusionarCatalogos(catalogoA, catalogoB));