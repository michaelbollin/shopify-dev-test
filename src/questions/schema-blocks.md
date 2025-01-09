---
id: "shopify-schema-blocks"
title: |
  What's wrong with this section schema? 🤔

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
    text: "Missing max_blocks limit"
  - id: "b"
    text: "Wrong type name for blocks"
  - id: "c"
    text: "Missing block template code"
  - id: "d"
    text: "Missing block limit and template code"
correctAnswer: "d"
---

### Explanation

Section schema requires two critical components for block implementation:

1. Performance constraints:
```liquid
"max_blocks": 12  # Prevents performance degradation
```

2. Block rendering:
```liquid
{% for block in section.blocks %}
  <div {{ block.shopify_attributes }}>
    {{ block.settings.image | image_url: width: 800 | image_tag }}
  </div>
{% endfor %}
```

`block.shopify_attributes` enables section editor block targeting.

Reference: [Section Blocks](https://shopify.dev/themes/architecture/sections/section-blocks) 