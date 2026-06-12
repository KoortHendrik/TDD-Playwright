const { test, expect } = require('@playwright/test');
test('test endpoint get', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/test-endpoint`;
  const response = await page.goto(url);
  expect(response.ok()).toBeTruthy();
});