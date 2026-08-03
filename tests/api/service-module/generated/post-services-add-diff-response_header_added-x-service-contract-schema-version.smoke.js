const { test, expect } = require("@playwright/test");

test.describe("POST /services/add visible change", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";

  test("adds response header X-Service-Contract-Schema-Version", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "{\"steps\":[]}",
        "description": "Demo service created by kratest positive-setup",
        "entities": {
          "date": "DATE"
        },
        "examples": {
          "greeting": [
            "Hello",
            "Hi"
          ]
        },
        "isCommon": false,
        "name": "kratest-demo-service",
        "serviceId": "kratest-demo-service-id",
        "state": "draft",
        "structure": {
          "steps": []
        },
        "type": "POST",
        "updateServiceDb": false,
      },
    });
    expect(response.headers()["x-service-contract-schema-version"]).toBe("1");
  });
});
