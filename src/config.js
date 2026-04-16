import 'dotenv/config';

export const CONFIG = {
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: 'claude-opus-4-7',
    evaluatorModel: 'claude-haiku-4-5-20251001', // haiku pra avaliar = barato
  },

  aiwf: {
    email: process.env.AIWF_EMAIL,
    password: process.env.AIWF_PASSWORD,
    url: process.env.AIWF_URL || 'https://aiwordfinder.com',
    headless: process.env.HEADLESS === 'true',
  },

  telegram: {
    token: process.env.TELEGRAM_BOT_TOKEN,
    chatId: process.env.TELEGRAM_CHAT_ID,
  },

  filter: {
    minMatchScore: parseInt(process.env.MIN_MATCH_SCORE || '7'),
    minHourlyRate: parseInt(process.env.MIN_HOURLY_RATE || '75'),
    minFixedBudget: parseInt(process.env.MIN_FIXED_BUDGET || '500'),

    // Ignora vagas com essas palavras no título/desc
    blacklistKeywords: [
      'data entry', 'transcription', 'typing',
      'virtual assistant basic', 'customer support only',
      'urgent 1 hour', 'asap 2 hours',
      'unpaid', 'equity only', 'revenue share only',
    ],

    // Prioriza vagas com essas palavras
    priorityKeywords: [
      'automation', 'ai agent', 'ai workflow', 'langchain',
      'claude api', 'openai api', 'anthropic',
      'blockchain', 'smart contract', 'web3', 'solidity',
      'legal operations', 'compliance', 'case management',
      'workflow', 'integration', 'node.js', 'typescript',
      'long term', 'ongoing', 'retainer', 'monthly',
    ],
  },

  runtime: {
    intervalMinutes: parseInt(process.env.RUN_INTERVAL_MINUTES || '30'),
    timezone: process.env.TIMEZONE || 'America/New_York',
    activeHoursStart: 8,  // 8am
    activeHoursEnd: 22,   // 10pm
  },
};

// === PERFIL DA KARINA (usado para match + cover letter) ===
export const PROFILE = {
  name: 'Karina Rocha Mousinho',
  company: 'Global Authentication Inc.',
  headline: 'Legal Operations & AI Automation Specialist | Blockchain Infrastructure',

  summary: `10+ years in legal operations and compliance (Brazil/USA), licensed attorney (OAB-MA), MBA.
Co-founder of Global Authentication Inc., building blockchain-based custody tracking (GNA Protocol, 2 patents filed).
Combines legal operations depth with modern AI/automation stack — Claude API, Node.js, TypeScript, Python.
Rare profile: senior legal ops + hands-on technical execution.`,

  skills: {
    automation_ai: [
      'Claude API', 'Anthropic SDK', 'OpenAI API', 'AI agents',
      'workflow automation', 'LangChain', 'Playwright',
      'prompt engineering', 'RAG systems',
    ],
    backend: [
      'Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL',
      'REST APIs', 'MCP servers', 'Python',
    ],
    blockchain: [
      'Solidity', 'ERC-721', 'ethers.js v6', 'Polygon', 'Hardhat',
      'smart contracts', 'NFT systems', 'custody tracking',
    ],
    legal_ops: [
      'case management (2000+ cases)', 'EB-1/EB-2/EB-3 immigration',
      'I-140/I-485/I-765', 'compliance workflows',
      'regulatory coordination', 'INSZoom', 'Workiva',
    ],
    languages: ['English (fluent)', 'Portuguese (native)', 'Spanish (professional)'],
  },

  caseStudies: [
    {
      name: 'GNA Protocol',
      summary: 'Designed and deployed ERC-721 custody tracking + NFC authentication system on Polygon. 2 patents filed (Mother Wallet architecture + 6-type custody system).',
      tags: ['blockchain', 'smart contract', 'web3', 'custody', 'nft'],
    },
    {
      name: 'Large-Scale Dispute Resolution',
      summary: 'Managed 2,000+ concurrent legal cases with 60%+ resolution rate (vs. 40% industry avg) for regulated financial institution. Reduced legal costs by ~$2M/year.',
      tags: ['legal ops', 'case management', 'compliance', 'workflow'],
    },
    {
      name: 'Immigration Operations at Scale',
      summary: 'Managed 100+ concurrent EB-1/EB-2/EB-3 employment immigration cases with 95%+ form accuracy and 100% deadline compliance.',
      tags: ['immigration', 'compliance', 'case management', 'forms', 'usics'],
    },
  ],

  rate: {
    hourly: { min: 75, target: 150, max: 250 },
    fixed: { min: 500, target: 2000 },
    retainer: { min: 2000, target: 5000 },
  },
};
