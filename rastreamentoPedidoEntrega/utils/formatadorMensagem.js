export function gerarMensagem(pedido) {
  return `Olá, ${pedido.cliente.nome}! 👋 Seu pedido #${pedido.numero} já está em rota de entrega. 🚚 Acompanhe aqui: ${pedido.linkRastreamento || 'link indisponível'}`;
}
