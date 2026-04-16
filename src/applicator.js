import { launchBrowser } from './scraper.js';

/**
 * Aplica em uma vaga no AI Wordfinder.
 *
 * IMPORTANTE: Os seletores abaixo são placeholders.
 * Na primeira execução, rode `npm run login`, navegue até uma vaga,
 * abra DevTools e ajuste os seletores reais aqui.
 */
export async function applyToJob(job) {
  const { browser, context } = await launchBrowser();
  const page = await context.newPage();

  try {
    await page.goto(job.url, { waitUntil: 'networkidle' });

    // Clica em "Apply" ou equivalente
    const applyBtn = page.locator(
      'button:has-text("Apply"), button:has-text("Submit Proposal"), a:has-text("Apply")'
    ).first();

    await applyBtn.waitFor({ timeout: 10000 });
    await applyBtn.click();
    await page.waitForTimeout(2000);

    // Preenche cover letter
    const coverLetterField = page.locator(
      'textarea[name*="cover"], textarea[name*="letter"], textarea[name*="proposal"], textarea[id*="cover"]'
    ).first();

    await coverLetterField.waitFor({ timeout: 10000 });
    await coverLetterField.fill(job.cover_letter);
    await page.waitForTimeout(1000);

    // Preenche rate (se campo existir)
    const rateField = page.locator('input[name*="rate"], input[name*="bid"], input[type="number"]').first();
    if (await rateField.count() > 0) {
      const rate = job.budget_type === 'hourly' ? 150 : Math.max(1500, job.budget_min || 1500);
      await rateField.fill(String(rate));
    }

    // Submete
    const submitBtn = page.locator(
      'button[type="submit"]:has-text("Submit"), button:has-text("Send Proposal"), button:has-text("Apply Now")'
    ).first();

    await submitBtn.waitFor({ timeout: 5000 });
    await submitBtn.click();

    await page.waitForTimeout(3000);

    // Confirma sucesso (ajustar seletor de confirmação)
    const success = await page.locator('text=/success|sent|submitted|applied/i').count() > 0;

    if (!success) {
      throw new Error('Confirmação de envio não detectada');
    }

    return true;
  } finally {
    await context.storageState({ path: './data/auth-state.json' }).catch(() => {});
    await browser.close();
  }
}
