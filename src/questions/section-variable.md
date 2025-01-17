---
title: |
  How do you access a section setting variable? ⚙️

  ```liquid
  {% schema %}
  {
    "settings": [
      {
        "id": "heading",
        "type": "text",
        "label": "Heading"
      }
    ]
  }
  {% endschema %}
  ```
answers:
  - id: "a"
    text: "{{ settings.heading }}"
  - id: "b"
    text: "{{ section.heading }}"
  - id: "c"
    text: "{{ section.settings.heading }}"
  - id: "d"
    text: "{{ heading }}"
correctAnswer: "c"
---

### Explanation

To access section settings:

```liquid
<!-- ✅ Correct way -->
<h1>{{ section.settings.heading }}</h1>

```

Key points:
- Use `section.settings.` prefix
- Settings are scoped to section
- Available in section template only