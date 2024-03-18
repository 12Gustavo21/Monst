import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Enjoy Static Site Hosting With Kinsta StSH.' })).toBeVisible();
});
