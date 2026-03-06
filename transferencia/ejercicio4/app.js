import { esObjeto } from "../../helpers/validaciones.js";

const jugadores = [
{ nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },

{ nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },


];




const estadisticas = (jugadores) => {

    try {
        jugadores.forEach(jugador => {
            if (!esObjeto(jugador)){
                throw new Error("Un elemento del array no es un objeto")
            }
            
            if (!jugador.stats || !jugador.nombre){
                throw new Error("Faltan elementos en el objeto")
            }
        })
        // puntos del primer jugador
        const [{stats: {puntos: puntosPrimer}}] = jugadores;
    
    
        // para obtener las sumas
        let totalPuntos = jugadores.reduce((acumulador,jugador) => acumulador + jugador.stats.puntos, 0);
 
    
        return {
            puntosPrimerJugador: puntosPrimer,
            total: totalPuntos,
            lista: [...jugadores]
        }
    } catch(error) {
        console.error(error.message)
    }



}


console.log(estadisticas(jugadores))