---
id: "liquid-stylesheet-tag"
title: |
  Where can the {% stylesheet %} tag be used in Shopify themes? 🎨

answers:
  - id: "a"
    text: |
      In any .liquid file to add CSS styles
  - id: "b"
    text: |
      Only in section files to add scoped styles
  - id: "c"
    text: |
      In theme.liquid to add global styles
  - id: "d"
    text: |
      In snippets to add reusable styles
correctAnswer: "b"
---

### Explanation

The `{% stylesheet %}` tag in Shopify has specific usage rules:

```liquid
{% stylesheet %}
.my-section {
  background: var(--color-background);
  padding: 20px;
}
{% endstylesheet %}
```

Key points:
- Can ONLY be used in section files
- Provides scoped styles for the section
- Part of section architecture
- Cannot be used in regular theme files
- Not for global styles (use assets/theme.css instead)

Example section file structure:
```liquid
{% schema %}
{
  "name": "My Section"
}
{% endschema %}

{% stylesheet %}
/* Section-specific styles here */
{% endstylesheet %}

{% javascript %}
// Section-specific JS here
{% endjavascript %}
```

Reference: [Shopify Liquid stylesheet tag](https://shopify.dev/docs/api/liquid/tags/stylesheet) 