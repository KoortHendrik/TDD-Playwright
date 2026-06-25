const { test, expect } = require('@playwright/test');

test('[api] [smoke] Order jump with end page loads without API errors', async ({ page }) => {
    const url = `${process.env.BASE_URL || 'http://localhost:3000'}/order/jump-with-end`;
    const response = await page.goto(url);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('response');
});