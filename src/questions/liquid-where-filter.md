---
id: "liquid-where-filter"
title: |
  What's wrong with this Liquid code? ❌
  ```liquid
  {% assign available_products = collection.products | where: "available" %}
  {% for product in available_products %}
    {{ product.title }}
  {% endfor %}
  ```

answers:
  - id: "a"
    text: "where filter doesn't exist in Liquid"
  - id: "b"
    text: "Should use where: 'available' instead of where: \"available\""
  - id: "c"
    text: "Should use where: 'available', 'true' (two parameters)"
  - id: "d"
    text: "All is fine with this code"
correctAnswer: "d"
---

### Explanation

The `where` filter in Liquid can be used in two ways:

Key points:
- Single parameter syntax: `array | where: 'property'` - returns objects where the property has any truthy value
- Two parameter syntax: `array | where: 'property', 'value'` - returns objects where the property matches specific value
- Both single and double quotes are valid for parameters
- Case-sensitive matching


In the question's code, using `where: "available"` is perfectly valid and will return all products where the available property is truthy.

Reference: [Shopify Liquid where filter](https://shopify.dev/docs/api/liquid/filters/where) 