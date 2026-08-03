const { test, expect } = require("@playwright/test");

test.describe("POST /services/add negative validation", () => {
  const baseUrl = process.env.BASE_URL || "http://localhost:8080";

  test("missing required field body.content returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
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
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.description returns 400", async ({ request }) => {
    const response = await request.post(baseUrl + "/services/add", {
      data: {
        "content": "{\"steps\":[]}",
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
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.isCommon returns 400", async ({ request }) => {
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
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.name returns 400", async ({ request }) => {
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
        "serviceId": "kratest-demo-service-id",
        "state": "draft",
        "structure": {
          "steps": []
        },
        "type": "POST",
        "updateServiceDb": false,
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.serviceId returns 400", async ({ request }) => {
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
        "state": "draft",
        "structure": {
          "steps": []
        },
        "type": "POST",
        "updateServiceDb": false,
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.structure returns 400", async ({ request }) => {
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
        "type": "POST",
        "updateServiceDb": false,
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });

  test("missing required field body.type returns 400", async ({ request }) => {
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
        "updateServiceDb": false,
      },
    });
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty("response", "Required parameter(s) missing");
  });
});
