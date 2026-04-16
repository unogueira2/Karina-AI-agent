# CLAUDE.md - PROJECT CONTEXT & STRATEGY
## Global Authentication Inc. | Multiple Concurrent Initiatives

**Last Updated:** April 15, 2026  
**Primary Contact:** Uênes Nogueira (Founder/CEO) + Karina Rocha Mousinho (Co-founder/Chief Ops)

---

## 🎯 STRATEGIC OVERVIEW

**Mission:** Build blockchain infrastructure for physical good authentication + generate revenue across multiple streams (B2B SaaS, D2C, consulting, freelance gigs as company).

**Current Status:** 
- GNA Protocol: Live on Polygon, 2 patents filed, enterprise positioning phase
- Backend Module 1: Complete (Node.js/TypeScript/Prisma/PostgreSQL)
- Module 2 (mint request flow): Next build priority
- **NEW:** Activating "gigs as company" strategy (Upwork + Braintrust + Contra) targeting $31.5K–82K in 90 days

---

## 📋 SECTION 1: GNA PROTOCOL (Core Product)

### Architecture Principle
**Web3 is absolute source of truth; Web2 (PostgreSQL/Prisma) is mirror + interface layer.**  
On-chain state always overrides local DB via 5-minute reconciliation cron.

### Tech Stack
- **Smart Contracts:** Solidity (GNARegistry.sol, GNAToken.sol) on Polygon/Amoy testnet
- **Backend:** Node.js + TypeScript + Express + Prisma + PostgreSQL + ethers.js v6
- **Models:** 8 Prisma models, 5 route groups, role detection (Admin/Brand/Consumer)
- **Blockchain Sync:** Cron job reconciles Polygon state every 5 minutes
- **Storage:** Pinata (IPFS for metadata)
- **Auth:** Privy + WalletConnect + MetaMask (Coinbase Wallet preferred for testing)

### Key Features
✅ Mother Wallet tri-layer validation system (patented, 8/10 novelty)  
✅ Six-type custody tracking (7.5/10 novelty)  
✅ ERC-721 NFT minting (certificates of authenticity, no monetary value on-platform)  
✅ NFC + blockchain integration (solves metal interference via black metallic cards)  
✅ Enterprise-grade compliance tracking  

### Intellectual Property
- **Provisional Patent Filed:** Mother Wallet architecture + custody system
- **Maintenance:** Critical—renewal required to preserve priority date
- **Competitive Risk:** WISeKey's NFC-blockchain patent portfolio (monitor)

### Next Milestones
- Module 2: Mint request flow (active build)
- User profile layer: @username, profile photo, display preferences
- Frontend build: Using established luxury-minimal design system
- Enterprise outreach: La Maison des Startups → LVMH/Aura Consortium

---

## 📱 SECTION 2: D2C INITIATIVES

### Aurum 18K (Gold Jewelry E-commerce + NFC Auth)
**Status:** React app complete, Stripe/Afterpay hooks ready, needs product photography  
**Revenue Model:** D2C jewelry sales (40–60% markup)  
**Next Action:** Photo 10–15 gold pieces from family business inventory → Upload to store → Stripe live  
**Projected Revenue:** $2K–8K/month once activated  

### Hotel Booking System (Gmail-as-Database)
**Status:** Functional, production use  
**Revenue Model:** Lightweight SaaS for small hostels ($500–2K/mo per client)  
**Strategy:** Zero-infrastructure approach (Gmail backend, no server overhead)  
**Projected Revenue:** $1K–3K/month with 5–10 small clients  

### Nexora (YouTube-as-Backend Streaming)
**Status:** Conceptual + partially implemented  
**Revenue Model:** Creator toolkit SaaS ($50–200/creator/mo)  
**Strategy:** Infrastructure outsourcing (YouTube is backend)  
**Projected Revenue:** $2K–8K/month at scale  

---

## 💼 SECTION 3: GIGS-AS-COMPANY STRATEGY (NEW — ACTIVE)

### High-Level Positioning
Instead of competing as individual freelancers at $50–100/hr, **position as enterprise consulting firm** using:
- **Karina** (10+ years legal ops, licensed attorney, MBA) as credible lead
- **Your** blockchain + smart contract expertise as technical differentiator
- **Rare combo:** Legal operations + blockchain architecture (competitors have neither)
- **Pricing:** $150–250/hr (2–3x freelancer rate due to firm positioning)

### Why This Works
1. ✅ LLC already registered (legal entity exists)
2. ✅ Karina's resume is sênior-level (10 years, regulated environment, international)
3. ✅ You have provable blockchain expertise (GNA Protocol, 2 patents)
4. ✅ 3 strong case studies: GNA, 2,000+ case management, 100+ immigration cases
5. ✅ Target clients = Web3 startups + luxury brands + regulatory-heavy companies (high-value, not price-sensitive)

### Activation Timeline
**24 hours:** Upwork Agency + Contra profiles live  
**48 hours:** Braintrust application + LinkedIn company page  
**Week 1:** Cold outreach begins (20 targets)  
**Week 2:** First inquiries & calls  
**Week 3–4:** 1–2 projects closed (Month 1: $3.5K–8K)  

### Platform Strategy
| Platform | Why | Rate | Engagement |
|----------|-----|------|------------|
| **Upwork Agency** | 60% of projects, auto-matching | $150–250/hr | Hourly + project-based |
| **Braintrust** | Zero fee, curated clients | $150–250/hr | Long-term retainers |
| **Contra** | High-value clients, premium positioning | $150–250/hr | Project-based, no middleman |
| **LinkedIn** | Direct outreach, thought leadership | Variable | $5K–20K retainers |

### Services to Offer
- **Smart Contract Audits:** $1.5K–3K per audit
- **Blockchain Consulting:** $150–250/hr
- **Custody System Architecture:** $5K–15K per project
- **Legal Operations Optimization:** $5K–15K per project
- **Monthly Retainers:** $5K–20K/mo (Preferred—most profitable)

### Revenue Projections (90 days)

**Conservative Scenario:**
- Month 1: $3.5K–8K (Upwork + Braintrust auto-matching)
- Month 2: $9K–19K (1–2 ongoing projects + cold outreach conversions)
- Month 3: $19K–55K (retainers ramping, projects completed)
- **Total:** $31.5K–82K

**Realistic Scenario:**
- Month 1: $6K
- Month 2: $18K
- Month 3: $42K
- **Total:** $66K

### Documents Created (All in /outputs)
1. **Karina_Team_Integrated_CV.docx** — Professional CV combining legal ops + blockchain
2. **RESUMO_EXECUTIVO_FINAL.md** — Executive summary + timeline + metrics
3. **ESTRATEGIA_CAPTACAO_GIGS_COMO_EMPRESA.md** — Full strategy + platform templates
4. **CASE_STUDIES_FOR_PORTFOLIO.md** — 3 ready-to-use case studies
5. **STEP_BY_STEP_CADA_PLATAFORMA.md** — Exact setup instructions per platform

### Cold Outreach Targets (20 priority)
- Web3 VCs (a16z Crypto, Founders Fund)
- Crypto startups (recent DeFi/NFT launches)
- Luxury brands (LVMH contacts via La Maison, Richemont, Hermès, Prada)
- Blockchain infrastructure (Aura Consortium members, Chainalysis, Coinbase Custody)
- Y Combinator W25 crypto companies

### Key Success Factors
1. **Respond fast** — <2 hours on Upwork/LinkedIn wins
2. **Karina as face** — Use her photo in profiles (credibility)
3. **Case studies = currency** — Every pitch references 1–2
4. **Don't underprice** — Start $150/hr, can lower if needed
5. **Follow-up matters** — 3–5 touches per cold prospect

---

## 🏗️ SECTION 4: TECHNICAL INFRASTRUCTURE

### Dev Environment
- **Primary Tool:** Claude Code (with MCP servers)
- **MCP Servers Configured:** GitHub, Notion
- **API Keys in .env:** Alchemy, Moralis, Pinata, Supabase, Privy, WalletConnect, Polygonscan, Anthropic, Kling AI
- **Blockchain RPC:** Alchemy (Polygon mainnet + Amoy testnet)

### Smart Contract Status
- **GNARegistry.sol:** ✅ Complete, tested, live on Polygon
- **GNAToken.sol:** ✅ Complete, tested, live on Polygon
- **Testing:** Hardhat + Polygon testnet (Amoy)
- **Deployment:** Polygon mainnet (migrated from Solana)

### Database
- **Provider:** Supabase (PostgreSQL)
- **ORM:** Prisma v4+
- **Models:** Users, Brands, Products, NFTs, Transactions, Custody, Documentation
- **Reconciliation:** Cron sync (Polygon state → PostgreSQL)

### UI/UX Design System
- **Aesthetic:** Luxury-minimal
- **Primary Color:** Warm off-white background
- **Accent:** Gold (#b8964e)
- **Headings:** Cormorant Garamond (serif)
- **Body:** Instrument Sans
- **Chain Indicator:** Polygon purple (#8247E5)

### Known Issues & Resolutions
- ✅ **NFT transfer/MetaMask caching:** Resolved; Coinbase Wallet recommended for testing
- ⚠️ **NFC-on-metal interference:** Solved via black metallic card substrate

---

## 📊 SECTION 5: MARKETING & POSITIONING

### Enterprise Positioning
**Position:** Custody lifecycle infrastructure layer (complementary to, not competing with Aura Consortium)  
**Entry Path:** La Maison des Startups (Station F, Paris) → VivaTech connections → LVMH outreach  
**Key Differentiator:** Only solution combining blockchain + legal compliance + physical NFC auth  

### Freelance/Consulting Market (NEW)
**Positioning:** "Technical Product Architect | Blockchain Infrastructure | Custody Systems"  
**Not:** Junior developer (undersells actual capability)  
**Service:** B2B consulting on custody/compliance/blockchain architecture  

### Content & Thought Leadership
- **CLAUDE.md Marketing Pipeline:** Autonomous weekly content generation (planned)
- **LinkedIn:** Karina's profile + weekly posts (technical + operations focus)
- **Blog/SEO:** GNA Protocol documentation, blockchain compliance, NFC authentication guides

---

## 💰 SECTION 6: FINANCIAL TARGETS & ROADMAP

### Revenue Streams (Annual Projection)

| Stream | Current | Month 3 | Year 1 |
|--------|---------|---------|--------|
| **GNA SaaS** | $0 | $5K–20K | $50K–150K |
| **Aurum 18K D2C** | $0 | $4K–10K | $30K–100K |
| **Consulting/Gigs** | $0 | $31.5K–82K | $100K–300K |
| **White-label/Licensing** | $0 | $0–10K | $20K–100K |
| **Retainers** | $0 | $5K–20K | $60K–240K |
| **TOTAL** | **$0** | **$45.5K–142K** | **$260K–790K** |

### Fundraising Status
- **Round:** Pre-seed targeting $600K at 10% equity ($6M post-money valuation)
- **Progress:** Kickstarter Fund (positive response, no investment due to geographic mandate); YC application submitted
- **Next:** Enterprise licensing deals (LVMH/Aura) → faster path to revenue than VC

### Cost Structure
- **Monthly Infrastructure:** ~$130–170 (Claude Max 5x, VPS, Kling AI, APIs)
- **Scaling:** Variable with revenue (SaaS hosting, freelance subcontractors if needed)

---

## 🎯 SECTION 7: PARALLEL WORKSTREAMS (ACTIVE)

### Track A: Technical Build (Priority 1)
- **Module 2:** Mint request flow (active)
- **Module 3:** User profile + display layer
- **Goal:** Feature-complete MVP by Month 3

### Track B: Gigs-as-Company Revenue (Priority 2 — NEW)
- **Week 1:** Platforms live (Upwork + Contra)
- **Week 2–4:** First projects + cold outreach
- **Goal:** $5K–8K Month 1

### Track C: Enterprise Outreach (Priority 3)
- **Timeline:** After gigs stabilize (Month 2)
- **Target:** LVMH/Aura Consortium licensing
- **Goal:** 1 enterprise deal by Q3 2025

### Track D: Aurum 18K Activation (Priority 2)
- **Timeline:** Next 2 weeks (photography)
- **Goal:** $2K–5K/month D2C revenue

---

## 📖 SECTION 8: KEY LEARNINGS & PRINCIPLES

### On Architecture
- **Web3 is source of truth** — Always reconcile blockchain state to local DB, never the reverse
- **Mother Wallets solve authorization** — Only authorized wallets can mint (prevents counterfeits by design)
- **Infrastructure outsourcing** — Build on 3rd-party systems (Gmail, YouTube, cloud) to eliminate server overhead

### On Product & Positioning
- **B2B infrastructure > standalone consumer** — Higher probability enterprise path
- **Rare combos win** — Legal ops + blockchain = defensible positioning
- **Compliance-first architecture** — Sells to enterprise better than pure tech

### On Go-to-Market
- **Technical capability ≠ commercial traction** — Gap is sales/prospecting, not product
- **Strategic investor > capital alone** — Network access matters more than money
- **Module-by-module delivery** — Build in phases, start selling early

### On Credibility
- **Firm > freelancer** — Same expertise priced 3x higher with LLC + sênior team member
- **Case studies are currency** — Every pitch references proven work
- **Speed matters** — First response to inquiry wins (Upwork, cold outreach)

---

## 🚀 SECTION 9: IMMEDIATE NEXT ACTIONS

### This Week (Priority Order)

1. **Activate Upwork Agency** (1.5 hours)
   - Follow STEP_BY_STEP_CADA_PLATAFORMA.md
   - Upload CV + photos + case studies
   - Post 3 projects with $150–250/hr rate

2. **Activate Contra** (30 min)
   - Copy profile template from ESTRATEGIA_CAPTACAO_GIGS_COMO_EMPRESA.md
   - Upload case studies (Google Drive links OK)
   - Set rate visible

3. **Create LinkedIn Company Page** (30 min)
   - Name: Global Authentication Inc.
   - Add team members (Karina + you)
   - First post about GNA Protocol

4. **Cold Outreach Campaign** (30 min)
   - Send 5 messages to Upwork/Braintrust priority targets
   - Use templates from STEP_BY_STEP_CADA_PLATAFORMA.md
   - Follow-up every 3 days

5. **Photography** (30 min)
   - Get 1 professional photo of Karina (or good smartphone photo, white background)
   - Upload to all platforms

### Next 2 Weeks

- [ ] Photography for Aurum 18K products (2–3 hours)
- [ ] Activate Aurum store (Stripe live)
- [ ] Braintrust application approval (usually 24–48h)
- [ ] First 3 Upwork/Braintrust inquiries (should arrive auto)
- [ ] 10–15 cold outreach total messages

### Month 2

- [ ] 1–2 projects closed ($2K–5K each)
- [ ] Aurum running ($2K–5K/month)
- [ ] 1–2 LinkedIn retainer conversations initiated
- [ ] GNA white-label pitch deck prepared for LVMH

---

## 📝 SECTION 10: WORKING WITH CLAUDE

### How Claude Operates On This Project

1. **Load CLAUDE.md first** — Every session starts with full context
2. **Module-by-module builds** — Split large tasks into phases
3. **Autonomous execution** — Prefers single prompts (full end-to-end) over multi-step workflows
4. **Code-focused** — Uses Claude Code for implementation; outputs to GitHub
5. **Plain-language explanations** — Translates technical concepts for non-technical founder

### Communication Style

- **Direct & honest** — No validation bias; calls out if something won't work
- **Outcome-focused** — Prioritizes business results over technical perfection
- **Infrastructure thinking** — Builds on existing 3rd-party systems, not from scratch
- **Execution bias** — "Good done today" > "perfect done in a month"

### Development Workflow

**Command Structure:** 
```
git clone [repo] → branch [module] → Claude Code for implementation → 
git commit + push → CLAUDE.md updated with progress
```

**Documentation:** 
- Update CLAUDE.md at end of each session
- Keep case studies updated with new projects
- Track metrics (revenue, client count, conversion rates)

---

## ⚡ SECTION 11: CRITICAL SUCCESS METRICS

### 30-Day Metrics (Gigs as Company)
- [ ] Upwork inquiries: 2–3
- [ ] Cold outreach responses: 1–2
- [ ] Projects started: 1–2
- [ ] Revenue: $3.5K–8K

### 90-Day Metrics
- [ ] Total revenue: $31.5K–82K
- [ ] Active retainers: 1–2
- [ ] Case studies added: 1–2 (new projects)
- [ ] Enterprise outreach initiated: Yes (LVMH/Aura)

### 6-Month Metrics
- [ ] GNA SaaS pricing live: Yes
- [ ] Aurum monthly revenue: $5K+ steady
- [ ] Consulting revenue: $10K+/month
- [ ] Enterprise pipeline: 2–3 active discussions

---

## 🔗 QUICK REFERENCE: DOCUMENTS & LINKS

**All files in `/mnt/user-data/outputs/`:**

| File | Purpose | Use When |
|------|---------|----------|
| `Karina_Team_Integrated_CV.docx` | Professional CV | Applying to jobs, sending to clients, LinkedIn profile |
| `RESUMO_EXECUTIVO_FINAL.md` | High-level overview | Quick refresh, sharing strategy with team |
| `ESTRATEGIA_CAPTACAO_GIGS_COMO_EMPRESA.md` | Complete strategy | Deep-dive planning, template reference |
| `CASE_STUDIES_FOR_PORTFOLIO.md` | Case studies ready to copy | Uploading to Upwork/Braintrust/Contra |
| `STEP_BY_STEP_CADA_PLATAFORMA.md` | Exact setup instructions | Following platform setup (Upwork, Braintrust, etc.) |

**GitHub Repos:**
- GNA Protocol: [repo URL]
- Aurum 18K: [repo URL]
- Hotel Booking System: [repo URL]
- Nexora: [repo URL]

**Key Contacts:**
- La Maison des Startups: [contact info]
- Aura Consortium: [contact info]
- WISeKey Patent team: [monitor for conflicts]

---

## 📞 SESSION NOTES & UPDATES

**Session: April 15, 2026**
- Created complete gigs-as-company strategy (Upwork + Braintrust + Contra)
- Generated integrated CV, case studies, platform templates, step-by-step guides
- Projected 90-day revenue: $31.5K–82K
- Timeline: Activate in 48 hours, first projects Week 2
- Updated CLAUDE.md with all strategy details

---

**Status:** Ready for execution. All templates created. Platforms ready to activate. 🚀
