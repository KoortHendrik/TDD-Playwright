import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: GET /internal/return-file-locations



// ⚠ This endpoint depends on environment config: DMAPPER_LOCATIONS_PATH
// A 500 error may indicate missing environment setup, not a code bug.

test('smoke: GET /internal/return-file-locations', async ({ request }) => {
  
  const response = await request.get(`${process.env.BASE_URL}/internal/return-file-locations`);
  
  // Reachability only: any HTTP response proves the service accepted the connection.
  // This does not prove successful endpoint behavior.
  const status = response.status();
  expect(status).toBeGreaterThanOrEqual(100);
  expect(status).toBeLessThan(600);
  
});
