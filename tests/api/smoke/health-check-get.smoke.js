const { test, expect } = require('@playwright/test');
test('health-check-get', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/health-check`;
  const response = await page.goto(url);
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});