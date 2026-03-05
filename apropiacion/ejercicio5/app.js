// perfil por defecto al que se le añadirán nombres
const perfil = {
    nombre: "dylan",
}

// funcion para actualizar datos. Params: perfil del usuario y los nuevos datos que se agregarán (Objetos parciales)

const actualizarPerfil = (perfil, ...datosNuevos) => {

    // Con ayuda de Object.assign(), metemos el perfil ya hecho y los nuevos datos dentro de un objeto
    const perfilNuevo = Object.assign({},perfil,...datosNuevos);

    return perfilNuevo;
}

const apellido = {apellido: "vesga"};
const edad = {edad: 19};

const nuevoPerfil = actualizarPerfil(perfil,apellido,edad);

console.log(nuevoPerfil)