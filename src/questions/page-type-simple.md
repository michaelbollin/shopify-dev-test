---
title: |
  How to check what type of page you're on (product, collection, etc.)? 📄

answers:
  - id: "a"
    text: "{% if page.type == 'product' %}"
  - id: "b"
    text: "{% if template == 'product' %}"
  - id: "c"
    text: "{% if page_type == 'product' %}"
  - id: "d"
    text: "{% if request.page_type == 'product' %}"
correctAnswer: "d"
seo:
  title: "Shopify Liquid Template Type and How to Check It"
  description: "Learn how to check the current page type in Shopify Liquid using the `request.page_type` object."
---

### Explanation

To check the current page type:

```liquid
{% if request.page_type == 'product' %}
  // Product page specific content
{% endif %}
```

Common page types:
- `product`
- `collection`
- `page`
- `blog`
- `article`
- `cart`
- `index` (home page)

Key points:
- Use `request.page_type`
- Available globally
- Returns string value
- Case sensitive comparison

Reference: [Shopify Request Object](https://shopify.dev/docs/api/liquid/objects/request) 