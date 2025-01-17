---
title: |
  What happens when using: {% render 'product-card' with product as product_item %}

answers:
  - id: "a"
    text: "Renders the snippet with the product object available as the variable 'product_item' inside the snippet"
  - id: "b"
    text: "Throws a syntax error - variable renaming is not supported with 'with'"
  - id: "c"
    text: "Renders the snippet multiple times based on product properties"
  - id: "d"
    text: "Creates a copy of the product object without passing it to the snippet"
correctAnswer: "a"
---

### Explanation

The syntax `{% render 'product-card' with product as product_item %}` renders the snippet and makes the product object available under the variable name `product_item` within the snippet.

Key points:
- `with` passes a single object to the snippet
- `as` allows you to rename the variable inside the snippet
- This is useful to avoid variable name conflicts
- Common use case: `{% render 'product-card' with product as product_item %}` or `{% render 'collection-item' with collection as current_collection %}`

Reference: [Shopify Liquid render tag](https://shopify.dev/docs/api/liquid/tags/render) 