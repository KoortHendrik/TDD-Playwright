const { test, expect } = require('@playwright/test');

test('order jump with end get', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/order/jump-with-end`;
  const response = await page.goto(url);
  expect(response.ok()).toBeTruthy();
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('response');
});