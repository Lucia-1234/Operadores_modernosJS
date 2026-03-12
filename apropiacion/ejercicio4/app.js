// Mezcla de configuraciones spread o personalizadas

const defaults = {tema: "claro", idioma: "es"}

// Otro objeto que contiene configs "personalizadas" distintas a las de arriba
const custom = {
    zoom: 150,
    fuente: "comic sans",
};

// Este objeto contiene la mezcla entre defaults y custom

const configurarUsuario = (defaults,custom) => {

    const mezcla = {...defaults, ...custom}

    const {idioma} = mezcla;

    return idioma

}

console.log(configurarUsuario(defaults,custom))

