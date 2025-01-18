---
title: |
  Which schema setting will create a color picker in the theme editor? 🎨

    ```liquid
    {% schema %}
    {
      "name": "Featured Products",
      "settings": [
        {
          "id": "background",
          "label": "Background Color", 
          "type": "???"
        }
      ]
    }
    {% endschema %}
    ```
answers:
  - id: "a"
    text: "color_picker"
  - id: "b"
    text: "color"
  - id: "c"
    text: "colorpicker"
  - id: "d"
    text: "background_color"
correctAnswer: "b"
seo:
  title: "Shopify Section Schema Settings - Color Picker"
  description: "Learn how to add a color picker to a section in Shopify using the correct schema setting."
---

### Explanation

The correct type for adding a color picker in Shopify section settings is `"color"`. This will create a color picker interface in the theme editor.

Reference: [Section Schema Settings](https://shopify.dev/themes/architecture/sections/section-schema) 