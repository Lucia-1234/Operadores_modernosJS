function crearEstudiante(nombre, ...notas) {
  try {

    if (typeof notas[0] !== 'number') {
      throw "La primera nota debe ser un número";
    }

    const [primeraNota, ...restoNotas] = notas;

    const totalNotas = notas.length;
    const cantidadResto = restoNotas.length;
    
   // const sumaResto = notas.slice(1).join('+'); 

    const sumaTotal = notas[0] + (notas[1] || 0) + (notas[2] || 0) + (notas[3] || 0); 
    const promedioResto = (sumaTotal - primeraNota) / (cantidadResto || 1);

    return {
      nombre: nombre,
      primeraNota: primeraNota,
      promedioResto: promedioResto,
      totalNotas: totalNotas
    };

  } catch (error) {
    return "Error detectado: " + error;
  }
}

console.log(crearEstudiante("Ana", 10, 8, 6));