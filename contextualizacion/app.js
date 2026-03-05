// function saludarPersona(...personas) {
// console.log(typeof personas);
//   try{
//     for (let i = 0; i < personas.length; i++) {
//         let nombre = personas[i];
//         if (nombre.charAt(0).toLowerCase() == "L"){
//           break
//         }
//       console.log(`Hola: ${nombre}`);
//       }
//   }
// catch(error){
//   console.error(error.message);
  
// }

// personas.push("Juan", "Pedro", "Luis", "Maria", "Ana");
//  

let nombre = ["Juan", "Pedro", "Luis", "Maria", "Ana"];

let apellidos = [...nombre];

apellidos.push("Becerra");
apellidos.push("Gomez");

console.log(apellidos);
console.log(nombre);