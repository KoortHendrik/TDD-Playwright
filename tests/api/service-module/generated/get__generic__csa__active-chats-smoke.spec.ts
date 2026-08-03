import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: GET /generic/csa/active-chats



test('smoke: GET /generic/csa/active-chats', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/generic/csa/active-chats`);
  
  // Reachability only: any HTTP response proves the service accepted the connection.
  // This does not prove successful endpoint behavior.
  const status = response.status();
  expect(status).toBeGreaterThanOrEqual(100);
  expect(status).toBeLessThan(600);
  
});
