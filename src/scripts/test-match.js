import { evaluateJob } from '../evaluator.js';
import { generateCoverLetter } from '../writer.js';

const testJobs = [
  {
    id: 'test1',
    title: 'AI Automation Expert - Build Agent Pipeline with Claude',
    description: 'We need to build an autonomous agent that monitors customer emails, categorizes them, and drafts responses. Must have experience with Anthropic Claude API, Node.js, and workflow automation. Long-term engagement, $3K/month retainer.',
    budget_type: 'fixed',
    budget_min: 3000,
    budget_max: 3000,
  },
  {
    id: 'test2',
    title: 'Data Entry - Copy from PDF to Excel',
    description: 'Need someone to copy text from 500 PDFs into Excel. Very simple task. $50 total budget.',
    budget_type: 'fixed',
    budget_min: 50,
    budget_max: 50,
  },
  {
    id: 'test3',
    title: 'Smart Contract Developer - NFT Custody System',
    description: 'Building enterprise NFT custody tracking platform on Polygon. Need experienced Solidity developer who understands ERC-721 and compliance. Full-time contract, $150/hr, 6-month minimum.',
    budget_type: 'hourly',
    budget_min: 150,
    budget_max: 150,
  },
];

console.log('🧪 Testando evaluator + writer\n');

for (const job of testJobs) {
  console.log(`\n━━━ ${job.title} ━━━`);
  const evaluation = await evaluateJob(job);
  console.log(`Score: ${evaluation.score}/10`);
  console.log(`Category: ${evaluation.category}`);
  console.log(`Reasoning: ${evaluation.reasoning}`);

  if (evaluation.score >= 7) {
    console.log('\n✍️  Cover letter:');
    const letter = await generateCoverLetter(job, evaluation);
    console.log(letter);
  } else {
    console.log('❌ Não passou do filtro');
  }
}
