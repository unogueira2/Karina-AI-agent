import Anthropic from '@anthropic-ai/sdk';
import { CONFIG, PROFILE } from './config.js';

const client = new Anthropic({ apiKey: CONFIG.anthropic.apiKey });

const SYSTEM_PROMPT = `You are writing cover letters for Karina Rocha Mousinho — a senior legal operations specialist + AI automation consultant based in Tampa, FL.

RULES:
- Keep it under 180 words total
- Open with ONE specific insight about their problem, not "I'd love to help"
- Reference ONE matching case study (max) naturally
- State rate expectation IF client asked about it
- End with a concrete next step (call, sample, or question)
- Voice: warm, direct, senior. NOT eager or salesy.
- NO buzzwords ("synergy", "leverage", "dynamic", "passionate")
- NO generic openers ("I'm reaching out because...")
- Portuguese OR English — match the job posting's language

PROFILE:
${PROFILE.summary}

CASE STUDIES TO REFERENCE (pick ONE that fits):
${PROFILE.caseStudies.map(cs => `- ${cs.name}: ${cs.summary}`).join('\n')}

SIGNATURE FORMAT:
Best,
Karina Rocha Mousinho
Global Authentication Inc.

Return ONLY the cover letter text, no preamble.`;

export async function generateCoverLetter(job, evaluation) {
  const userContent = `Generate a cover letter for this job.

JOB: ${job.title}
DESCRIPTION: ${job.description}
MATCH CATEGORY: ${evaluation.category}
KEY MATCHING SKILLS: ${evaluation.keyMatches.join(', ')}

Language detected from posting: ${detectLanguage(job.description)}`;

  try {
    const res = await client.messages.create({
      model: CONFIG.anthropic.model,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: userContent }],
    });

    return res.content[0].text.trim();
  } catch (err) {
    console.error(`Geração de cover letter falhou:`, err.message);
    return null;
  }
}

function detectLanguage(text) {
  const ptWords = ['você', 'não', 'para', 'projeto', 'precisamos', 'está'];
  const lower = text.toLowerCase();
  const ptHits = ptWords.filter(w => lower.includes(w)).length;
  return ptHits >= 2 ? 'Portuguese' : 'English';
}
