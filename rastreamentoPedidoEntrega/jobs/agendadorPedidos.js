import { buscarPedidosEmRota } from '../services/tinyService.js';
import { enviarNotificacao } from '../services/whatsAppService.js';
import { gerarMensagem } from '../utils/formatadorMensagem.js';

export async function monitorarPedidos() {
  const pedidos = await buscarPedidosEmRota();

  for (const pedido of pedidos) {
    const mensagem = gerarMensagem(pedido);
    await enviarNotificacao(pedido.cliente.telefone, mensagem);
    console.log(`✅ Notificação enviada para pedido ${pedido.numero}`);
  }
}
