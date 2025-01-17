---
title: |
  How to get the current page path? 🔗

answers:
  - id: "a"
    text: "{{ page.url }}"
  - id: "b"
    text: "{{ current_path }}"
  - id: "c"
    text: "{{ request.path }}"
  - id: "d"
    text: "{{ shop.url }}"
correctAnswer: "c"
---

### Explanation

To get the current page path:

```liquid
{{ request.path }}  // Returns the path portion of the URL
```

Key points:
- `request.path` returns the path portion of the URL
- Available globally
- Useful for conditional logic

Example:
```liquid
{% if request.path contains '/products/' %}

{% endif %}
```

Reference: [Shopify Request Object](https://shopify.dev/docs/api/liquid/objects/request) 