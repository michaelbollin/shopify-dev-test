---
id: "theme-translation"
title: |
  What will this Liquid code output?
  ```liquid
  {%- assign locale_key = 'products.product.sale' -%}
  {% if product.compare_at_price > product.price %}
    {{- locale_key | t: discount: percentage -}}
  {% else %}
    {{- 'products.product.regular_price' | t -}}
  {% endif %}
  ```
  Given these conditions:
  - Product price is $80
  - Compare at price is $100
  - Percentage calculated as 20
  - en.default.json contains:
  ```json
  {
    "products": {
      "product": {
        "sale": "Save {{ discount }}%",
        "regular_price": "Regular price"
      }
    }
  }
  ```

answers:
  - id: "a"
    text: "Save 20%"
  - id: "b"
    text: "Regular price"
  - id: "c"
    text: "products.product.sale"
  - id: "d"
    text: "{{ discount }}%"
correctAnswer: "a"
---

### Explanation

This question tests understanding of Shopify's translation system and liquid variables:

1. `locale_key` is assigned 'products.product.sale'
2. Condition checks if there's a discount (true in this case)
3. Translation filter `t` is used with:
   - The key path 'products.product.sale'
   - A parameter `discount: percentage` (20)
4. The translation string "Save {{ discount }}%" has:
   - The variable placeholder replaced with 20
   - Resulting in "Save 20%"
5. If no discount, would output "Regular price" instead 