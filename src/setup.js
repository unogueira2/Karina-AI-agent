import { mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initDB } from './db.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🔧 Setup do Karina Job Agent\n');

// Cria pasta data/
const dataDir = join(__dirname, '..', 'data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
  console.log('✅ Pasta data/ criada');
}

// Inicializa DB
initDB();
console.log('✅ Banco SQLite criado em data/jobs.db');

// Checa .env
import 'dotenv/config';
const required = [
  'ANTHROPIC_API_KEY',
  'AIWF_EMAIL',
  'AIWF_PASSWORD',
  'TELEGRAM_BOT_TOKEN',
  'TELEGRAM_CHAT_ID',
];
const missing = required.filter(k => !process.env[k] || process.env[k].includes('...'));
if (missing.length) {
  console.log(`\n⚠️  Faltam variáveis no .env:\n   ${missing.join('\n   ')}\n`);
  console.log('Edite o arquivo .env e rode novamente.');
  process.exit(1);
}

console.log('✅ Todas variáveis de ambiente OK\n');

console.log('📝 Próximos passos:');
console.log('   1. Rode `npm run login` pra logar no AI Wordfinder (salva sessão)');
console.log('   2. Rode `npm start` pra iniciar o agente');
console.log('   3. Cheque seu Telegram — você vai receber as vagas qualificadas');
