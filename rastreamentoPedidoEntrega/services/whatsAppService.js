import axios from 'axios';
import { WHATSAPP_API_URL, WHATSAPP_TOKEN } from '../config/constantes.js';

export async function enviarNotificacao(numero, mensagem) {
  return axios.post(`${WHATSAPP_API_URL}/enviar`, {
    numero,
    mensagem
  }, {
    headers: {
      Authorization: `Bearer ${WHATSAPP_TOKEN}`
    }
  });
}
