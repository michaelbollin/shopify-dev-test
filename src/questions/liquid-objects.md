---
id: "shopify-liquid-objects"
title: |
  When will this Liquid code output the variant price? 🛍️

  ```liquid
  {%- if product.selected_variant -%}
    {{ product.selected_variant.price | money }}
  {%- endif -%}
  ```
answers:
  - id: "a"
    text: "When a variant is selected using JavaScript in the browser"
  - id: "b"
    text: "When the URL includes a ?variant= parameter"
  - id: "c"
    text: "On every product page load, product has always a selected_variant"
  - id: "d"
    text: "Only when viewing the first variant of a product"
correctAnswer: "b"
---

### Explanation

The `product.selected_variant` object is specifically tied to URL parameters:

- Only populated when `?variant=123456789` is present in the URL
- Returns `nil` if no variant parameter exists
- Not affected by JavaScript variant selection (would need page reload)
- Does not automatically select first variant
- Common usage: maintaining variant selection after page refresh

Example URL: `https://store.myshopify.com/products/t-shirt?variant=123456789`

Reference: [Shopify Product Object](https://shopify.dev/docs/api/liquid/objects/product) 