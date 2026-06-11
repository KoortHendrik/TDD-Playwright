const { test, expect } = require('../api-test-setup');
const {URLS} = require("../../../playwright.config");

test('[api] [smoke] Test endpoint loads without API errors', async ({ page }) => {
    await page.goto(URLS.testEndpoint);

    // Verify all APIs returned 200
    const failingCalls = await page.verifyAPIsReturn200();
    if (failingCalls.length > 0) {
        console.log('Failed APIs:', failingCalls);
    }

    // Your other assertions
    expect(failingCalls.length).toBe(0);
});