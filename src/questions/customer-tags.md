---
id: "customer-tags"
title: |
  What will this Liquid code output?
  ```liquid
  {%- if customer.tags contains 'VIP' -%}
    {%- if customer.orders_count > 5 -%}
      {{- 'Premium VIP' -}}
    {%- else -%}
      {{- 'VIP' -}}
    {%- endif -%}
  {%- elsif customer.orders_count > 2 -%}
    {{- 'Regular' -}}
  {%- else -%}
    {{- 'New' -}}
  {%- endif -%}
  ```
  Given these conditions:
  - Customer tags: ["newsletter", "VIP"]
  - Customer orders count: 3

answers:
  - id: "a"
    text: "VIP"
  - id: "b"
    text: "Premium VIP"
  - id: "c"
    text: "Regular"
  - id: "d"
    text: "New"
correctAnswer: "a"
---

### Explanation

This question tests understanding of Shopify's customer object and conditional logic:

1. First condition - `customer.tags contains 'VIP'`:
   - Customer has tags ["newsletter", "VIP"]
   - Contains 'VIP', so this condition is true
2. Nested condition - `customer.orders_count > 5`:
   - Customer has 3 orders
   - 3 is not > 5, so this is false
   - Outputs "VIP" from the else branch
3. Other conditions not reached:
   - `customer.orders_count > 2` would be true
   - But we already matched first condition
4. Whitespace control (-):
   - Removes all spaces around output
   - Results in clean "VIP" string
5. Note: Tag checking is case-sensitive in Shopify 