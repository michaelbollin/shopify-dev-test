---
title: |
  What does the `t` filter do in this Liquid code? 🔤
  ```liquid
  {{ 'products.product.add_to_cart' | t }}
  ```

answers:
  - id: "a"
    text: "Truncates the text to a specified length"
  - id: "b"
    text: "Transforms the text to title case"
  - id: "c"
    text: "Looks up the translation key in the active language's locale file and returns the corresponding value"
  - id: "d"
    text: "Adds HTML tags around the text for styling"
correctAnswer: "c"
seo:
  title: "Shopify Liquid Translation Filter for localization"
  description: "Learn how to use the `t` filter in Shopify Liquid to translate content based on the active language."
---

### Explanation

The `t` filter is used for internationalization in Shopify themes. It translates content based on the active language.

Key points:
- Purpose:
  - Retrieves translations from locale files
  - Enables multi-language support
  - Maintains consistent translations
  - Supports nested translation keys

- Example usage:
```liquid
<!-- With HTML -->
<button>{{ 'products.product.add_to_cart' | t }}</button>

```

- How it works:
  1. Takes a translation key (e.g., 'products.product.add_to_cart')
  2. Checks the active language's locale file (e.g., fr.default.json)
  3. Returns the corresponding translation
  4. Falls back to default locale if translation missing

- Best practices:
  - Use consistent key naming
  - Keep translations organized by feature
  - Always provide default translations
  - Use dot notation for nesting
  - Keep HTML in templates, not translations 