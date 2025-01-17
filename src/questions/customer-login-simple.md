---
title: |
  How to check if a customer is logged in? 👤

answers:
  - id: "a"
    text: "{% if customer %}"
  - id: "b"
    text: "{% if customer.exists %}"
  - id: "c"
    text: "{% if customer.has_account %}"
  - id: "d"
    text: "{% if customer.active %}"
correctAnswer: "a"
seo:
  title: "How to Check if a Customer is Logged In in Shopify Liquid"
  description: "Learn how to check if a customer is logged in in Shopify using Liquid code. Understand the difference between customer and customer.has_account."
---

### Explanation

To check if a customer is logged in:

```liquid
{% if customer %}
  Welcome back, {{ customer.first_name }}!
{% else %}
  Please log in
{% endif %}
```

Key points:
- Simply use `{% if customer %}` to check login status
- `customer` object evaluates to true when logged in, false when not
- `customer` object available globally
- Common customer properties:
  - `first_name`
  - `last_name`
  - `email`
  - `orders_count`
  - `tags`
- Returns false for guest checkout

Reference: [Shopify Customer Object](https://shopify.dev/docs/api/liquid/objects/customer) 