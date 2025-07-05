import axios from 'axios';
import { TINY_API_URL, TINY_API_TOKEN } from '../config/constantes.js';

export async function buscarPedidosEmRota() {
  const { data } = await axios.get(`${TINY_API_URL}/pedidos.json`, {
    params: {
      token: TINY_API_TOKEN,
      filtro: 'status:Em rota de entrega'
    }
  });

  const pedidos = data.retorno.pedidos || [];
  return pedidos.map(p => p.pedido);
}
