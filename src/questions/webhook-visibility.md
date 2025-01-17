---
id: "webhook-visibility"
title: |
  You receive webhooks from a Shopify store but cannot see any webhooks in the webhook list in the dashboard. What could be the reason? 🔔

answers:
  - id: "a"
    text: "Webhook was deleted, but old events are still coming through"
  - id: "b"
    text: "Webhook could be created via API, which are not visible in the dashboard"
  - id: "c"
    text: "Webhook could be created by somebody else"
  - id: "d"
    text: "This is impossible - all webhooks must be visible in the dashboard"
correctAnswer: "b"
---

### Explanation

When working with Shopify webhooks, it's important to understand their visibility in the admin dashboard:

Key points:
- Webhooks created through the Admin API are not visible in the Shopify admin dashboard
- This is by design and doesn't affect the webhook functionality
- To view API-created webhooks, you need to:
  - Use the Admin API to list webhooks
- Common scenarios:
  - Custom apps using API to manage webhooks
  - Third-party apps creating webhooks programmatically
  - Automated webhook management through scripts 