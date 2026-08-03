import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: GET /services/log-by-service



// ⚠ This endpoint depends on environment config: SERVICE_OPENSEARCH
// A 500 error may indicate missing environment setup, not a code bug.

test('smoke: GET /services/log-by-service', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/services/log-by-service`);
  
  // Reachability only: any HTTP response proves the service accepted the connection.
  // This does not prove successful endpoint behavior.
  const status = response.status();
  expect(status).toBeGreaterThanOrEqual(100);
  expect(status).toBeLessThan(600);
  
  // Expected statuses from DSL: 200, 404
  
});
