// @ts-check
import { test, expect } from '@playwright/test';

test('has right title', async ({ page }) => {
  await page.goto('http://localhost:8080/quiplibre.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quiplibre/);
});

test('play a nice game of quiplibre with 3 people', async ({ page: hostPage, context }) => {
  // You can't see Math.random, so... just run this test a couple times, I guess.
  const n = 3; // Number of players

  hostPage.on('pageerror', (error) => {throw error;}); //This will fail the test on any unhandled error, allegedly, although I'm having a hard time getting that to happen. cf also below
  // You can listen for all console logs by uncommenting this (see also below for the players)
  hostPage.on('console', msg => console.log(msg.text()));
  
  await hostPage.goto('http://localhost:8080/quiplibre.html');

  // Input text into the text box and click join (host)
  await hostPage.getByRole('textbox').fill('delicious test value');
  await hostPage.getByRole('button', { name: 'host' }).click();
  // Expect host page to include the joinable url
  await expect(hostPage.locator('body')).toContainText('#delicioustestvalue');
  //make sure clicking "start the game" doesn't do anything yet
  await hostPage.getByRole('button', { name: 'start the game' }).click();
  await expect(hostPage.locator('body')).toContainText('#delicioustestvalue');

  // Create players
  const additionalPages = [];
  for (let i = 0; i < n; i++) {
    const newPage = await context.newPage();
    newPage.on('pageerror', (error) => {throw error;}); //fail the test on any unhandled error
    //newPage.on('console', msg => console.log(msg.text()));
    await newPage.goto('http://localhost:8080/quiplibre.html');
    await newPage.getByRole('textbox').fill('delicious test value');
    await newPage.getByRole('button', { name: 'join' }).click();
    additionalPages.push(newPage);
  }

  // Expect all pages to show "What is your name?" (might show "connecting" first)
  for (const additionalPage of additionalPages) {
    await expect(additionalPage.locator('body')).toContainText('What is your name?', { timeout: 2000 });
  }
  //I'm not worried about testing the actual name-setting logic. They can have default names. Could: test that, I suppose.

  //start the game proper
  await hostPage.getByRole('button', { name: 'start the game' }).click();
  //This next step failed ⅔ of the time with the "superbly bad shuffle":
  await expect(hostPage.locator('body')).toContainText('Time for a nice round of Quiplibre!');

  // Have each player answer the first prompt
  for (const additionalPage of additionalPages) {
    await additionalPage.locator('#prompt').waitFor({ state: 'visible', timeout: 10000 });
    await additionalPage.locator('#inputBox').fill('first answer from player');
    await additionalPage.locator('input[type="submit"]').click();
  }

  // Have each player answer the second prompt
  for (const additionalPage of additionalPages) {
    await additionalPage.locator('#prompt').waitFor({ state: 'visible', timeout: 10000 });
    await additionalPage.locator('#inputBox').fill('second answer from player');
    await additionalPage.locator('input[type="submit"]').click();
  }

  // After both answers from each player, the host should show the judgement view with "OR" between options
  await expect(hostPage.locator('body')).toContainText('OR', { timeout: 10000 });

  //could: write the rest of a test session, maybe even go forth to a replay to make sure the game still works then

});
