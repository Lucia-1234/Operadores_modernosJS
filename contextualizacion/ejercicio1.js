function registrarUsuarios({nombre, edad}, ...usuarios) {
    console.log(`Usuario principal: ${nombre}, Edad: ${edad} n\- usuarios adicionales registrados: ${usuarios.length}`);
}

registrarUsuarios({nombre: "Juan", edad: 25}, 
  {nombre: "Pedro", edad: 30}, 
  {nombre: "Luis", edad: 28});