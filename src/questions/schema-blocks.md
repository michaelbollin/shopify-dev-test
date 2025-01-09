---
id: "shopify-schema-blocks"
title: |
  Can you add this section to a page via the visual theme editor? 🤔

  ```liquid
  {% schema %}
  {
    "name": "Image Gallery",
    "blocks": [
      {
        "type": "image",
        "name": "Image",
        "settings": [
          {
            "type": "image_picker",
            "id": "image",
            "label": "Image"
          }
        ]
      }
    ]
  }
  {% endschema %}
  ```
answers:
  - id: "a"
    text: "No - missing presets configuration"
  - id: "b"
    text: "Yes - all required fields are present"
  - id: "c"
    text: "No - missing template markup"
  - id: "d"
    text: "Yes - but blocks won't render"
correctAnswer: "a"
---

### Explanation

No, this section cannot be added through the theme editor because it's missing presets. 

For a section to appear in the "Add section" list, it must have a `presets` configuration:

```liquid
"presets": [
  {
    "name": "Image Gallery",
    "blocks": [
      {
        "type": "image"
      }
    ]
  }
]
```

Without presets, this would only work as a static section that's directly included in a layout file (like header.liquid or footer.liquid). For dynamic sections that users can add through the theme editor, presets are required.

Note: The section is also missing template markup which would prevent the blocks from rendering, but that's not relevant to the specific question of whether it can be added via the editor.

Reference: [Section Blocks](https://shopify.dev/themes/architecture/sections/section-blocks) 