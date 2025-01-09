---
id: "shopify-webhook-hmac"
title: |
  How can you verify a webhook is genuinely from Shopify? 🔒

  ```typescript
  app.post('/webhooks', (req, res) => {

  });
  ```
answers:
  - id: "a"
    text: "Compare webhook secret token"
  - id: "b"
    text: "Validate HMAC signature"
  - id: "c"
    text: "Check request IP address"
  - id: "d"
    text: "Verify OAuth access token"
correctAnswer: "b"
---

### Explanation

Shopify uses HMAC (Hash-based Message Authentication Code) signatures to verify webhook authenticity. Here's the secure implementation:

```typescript

app.post('/webhooks', express.text({ type: '*/*' }), async (req, res) => {
  const { valid, topic, domain } = await shopify.webhooks.validate({
    rawBody: req.body,  
    rawRequest: req,
    rawResponse: res,
  });

  if (!valid) {
    res.sendStatus(400);  // Invalid HMAC signature
    return;
  }

  // Safe to process webhook - signature verified
});
```

Key points:

- HMAC validation is the official Shopify security method
- Secret tokens can be compromised
- IP checking is unreliable (can be spoofed)
- OAuth tokens are for API calls, not webhooks
- Always validate before processing payload

Reference: [Webhook HMAC Validation](https://shopify.dev/apps/webhooks/configuration/https#verify-webhook)
