---
title: |
  What does `cart.item_count` return for this cart? 🛒

  ```liquid
  <!-- Cart contains:
    - 2x T-shirt
    - 3x Mug
    - 1x Hat
  -->
  {{ cart.item_count }}
  ```
answers:
  - id: "a"
    text: "3 (number of unique products)"
  - id: "b"
    text: "6 (total quantity of all items)"
  - id: "c"
    text: "6.0 (float number)"
  - id: "d"
    text: "3.0 (float number)"
correctAnswer: "b"
seo:
  title: "Total cart item count in Shopify variable"
  description: "Learn how to calculate cart item count in Shopify with this quiz question."
---

### Explanation

`cart.item_count` returns the total quantity of all items:

```liquid
<!-- Example cart -->
{% for item in cart.items %}
  {{ item.product.title }}: {{ item.quantity }}
{% endfor %}

<!-- Different cart properties -->
{{ cart.item_count }}     <!-- ✅ Returns: 6 (total quantities) -->
{{ cart.items | size }}   <!-- Returns: 3 (unique products) -->

```

Key points:
- Counts total quantities, not unique products
- In example: 2 + 3 + 1 = 6 items
- Returns integer, not float
- Updates automatically with cart changes (but needs page reload)