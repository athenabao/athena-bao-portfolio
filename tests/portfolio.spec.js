import { test, expect } from '@playwright/test';

test('content, assets, map pins, quiz scoring, and replay', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('#contact')).toHaveCount(1);
  await expect(page.locator('#work article')).toHaveCount(6);
  await expect(page.locator('#contact a.email')).toHaveAttribute('href', 'mailto:albao@cs.washington.edu');
  await expect(page.locator('#about')).toContainText('December 2026');
  await expect(page.locator('#experience')).toContainText('Microsoft 365 Engineer Intern');
  await expect(page.locator('body')).not.toContainText('Coffees Consumed');
  await expect(page.locator('.leaflet-marker-icon')).toHaveCount(3);
  await page.locator('#gallery').scrollIntoViewIfNeeded();
  await page.locator('#quiz').scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator('img:not(.leaflet-tile)').evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src))).toEqual([]);
  await expect.poll(() => page.locator('.leaflet-tile').evaluateAll(images => images.some(image => image.naturalWidth > 0)), { timeout: 15000 }).toBe(true);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  expect(overflow).toBe(false);
  const failedImages = await page.locator('img:not(.leaflet-tile)').evaluateAll(images => images.filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src));
  expect(failedImages).toEqual([]);

  await page.getByRole('button', { name: 'Show New York City, USA on map' }).click();
  await page.locator('.travel-map').scrollIntoViewIfNeeded();
  await expect(page.locator('.map-popup')).toContainText('New York City, USA');
  await expect(page.locator('.map-popup img')).toHaveAttribute('src', '/photos/one-world-trade.jpg');
  await page.screenshot({ path: testInfo.outputPath('map.png') });
  await page.locator('.leaflet-popup-close-button').click();
  await expect(page.locator('.map-popup')).toHaveCount(0);
  await page.getByRole('button', { name: 'Show The Met, New York City on map' }).click();
  await expect(page.locator('.map-popup img')).toHaveAttribute('src', '/photos/museum-gallery.jpg');
  await page.locator('.leaflet-popup-close-button').click();
  await expect(page.locator('.map-popup')).toHaveCount(0);
  await page.getByRole('button', { name: 'Show Red Rock Canyon, Nevada on map' }).click();
  await expect(page.locator('.map-popup img')).toHaveAttribute('src', '/photos/red-rock-canyon.jpg');
  await page.getByRole('button', { name: 'Show all destinations' }).click();

  await expect(page.locator('.quiz-option')).toHaveCount(4);
  await page.locator('#quiz').getByRole('button', { name: 'New York City, USA', exact: true }).click();
  await expect(page.locator('.quiz-progress')).toContainText('Score: 1');
  await expect(page.locator('.quiz-option:disabled')).toHaveCount(4);
  await page.getByRole('button', { name: 'Next photo' }).click();
  await page.locator('#quiz').getByRole('button', { name: 'New York City, USA', exact: true }).click();
  await expect(page.locator('.quiz-feedback')).toContainText('This is The Met, New York City.');
  await page.getByRole('button', { name: 'Next photo' }).click();
  await page.locator('#quiz').getByRole('button', { name: 'Red Rock Canyon, Nevada', exact: true }).click();
  await expect(page.locator('.quiz-progress')).toContainText('Score: 2');
  await page.getByRole('button', { name: 'See final score' }).click();
  await expect(page.locator('.quiz-finish h3')).toHaveText('2 / 3');
  await page.screenshot({ path: testInfo.outputPath('quiz-finish.png') });
  await page.getByRole('button', { name: 'Play again' }).click();
  await expect(page.locator('.quiz-progress')).toContainText('Score: 0');
  await expect(page.locator('.quiz-progress')).toContainText('Round 1 / 3');
  expect(errors).toEqual([]);
});

test('legacy URLs and project notes', async ({ page }) => {
  await page.goto('/case-studies.html');
  await expect(page).toHaveURL(/\/case-studies$/);
  await expect(page.locator('.project')).toHaveCount(6);
  await expect(page.locator('#contact')).toHaveCount(0);
  await page.goto('/index.html');
  await expect(page).toHaveURL('http://localhost:3000/');
});
