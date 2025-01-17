---
title: |
  Which Liquid filter removes all HTML tags from a string? 🧹

answers:
  - id: "a"
    text: "| strip_html"
  - id: "b"
    text: "| remove_html"
  - id: "c"
    text: "| clean_html"
  - id: "d"
    text: "| no_html"
correctAnswer: "a"
seo:
  title: "Shopify Liquid String Manipulation - Truncating HTML"
  description: "Learn how to remove HTML tags from a string in Shopify Liquid using the `strip_html` filter."
---

### Explanation

To remove HTML tags from a string in Liquid, use the `strip_html` filter:

```liquid
{% assign html_text = "<p>Hello <b>World</b>!</p>" %}
{{ html_text | strip_html }}
<!-- Output: Hello World! -->
```

Key points:
- Common string filters:
- Can be chained: `{{ string | strip_html | strip | capitalize }}`
- Useful for cleaning up rich text before display
- Safe to use on strings without HTML

Reference: [Shopify String Filters](https://shopify.dev/docs/api/liquid/filters#html-filters) 