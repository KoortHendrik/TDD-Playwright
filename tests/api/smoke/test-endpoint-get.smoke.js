const { test, expect } = require('@playwright/test');

test('[api] [smoke] Test endpoint loads without API errors', async ({ page }) => {
    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    const url = `${baseUrl}/test-endpoint`;
    const response = await page.goto(url);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('response');
});