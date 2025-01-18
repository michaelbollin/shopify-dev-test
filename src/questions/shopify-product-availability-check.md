---
title: |
  How to check if a product is available for purchase? ✅

answers:
  - id: "a"
    text: "{% if product.inventory > 0 %}"
  - id: "b"
    text: "{% if product.in_stock %}"
  - id: "c"
    text: "{% if product.available %}"
  - id: "d"
    text: "{% if product.inventory_available %}"
correctAnswer: "c"
seo:
  title: "Shopify Liquid Product Available - Check Product Availability"
  description: "Learn how to check if a product is available for purchase in Shopify Liquid."
---

### Explanation

To check if a product is available:

```liquid
{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <button disabled>Sold Out</button>
{% endif %}
```

Key points:
- `product.available` returns true if:
  - Product is published
  - At least one variant is available
- Works with inventory tracking on/off
- Handles all inventory policies

Reference: [Shopify Product Object](https://shopify.dev/docs/api/liquid/objects/product) 