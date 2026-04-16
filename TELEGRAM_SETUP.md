# Setup do Telegram Bot (3 minutos)

## 1. Criar bot

1. Abra o Telegram e procure por `@BotFather`
2. Envie `/newbot`
3. Dê um nome: `Karina Job Agent` (ou o que preferir)
4. Dê um username: `karina_jobs_bot` (tem que terminar em `_bot`)
5. BotFather te envia um **token** — copie ele.

## 2. Pegar seu Chat ID

1. No Telegram, procure o bot que você acabou de criar
2. Mande `/start` pra ele (só pra ativar)
3. Agora abra este link no navegador:
   ```
   https://api.telegram.org/bot<SEU_TOKEN>/getUpdates
   ```
   Substituindo `<SEU_TOKEN>` pelo token do BotFather.
4. Você vai ver um JSON. Procure por `"chat":{"id":NUMERO` — o `NUMERO` é seu Chat ID.

## 3. Colocar no .env

```bash
TELEGRAM_BOT_TOKEN=1234567:ABC-DEF...
TELEGRAM_CHAT_ID=123456789
```

## 4. Testar

Rode:
```bash
npm run setup
```

Se tudo ok, vai validar as credenciais. Depois `npm start` e você recebe a primeira notificação.

## Formato da notificação

```
🎯 AI Automation Expert - Build Agent Pipeline

💵 $150/hr | 📊 Match: 9/10 | 🏷 ai_automation

📝 Por quê: Perfect match - Anthropic Claude API automation
with long-term retainer structure matching target rate.

✍️ Cover letter:
[texto da cover letter]

🔗 Ver vaga

[✅ Aplicar] [✏️ Editar] [⏭️ Pular]
```

Você clica em um dos botões → agente executa.
