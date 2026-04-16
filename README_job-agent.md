# Karina Job Agent — AI Wordfinder Automation

Agente autônomo que monitora vagas, filtra por match, gera cover letter personalizada, e te manda no Telegram com botão de aprovar em 1-clique.

## Arquitetura

```
┌─────────────────────────────────────────────────┐
│  Cron: roda a cada 30min (horário comercial US) │
└──────────────────┬──────────────────────────────┘
                   ▼
       ┌──────────────────────┐
       │  1. Playwright login  │
       │     AI Wordfinder     │
       └──────────┬───────────┘
                  ▼
       ┌──────────────────────┐
       │  2. Scrape vagas     │
       │     novas (24h)      │
       └──────────┬───────────┘
                  ▼
       ┌──────────────────────┐
       │  3. Claude avalia    │
       │     match (0-10)     │
       │     + categoria      │
       └──────────┬───────────┘
                  ▼
        match ≥ 7 ? ─── não ──► descarta, log
                  │
                  sim
                  ▼
       ┌──────────────────────┐
       │  4. Gera cover       │
       │     letter custom    │
       └──────────┬───────────┘
                  ▼
       ┌──────────────────────┐
       │  5. Telegram bot:    │
       │     envia card com   │
       │     [Aplicar] [Skip] │
       └──────────┬───────────┘
                  ▼
            Você clica
                  │
                  ▼
       ┌──────────────────────┐
       │  6. Playwright abre  │
       │     vaga, cola cover,│
       │     submete          │
       └──────────┬───────────┘
                  ▼
       ┌──────────────────────┐
       │  7. Log em           │
       │     SQLite + status  │
       └──────────────────────┘
```

## Stack

- **Node.js 20+** (Playwright e Telegram bot)
- **Playwright** — automação do browser
- **Anthropic SDK** — Claude avalia e escreve cover letter
- **node-telegram-bot-api** — notificações e aprovação 1-clique
- **better-sqlite3** — log local de aplicações
- **node-cron** — scheduler

## Setup rápido

```bash
cd job-agent
npm install
cp .env.example .env
# edite .env com suas chaves
npm run setup     # cria DB + loga no AI Wordfinder 1x
npm start         # começa a rodar
```

## Arquivos

- `src/config.js` — diretrizes, filtros, perfil da Karina
- `src/scraper.js` — Playwright scraping
- `src/evaluator.js` — Claude avalia match
- `src/writer.js` — Claude gera cover letter
- `src/telegram.js` — bot + aprovação 1-clique
- `src/applicator.js` — Playwright submit aplicação
- `src/db.js` — SQLite (vagas vistas, aplicadas, rejeitadas)
- `src/index.js` — loop principal + cron

## Estratégia de filtro (Fase 1: tração)

**Aceita:**
- Match ≥ 7/10 com skills do CV
- Ticket ≥ $500 one-off OU ≥ $75/hr
- Descrição clara (não vaga genérica)

**Ignora:**
- Match < 7
- Projetos "need in 2 hours"
- Rate "negotiable" sem range
- Cliente com 0 reviews e 0 histórico

## Meta

$6K/mês = ~3-4 projetos $1.5-2K OU 1-2 retainers $3K+
