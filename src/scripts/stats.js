import { getStats } from '../db.js';

const s = getStats();
console.log('📊 Estatísticas do Job Agent\n');
console.log(`Total vistas:     ${s.total_seen}`);
console.log(`Aplicadas:        ${s.applied}`);
console.log(`Pendentes:        ${s.pending}`);
console.log(`Puladas:          ${s.skipped}`);
console.log(`Rejeitadas auto:  ${s.rejected}`);
console.log(`Match médio:      ${s.avg_match?.toFixed(2) || 'N/A'}`);
