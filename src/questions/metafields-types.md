---
id: "metafields-types"
title: |
  How should rich text metafields be rendered in Liquid to return HTML? 📝

answers:
  - id: "a"
    text: "{{ product.metafields.namespace.key }}"
  - id: "b"
    text: "{{ product.metafields.namespace.key | metafield_tag }}"
  - id: "c"
    text: "{{ product.metafields.key | metafield_tag }}"
  - id: "d"
    text: "{{ product.metafields.namespace.key | rich_text }}"
correctAnswer: "b"
---

### Explanation

To properly render rich text metafields in Liquid, `{{ metafield.value | metafield_tag }}` is the correct approach because:

1. The `metafield_tag` filter automatically handles the appropriate HTML rendering
2. It safely converts the rich text content into properly formatted HTML
3. It includes security measures to prevent XSS attacks

Simply using `{{ metafield.value }}` would output raw JSON, while `rich_text` is not a valid Liquid filter. The `metafield_tag` filter is specifically designed to handle different metafield types, including rich text content.

Reference: [Shopify Metafields in Liquid](https://shopify.dev/themes/architecture/templates/metafields-in-liquid) 