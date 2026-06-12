const { test, expect } = require('@playwright/test');

test('[smoke] Order jump with end page loads without errors', async ({ page }) => {
  const url = `${process.env.BASE_URL || 'http://localhost:3000'}/order/jump-with-end`;
  const response = await page.goto(url);
  expect(response.ok()).toBeTruthy();
});