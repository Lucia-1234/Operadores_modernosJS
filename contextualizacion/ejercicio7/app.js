/* 7. Evaluación de datos con try...catch + spread
Escribe una función evaluar(...valores) que:
• Reciba varios números mediante rest.
• Use un try...catch para verificar que todos sean numéricos.
• Si encuentra un valor no numérico, captura el error y muestra un mensaje adecuado.
• Si todo es válido, crea una nueva lista (sin mutar la original) y retorna el promedio. */

import promptSync from "prompt-sync";
const prompt = promptSync();

const pedirNumeros = (cantidadNumeros) => {
  let numeros=[];
  console.log(`Se solicitaran ${cantidadNumeros} numeros.`);
  
  for (let i = 1; i <= cantidadNumeros; i++){
    let numero = prompt(`${i}. Ingrese un numero: `);
    numeros.push(numero);
  }

  return numeros;
}

let cantidad = 4;

const numeros = pedirNumeros(cantidad);

const evaluar =(...varios)=>{
  try {
    let numerosPromedio=[];
    for (const valor of varios) {
      if(isNaN(valor)){
        throw new Error(`El dato: ${valor} no es numerico`);
      }
      else{
        numerosPromedio.push(valor);
      }
    }
    if (varios.length == numerosPromedio.length){
      let acumulador=0;
      for (const numero of numerosPromedio) {
        acumulador += parseInt(numero);
      }
      return `El promedio de los numeros es: ${acumulador/numerosPromedio.length}`;
    }
  } catch (error) {
    return error.message;
  }
}

console.log(evaluar(...numeros));

