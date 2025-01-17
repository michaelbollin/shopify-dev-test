---
title: |
  We are on the homepage. What class will the body tag have when using `<body class="page-{{ page.handle }}">`? 🏷️

answers:
  - id: "a"
    text: "page-home"
  - id: "b"
    text: "page-index"
  - id: "c"
    text: "page-"
  - id: "d"
    text: "page-homepage"
correctAnswer: "c"
seo:
  title: "Shopify Liquid Body Class - Homepage Handle"
  description: "Learn how to correctly set the body class for the homepage in Shopify Liquid."
---

### Explanation

When using `<body class="page-{{ page.handle }}">` on the homepage, the output will be:

```html
<body class="page-">
```

This happens because:
- On the homepage, `page.handle` is empty
- The homepage is not a "page" object in Shopify
- Only the static "page-" prefix remains

Key points:
- Homepage is a special template, not a page
- To target homepage specifically, use `template.name` instead
- For homepage-specific styling, consider using `{% if template.name == 'index' %}`

Reference: [Shopify Template Object](https://shopify.dev/docs/api/liquid/objects/template) 