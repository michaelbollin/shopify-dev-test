---
title: |
  Which Liquid tags are required in a valid Shopify layout file? 📄

answers:
  - id: "a"
    text: |
      {{ content_for_header }} in <head>
      {{ content_for_layout }} in <body>
  - id: "b"
    text: |
      {{ content_for_head }} in <head>
      {{ content_for_body }} in <body>
  - id: "c"
    text: |
      {{ header_content }} in <head>
      {{ layout_content }} in <body>
  - id: "d"
    text: |
      {{ content_for_header }} in <body>
      {{ content_for_layout }} in <head>
correctAnswer: "a"
seo:
  title: "Shopify Layout File: Required Tags"
  description: "Learn which Liquid tags are required in a valid Shopify layout file and how to use them correctly."
---

### Explanation

Every Shopify layout file (like `theme.liquid`) must include two specific Liquid tags in the correct locations:

1. `{{ content_for_header }}` must be in the `<head>`:
   - Injects required Shopify scripts
   - Includes Google Analytics
   - Adds Shopify analytics
   - Loads app scripts
   - Required for theme validation

2. `{{ content_for_layout }}` must be in the `<body>`:
   - Outputs content from other templates
   - Renders page-specific content
   - Displays sections and blocks
   - Required for theme validation

Example of a minimal valid layout:
```liquid
<!DOCTYPE html>
<html>
  <head>
    {{ content_for_header }}
  </head>
  <body>
    {{ content_for_layout }}
  </body>
</html>
```

Without these tags in the correct locations, Shopify will not validate the theme.

Reference: [Shopify Theme Templates](https://shopify.dev/themes/architecture/templates) 