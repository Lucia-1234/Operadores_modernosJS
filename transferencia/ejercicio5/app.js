import { esObjeto } from "../../helpers/validaciones.js"

const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };


const configFinal = (...configs) => {

    try {
        // Usamos reduce para fusionar solo los objetos que cumplen la condicion
        const resultado = configs.reduce((acumulador, current) => {
            if (!esObjeto(current)) {
                // Si no es objeto, lanzamos un error 
                throw new Error(`Dato invalido detectado: ${current}`);
            }
            return { ...acumulador, ...current };
        });

        // Retornamos el resultado añadiendo la propiedad de validación
        return { ...resultado, validacion: true };

    } catch (error) {
        console.error("Error en la configuración:", error.message);
        // Si algo falla, devolvemos un objeto marcado con validacion: false
        return { validacion: false, error: error.message };
    }
};

const config = configFinal(baseConfig, extraConfig);
console.log(config);

// Ejemplo de error:
console.log(configFinal(baseConfig, "esto no es un objeto"));