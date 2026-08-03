import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: POST /mocks/validation-mock



// ⚠ This endpoint depends on environment config: SERVICE_PROJECT_LAYER
// A 500 error may indicate missing environment setup, not a code bug.

test('smoke: POST /mocks/validation-mock', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/mocks/validation-mock`, {
    data: {
      
      // No request fields are required by the profile.
      
    }
  });
  
  // Reachability only: any HTTP response proves the service accepted the connection.
  // This does not prove successful endpoint behavior.
  const status = response.status();
  expect(status).toBeGreaterThanOrEqual(100);
  expect(status).toBeLessThan(600);
  
});
