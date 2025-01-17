---
title: |
  What is correct about Shopify's webhook retry mechanism? 🔄

answers:
  - id: "a"
    text: "Webhooks are retried indefinitely until successful delivery"
  - id: "b"
    text: "Webhooks are retried 8 times over 4 hours using exponential backoff"
  - id: "c"
    text: "Updating webhook subscription address during retries will redirect to the new address"
  - id: "d"
    text: "Retried webhooks contain updated payload data from the time of retry"
correctAnswer: "b"
---

### Explanation

As of September 10, 2024, Shopify implemented important updates to their webhook retry mechanism:

Key points:
- Webhooks are retried a total of 8 times over a 4-hour period
- Retried webhooks maintain the original payload from when they were first triggered
- The `X-Shopify-Triggered-At` header can be used to check if payload is stale
- Webhook retries will continue to use the original subscription address


Reference: [Shopify Webhook Updates Changelog](https://shopify.dev/changelog/updates-to-webhook-retry-mechanism) 