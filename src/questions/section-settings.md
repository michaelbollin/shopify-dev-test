---
id: "shopify-section-schema"
title: |
  Which schema setting will create a color picker in the theme editor? 🎨

    ```liquid
    {% schema %}
    {
    'name': 'Featured Products',
    'settings': [
        {
        'id': 'background',
        'label': 'Background Color',
        'type': '???'
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
correctAnswer: "a"
---

### Explanation

Schema setting types require specific value formats:

```liquid
"type": "color_picker"
"default": "#ffffff"  ✅  # Hex format required
"default": "white"    ❌  # Named colors not supported

"type": "range"
"default": 20         ✅  # Raw number
"default": "20px"     ❌  # Units handled in template
```

Units and formatting should be applied in the template layer, not schema defaults.

Reference: [Section Schema Settings](https://shopify.dev/themes/architecture/sections/section-schema) 