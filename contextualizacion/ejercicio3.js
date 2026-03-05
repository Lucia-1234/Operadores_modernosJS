
function mostrarDireccion(direccion) {
  try {
    const { ciudad, pais, departamento } = direccion;
    if (!departamento){
      console.log(departamento);
      throw new Error("La información de la dirección no es válida"); 
    }
    console.log(`Ciudad: ${ciudad}, País: ${pais}, departamento: ${departamento}`);
  }
  catch (error) {
    console.error(error.message);
  }
}
console.log("Fin del programa")
mostrarDireccion({ ciudad: "Bogotá", pais: "Colombia" });


