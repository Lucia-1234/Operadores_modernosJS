// Crear destrucutracion anidada para obtener precios y unidades del primer producto
// Retornar total vendido (Precio * unidades)

const ventas = [
{ producto: "teclado", detalles: { precio: 50, unidades: 3 } },
{ producto: "mouse", detalles: { precio: 20, unidades: 5 } }
];

// este es el precio del primer producto
const [  {detalles: { precio }} ] = ventas;

console.log(precio)