function procesarPedido(pedido, ...extras){
    const {cliente, producto, cantidad}=pedido;

  return {
    cliente,
    producto,
    cantidad,
    extras
  };
}

const pedido = { cliente: "Lucia", producto: "Laptop", cantidad: 2 };
const resultado = procesarPedido(pedido, "Garantía extendida", "Envío express", "Seguro contra daños");

console.log(resultado);

