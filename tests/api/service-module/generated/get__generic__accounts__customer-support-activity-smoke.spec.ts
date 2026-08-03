import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: GET /generic/accounts/customer-support-activity



test('smoke: GET /generic/accounts/customer-support-activity', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/generic/accounts/customer-support-activity`);
  
  // Reachability only: any HTTP response proves the service accepted the connection.
  // This does not prove successful endpoint behavior.
  const status = response.status();
  expect(status).toBeGreaterThanOrEqual(100);
  expect(status).toBeLessThan(600);
  
});
