---
title: |
  What will this Liquid code output? 🔄
  ```liquid
  {% for tag in product.tags %}
    {{ tag }}{% unless forloop.last %}, {% endunless %}
  {% endfor %}
  ```

answers:
  - id: "a"
    text: "tag1, tag2, tag3,"
  - id: "b"
    text: "tag1,tag2,tag3"
  - id: "c"
    text: ", tag1, tag2, tag3"
  - id: "d"
    text: "tag1, tag2, tag3"
correctAnswer: "d"
seo:
  title: "Shopify Liquid Forloop Last - comma separated list"
  description: "Learn how to use the `forloop.last` object in Shopify Liquid to create a comma-separated list of tags without a trailing comma."
---

### Explanation

This code creates a comma-separated list of tags without a trailing comma, including spaces.

Key points:
- `forloop.last` is true only for the last iteration
- `unless forloop.last` means "skip this for the last item"
- Common pattern for creating comma-separated lists

Reference: [Shopify Liquid forloop object](https://shopify.dev/docs/api/liquid/objects/forloop) 