---
title: |
  Which Liquid operator is used to check for the presence of a substring inside a string or array? 🔍

answers:
  - id: "a"
    text: "includes"
  - id: "b"
    text: "contains"
  - id: "c"
    text: "has"
  - id: "d"
    text: "in"
correctAnswer: "b"
seo:
  title: "Shopify Liquid Operators - substring inside a string or array"
  description: "Learn how to use the `contains` operator in Shopify Liquid to check for the presence of a substring inside a string or array."
---

### Explanation

The `contains` operator in Liquid is used to check for the presence of a substring inside a string or array.

Key points:
- Used in conditional statements like `if` and `unless`
- Case-sensitive comparison

- Example usage:
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
``` 