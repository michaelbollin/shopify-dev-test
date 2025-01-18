---
title: |
  What's wrong with this range setting? 🔢

  ```liquid
  {% schema %}
  {
    "settings": [
      {
        "type": "range",
        "id": "padding",
        "label": "Padding",
        "default": 20
      }
    ]
  }
  {% endschema %}
  ```
answers:
  - id: "a"
    text: "Default needs to be a string with px"
  - id: "b"
    text: "Missing required min and max values"
  - id: "c"
    text: "Name is missing"
  - id: "d"
    text: "We need blocks defined, evenn if empty"
correctAnswer: "b"
seo:
  title: "Shopify Range Settings: Default Value and Required Fields"
  description: "Learn how to set default values for range settings."
---

### Quick Explanation 🎯

Range settings must include min and max values:

```liquid
"type": "range"
"min": 0,            ✅  (required)
"max": 100,          ✅  (required)
"default": 20        ✅  (number is correct format)
```

💡 Tip: Range inputs always require min and max values. The default value is already correct as a number! 
```

</rewritten_file>