// @ts-check
import { test, expect } from '@playwright/test';

test('has right title', async ({ page }) => {
  await page.goto('http://localhost:8080/quiplibre.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quiplibre/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //TODO: adapt this more

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
