const { test, expect } = require('@playwright/test');
test('GET /test-endpoint', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/test-endpoint`;
  const response = await page.goto(url);
  expect(response.ok()).toBeTruthy();
});