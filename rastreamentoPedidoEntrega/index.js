import { monitorarPedidos } from './jobs/agendadorPedidos.js';

monitorarPedidos()
  .then(() => console.log('🔁 Monitoramento finalizado'))
  .catch(err => console.error('❌ Erro no monitoramento:', err));
