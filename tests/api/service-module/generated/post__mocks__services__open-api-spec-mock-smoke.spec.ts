import { test, expect } from '@playwright/test';

// deterministic reachability smoke generated from a concrete unguarded route with no required request values
// Source: POST /mocks/services/open-api-spec-mock



test('smoke: POST /mocks/services/open-api-spec-mock', async ({ request }) => {
  
  const response = await request.post(`${process.env.BASE_URL}/mocks/services/open-api-spec-mock`, {
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
