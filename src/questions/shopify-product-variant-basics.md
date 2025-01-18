---
title: |
  How to access all variants of a product? 🔄

answers:
  - id: "a"
    text: "{{ product.options }}"
  - id: "b"
    text: "{{ product.variations }}"
  - id: "c"
    text: "{{ product.variants }}"
  - id: "d"
    text: "{{ product.all_variants }}"
correctAnswer: "c"
seo:
  title: "Shopify Liquid Product Variants - Access All Variants"
  description: "Learn how to access all variants of a product in Shopify Liquid."
---

### Explanation

To access product variants:

```liquid
{% for variant in product.variants %}
  {{ variant.title }}
  {{ variant.price | money }}
  {{ variant.available }}
{% endfor %}
```

Key points:
- `product.variants` returns array of all variants
- Each variant has:
  - `title`
  - `price`
  - `available`
  - `sku`
  - `option1`, `option2`, `option3`
- Returns empty array if no variants
- First variant is default variant

Reference: [Shopify Product Object](https://shopify.dev/docs/api/liquid/objects/product) 