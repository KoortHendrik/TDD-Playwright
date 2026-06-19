const { test, expect } = require('@playwright/test');
test('default dsl post', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/default-dsl`;
  const response = await page.goto(url, { method: 'POST' });
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});