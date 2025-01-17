---
id: "cart-line-items"
title: |
  What will this Liquid code output?
  ```liquid
  {% assign total = 0 -%}
  {%- for item in cart.items -%}
    {%- if item.product.type == "Shirt" -%}
      {%- assign total = total | plus: item.quantity -%}
    {%- endif -%}
  {%- endfor -%}
  {{- total -}}
  ```
  Given the following cart contents:
  ```json
  {
    "items": [
      {"product": {"type": "Shirt"}, "quantity": 2},
      {"product": {"type": "Pants"}, "quantity": 1},
      {"product": {"type": "Shirt"}, "quantity": 3}
    ]
  }
  ```

answers:
  - id: "a"
    text: "5"
  - id: "b"
    text: "6"
  - id: "c"
    text: "3"
  - id: "d"
    text: "2"
correctAnswer: "a"
---

### Explanation

This question tests understanding of Shopify's cart object and Liquid iteration:

1. We initialize `total = 0`
2. We iterate through `cart.items`
3. For each item:
   - Check if product type is "Shirt"
   - If true, add item's quantity to total
4. Final calculation:
   - First Shirt: quantity 2
   - Second Shirt: quantity 3
   - Pants are ignored
   - Total: 2 + 3 = 5
5. Whitespace control (-) ensures clean output 