---
title: |
  How to access the store name and currency? 🏪

answers:
  - id: "a"
    text: "{{ store.name }} and {{ store.currency }}"
  - id: "b"
    text: "{{ shop.name }} and {{ shop.currency }}"
  - id: "c"
    text: "{{ store.title }} and {{ store.money_format }}"
  - id: "d"
    text: "{{ shop.title }} and {{ shop.money_format }}"
correctAnswer: "b"
---

### Explanation

To access store information:

```liquid
{{ shop.name }}     // Store name
{{ shop.currency }} // Store currency (USD, EUR, etc.)
```

Common shop properties:
- `shop.name` - Store name
- `shop.currency` - Store currency
- `shop.email` - Store email
- `shop.domain` - Store's primary domain
- `shop.description` - Store description
- `shop.privacy_policy_url` - Privacy policy URL
- `shop.refund_policy_url` - Refund policy URL

Key points:
- Use `shop` object (not `store`)
- Available globally
- Read-only values
- Set in store admin

Reference: [Shopify Shop Object](https://shopify.dev/docs/api/liquid/objects/shop) 