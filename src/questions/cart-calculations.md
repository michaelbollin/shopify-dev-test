---
id: "cart-calculations"
title: |
  What will this Liquid code output?
  ```liquid
  {%- assign subtotal = cart.items_subtotal_price -%}
  {%- if cart.item_count >= 3 -%}
    {%- assign discount = subtotal | times: 0.1 -%}
    {{- subtotal | minus: discount | money -}}
  {%- else -%}
    {{- subtotal | money }}
    (Add {{  3 | minus: cart.item_count | append: ' more items for 10% off)' -}}
  {%- endif -%}
  ```
  Given these cart conditions:
  ```json
  {
    "items_subtotal_price": 5999,
    "item_count": 2
  }
  ```

answers:
  - id: "a"
    text: "$59.99 (Add 1 more items for 10% off)"
  - id: "b"
    text: "$53.99"
  - id: "c"
    text: "$59.99"
  - id: "d"
    text: "$59.99 (Add 3 more items for 10% off)"
correctAnswer: "a"
---

### Explanation

This question tests understanding of Shopify's cart calculations and conditional messaging:

1. Initial values:
   - Subtotal: $59.99 (5999 cents)
   - Item count: 2
2. First condition - `cart.item_count >= 3`:
   - 2 items is less than 3
   - False, so goes to else branch
3. Else branch output:
   - First outputs subtotal with money filter: "$59.99"
   - Outputs "(Add "
   - Then outputs number of items needed:
     - Calculates items needed with `3 | minus: cart.item_count` (equals 1)
     - Combines with " more items for 10% off)" text
4. Final output shows on two separate lines:
   - The price: "$59.99"
   - The message: "(Add 1 more items for 10% off)" 