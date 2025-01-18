---
title: |
  Which code sample correctly uses the stylesheet tag? 🎯

answers:
  - id: "a"
    text: |
      {% stylesheet %}
        .section-{{ section.id }} {
          background: {{ settings.bg_color }};
        }
      {% endstylesheet %}
  - id: "b"
    text: |
      {% style %}
        .section-{{ section.id }} {
          background: {{ settings.bg_color }};
        }
      {% endstyle %}
  - id: "c"
    text: |
      {% stylesheet %}
        .my-section {
          background: var(--bg-color);
        }
      {% endstylesheet %}
  - id: "d"
    text: |
      {% stylesheet %}
        {% if section.settings.enabled %}
          .my-section {
            display: block;
          }
        {% else %}
          .my-section {
            display: none;
          }
        {% endif %}
      {% endstylesheet %}
correctAnswer: "c"
seo:
  title: "Shopify Liquid Stylesheet Tag - Dynamic Styles"
  description: "Learn how to use the `{% stylesheet %}` tag in Shopify Liquid to define dynamic styles."
---

### Explanation

The `{% stylesheet %}` tag has important restrictions:

Key points:
- Cannot contain Liquid variables or tags
- Must be pure CSS only
- Use CSS custom properties (variables) instead
- For dynamic styles, use `{% style %}` tag instead

❌ Wrong approaches:
```liquid
{% stylesheet %}
  .section-{{ section.id }} {  /* Wrong! No Liquid variables */
    color: {{ settings.color }}; 
  }
{% endstylesheet %}

{% stylesheet %}
  {% if section.settings.enabled %}  /* Wrong! No Liquid control flow */
    .my-section { display: block; }
  {% endif %}
{% endstylesheet %}
```

✅ Correct approaches:

1. For static section styles:
```liquid
{% stylesheet %}
  .my-section {
    color: var(--section-color);
    background: var(--section-bg);
  }
{% endstylesheet %}
```

2. For dynamic styles, use `{% style %}` instead:
```liquid
{% style %}
  .section-{{ section.id }} {
    --section-color: {{ settings.color }};
    --section-bg: {{ settings.background }};
  }
{% endstyle %}
```

Reference: [Shopify Liquid stylesheet tag](https://shopify.dev/docs/api/liquid/tags/stylesheet) 