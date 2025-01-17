---
title: |
  How to access product metafields in a theme? 🔍

answers:
  - id: "a"
    text: "{{ product.metafields }}"
  - id: "b"
    text: "{{ product.metafields.namespace.key }}"
  - id: "c"
    text: "{{ product.meta_fields.namespace.key }}"
  - id: "d"
    text: "{{ product.get_metafield('namespace', 'key') }}"
correctAnswer: "b"
---

### Explanation

To access metafields in Liquid templates:

1. Use the format `object.metafields.namespace.key`
2. Example: `{{ product.metafields.custom.ingredients }}`
3. Metafields must be defined in theme settings first

Reference: [Shopify Metafields in Themes](https://shopify.dev/docs/themes/architecture/templates/product) 