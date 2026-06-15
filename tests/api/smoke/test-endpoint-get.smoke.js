const { test, expect } = require('@playwright/test');

test('[api] [smoke] test-endpoint loads without API errors', async ({ page }) => {
    const url = `${process.env.BASE_URL || 'http://localhost:3000'}/test-endpoint`;
    const response = await page.goto(url);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('response');
});