/* 8. Fusión de colecciones y validación final
Crea una función fusionarColecciones(lista1, lista2) que:
• Use spread para fusionar las dos listas sin mutarlas.
• Valide dentro de un try...catch que ambas listas sean arreglos.
• Si no lo son, lanza un error personalizado.
• Retorna la colección final.*/

const fusionarColecciones=(lista1, lista2)=>{
  try {

    if (!Array.isArray(lista1) && !Array.isArray(lista2)) {
      throw new Error("Una de las listas no es un arreglo");
    }
    else{
      return [...lista1, ...lista2];
    }
  } catch (error) {
    return error.message;
  }
}

const lista1 = [2,4,2,6,5];
const lista2 = ["manzana", "pera", "naranja", "uva"];


console.log(fusionarColecciones(lista1, lista2));