---
title: |
  How do you pass Liquid variables to JavaScript in a theme? 💭
answers:
  - id: "a"
    text: "var product = {{ my_product }}"
  - id: "b"
    text: "var product = {{ my_product | json }}"
  - id: "c"
    text: "var product = '{{ my_product }}'"
  - id: "d"
    text: "var product = {%= my_product %}"
correctAnswer: "b"
---

### Explanation

To safely pass Liquid variables to JavaScript:

```liquid
<script>
  // ❌ Will return ProductDrop string and cause syntax error
   var product = {{ my_product }};

  // ✅ Correct way - properly escaped JSON
  var product = {{ my_product | json }};
</script>
```

Key points:
- Use `json` filter to properly escape data
- Prevents JavaScript syntax errors
- Handles nested objects correctly
- Works with arrays and complex objects 