import { chromium } from 'playwright';
import { CONFIG } from '../config.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATE_PATH = join(__dirname, '..', '..', 'data', 'auth-state.json');

console.log('🔐 Login manual no AI Wordfinder\n');
console.log('1. Vou abrir o navegador');
console.log('2. Faça login com as credenciais da Karina');
console.log('3. Resolva qualquer CAPTCHA/2FA');
console.log('4. Quando estiver logado no dashboard, volte aqui e pressione ENTER\n');

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
const page = await context.newPage();

await page.goto(CONFIG.aiwf.url);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
await new Promise(r => rl.question('Pressione ENTER depois de logar > ', () => { rl.close(); r(); }));

await context.storageState({ path: STATE_PATH });
console.log(`\n✅ Sessão salva em ${STATE_PATH}`);
console.log('Agora rode `npm start` pra iniciar o agente.');

await browser.close();
