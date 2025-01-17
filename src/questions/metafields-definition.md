---
title: |
  Where should metafields be defined for theme access? 📝

answers:
  - id: "a"
    text: "In Admin API or Store Admin"
  - id: "b"
    text: "In theme.liquid"
  - id: "c"
    text: "In settings_schema.json"
  - id: "d"
    text: "In metafields_schema.json"
correctAnswer: "a"
seo:
  title: "Shopify Metafields Definition - How to define metafields for theme access"
  description: "Learn where to define metafields for theme access in Shopify."
---

### Explanation

Metafields must be created through the Admin API or Store Admin:

1. Metafields are store data, not theme data
2. They persist independently of the theme
3. Can be created via:
   - Store Admin > Settings > Custom data
   - Admin API
   - Apps with proper permissions

The theme's settings_schema.json only defines how existing metafields are displayed in the theme editor, but doesn't create the actual metafields.

Reference: [Shopify Metafields](https://shopify.dev/docs/apps/custom-data/metafields) 