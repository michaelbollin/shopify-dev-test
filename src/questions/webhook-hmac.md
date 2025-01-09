---
id: "shopify-webhook-hmac"
title: |
  Why is this webhook verification unsafe? 🔒

  ```typescript
  app.post('/webhooks/orders', (req, res) => {
    const hmac = req.headers['x-shopify-hmac-sha256'];
    const hash = crypto
      .createHmac('sha256', process.env.SHOPIFY_API_SECRET)
      .update(req.body)
      .digest('hex');
    
    if (hmac === hash) {
      // Process webhook
    }
  });
  ```
answers:
  - id: "a"
    text: "Wrong hashing algorithm"
  - id: "b"
    text: "Missing raw body buffer"
  - id: "c"
    text: "Incorrect header name"
  - id: "d"
    text: "Timing attack vulnerable"
correctAnswer: "b"
---

### Explanation

Webhook verification requires raw body buffer:

```typescript
// Body parsing middleware corrupts HMAC ❌
app.use(express.json());

// Correct approach ✅
app.use(express.raw({ type: 'application/json' }));
app.post('/webhooks/orders', (req, res) => {
  const hash = crypto
    .createHmac('sha256', SECRET)
    .update(req.body) // Raw buffer
    .digest('hex');
});
```

Key points:
- Body must remain unparsed
- Use express.raw() middleware
- Compare in constant time

Reference: [Webhook HMAC Validation](https://shopify.dev/apps/webhooks/configuration/https#verify-webhook) 