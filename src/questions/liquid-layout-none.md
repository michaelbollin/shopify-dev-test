---
id: "liquid-layout-none"
title: |
  What is the effect of using {% layout none %} in a Liquid template? 🏗️

answers:
  - id: "a"
    text: "Removes all content from the page"
  - id: "b"
    text: "Disables the theme editor for the page"
  - id: "c"
    text: "Renders the template without theme.liquid wrapper"
  - id: "d"
    text: "Sets the page layout to none.liquid"
correctAnswer: "c"
---

### Explanation

The `{% layout none %}` tag tells Shopify to render the template without wrapping it in `theme.liquid`.

Key points:
- By default, all templates are wrapped in `theme.liquid`
- Useful for:
  - AJAX responses
  - RSS feeds
  - Custom API endpoints
  - Standalone pages without header/footer
- The template will only output what you explicitly include

Example usage:
```liquid
{% layout none %}
{{ product.title | json }}
```

Reference: [Shopify Layout Tag](https://shopify.dev/docs/api/liquid/tags/layout) 