---
title: |
  Which webhook topic should you subscribe to for tracking when a customer updates their information? 👤

answers:
  - id: "a"
    text: "customers/edit"
  - id: "b"
    text: "customers/modify"
  - id: "c"
    text: "customers/update"
  - id: "d"
    text: "customers/change"
correctAnswer: "c"
seo:
  title: "Shopify Webhook Topics - Customer Updates"
  description: "Learn which webhook topic to subscribe to for tracking customer updates in Shopify."
---

### Explanation

The correct webhook topic for customer updates is `customers/update`.

Key points:
- Standard webhook topic format: `resource/action`
- Common customer-related topics:
  - `customers/create`: New customer signup
  - `customers/update`: Customer information changes
  - `customers/delete`: Customer account deletion
  - `customers/disable`: Customer account disabled
  - `customers/enable`: Customer account enabled