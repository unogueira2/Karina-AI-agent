# QUICK START — Em 10 minutos

## 1. Abrir Claude Code no seu terminal

```bash
cd ~/
unzip job-agent.zip
cd job-agent
claude
```

## 2. Dentro do Claude Code, colar isso:

```
Instale as dependências do projeto. Rode:
npm install
npx playwright install chromium
```

## 3. Configurar credenciais

```bash
cp .env.example .env
```

Edite `.env` e preencha:
- `ANTHROPIC_API_KEY` → já tem (console.anthropic.com)
- `AIWF_EMAIL` → email da Karina
- `AIWF_PASSWORD` → senha dela
- `TELEGRAM_BOT_TOKEN` → veja `TELEGRAM_SETUP.md`
- `TELEGRAM_CHAT_ID` → veja `TELEGRAM_SETUP.md`

## 4. Testar o cérebro do agente

Antes de ligar no AI Wordfinder, teste se o evaluator tá funcionando:

```bash
npm run test-match
```

Esse comando roda 3 vagas fake pelo Claude e mostra o score + cover letter. Se os scores estiverem razoáveis e as cover letters bem escritas, o cérebro tá OK.

## 5. Ajustar seletores do AI Wordfinder

Esse passo é o único manual porque eu não tenho acesso ao site deles pra mapear os seletores reais.

```bash
npm run login
```

Isso abre o Chrome, você loga no AI Wordfinder normalmente. A sessão fica salva.

Depois, navegue pelas vagas e abra DevTools (F12). Me copie:
1. O HTML de **um card de vaga** na listagem
2. O HTML do **botão de Apply** numa vaga aberta
3. O HTML do **textarea de cover letter** no form de aplicação

Cola tudo aqui e eu ajusto `scraper.js` e `applicator.js` pra funcionar com os seletores reais.

## 6. Ligar o agente

```bash
npm start
```

Pronto. A cada 30 min o agente:
1. Varre vagas novas
2. Avalia com Claude
3. Gera cover letter pras qualificadas
4. Te manda no Telegram com [Aplicar] [Editar] [Pular]
5. Você clica — ele aplica sozinho

## Monitoramento

```bash
npm run stats   # ver estatísticas
```

Todo dia às 20h você recebe um relatório automático no Telegram.

## Custo estimado

- Claude Haiku (evaluator): ~$0.005 por vaga
- Claude Opus (cover letter): ~$0.02 por cover letter
- Rodando 30min, horário comercial, ~50 vagas/dia

**Custo mensal estimado: $5-15** em API Anthropic.

## Troubleshooting

**"Sessão expirada"** → Rode `npm run login` de novo
**"Nenhuma vaga encontrada"** → Seletores do scraper precisam ajuste
**"Falha ao aplicar"** → Seletores do applicator precisam ajuste
**"Bot não responde"** → Verifique TELEGRAM_BOT_TOKEN no .env
