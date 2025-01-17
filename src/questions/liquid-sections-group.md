---
id: "liquid-sections-group"
title: |
  What does this Liquid code do? {% sections 'header-group' %} 🔄

answers:
  - id: "a"
    text: |
      Renders a single header section from the sections directory
  - id: "b"
    text: |
      Renders multiple sections that are grouped together under 'header-group'
  - id: "c"
    text: |
      Creates a new section group in the theme editor
  - id: "d"
    text: |
      Returns error - `sections` is not a valid tag
correctAnswer: "b"
---

### Explanation

The `{% sections 'header-group' %}` tag is used to render a group of related sections in Shopify themes:

Key points:
- Section groups allow multiple sections to be managed together
- Different from `{% section %}` which renders a single section
- Common use cases:
  - Header components (announcement bars, menus, logos)
  - Footer sections
  - Related content blocks
- Benefits:
  - Better organization in theme editor
  - Reusable across templates
  - Maintains relationships between sections

Example section group structure:
```liquid
{% sections 'header-group' %}
<!-- Could render: -->
<!-- - Announcement bar section -->
<!-- - Navigation menu section -->
<!-- - Header logo section -->
```

Reference: [Shopify Sections Groups](https://shopify.dev/themes/architecture/sections/section-groups) 