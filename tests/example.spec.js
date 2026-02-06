// @ts-check
import { test, expect } from '@playwright/test';

test('has right title', async ({ page }) => {
  await page.goto('http://localhost:8080/quiplibre.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quiplibre/);
});

test('play a nice game of quiplibre with 3 people', async ({ page: hostPage, context }) => {
  const n = 3; // Number of additional clients

  // Listen for all console logs
  hostPage.on('console', msg => console.log(msg.text()));
  
  await hostPage.goto('http://localhost:8080/quiplibre.html');

  // Input text into the text box and click join (host)
  await hostPage.getByRole('textbox').fill('delicious test value');
  await hostPage.getByRole('button', { name: 'host' }).click();
  // Expect host page to include the joinable url
  await expect(hostPage.locator('body')).toContainText('#delicioustestvalue');

  // Create n additional clients
  const additionalPages = [];
  for (let i = 0; i < n; i++) {
    const newPage = await context.newPage();
    newPage.on('console', msg => console.log(msg.text()));
    await newPage.goto('http://localhost:8080/quiplibre.html');
    await newPage.getByRole('textbox').fill('delicious test value');
    await newPage.getByRole('button', { name: 'join' }).click();
    additionalPages.push(newPage);
  }

  // Expect all pages to show "What is your name?" (might show "connecting" first)
  for (const additionalPage of additionalPages) {
    await expect(additionalPage.locator('body')).toContainText('What is your name?', { timeout: 2000 });
  }

  //TODO: it never switches for webkit, a browser I don't even have? wait I probably just have to bump peerjs version

});
