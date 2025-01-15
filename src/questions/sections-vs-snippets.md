---
id: "sections-vs-snippets"
title: |
  What are the key differences between sections and snippets in Shopify themes? 🧩

answers:
  - id: "a"
    text: "Sections are for header/footer only, snippets are for all other reusable code"
  - id: "b"
    text: "Snippets can be customized in theme editor, sections cannot"
  - id: "c"
    text: "Sections can be customized in theme editor, snippets are simple reusable code blocks"
  - id: "d"
    text: "There is no difference, they are just stored in different folders"
correctAnswer: "c"
---

### Explanation

Sections and snippets serve different purposes in Shopify themes.

Key points:
- Sections:
  - Support schema settings for customization in theme editor
  - Can be dynamically added/reordered on pages
  - Have their own schema configuration block
  - Can include settings like text fields, images, colors
  - Commonly used for major page components
  - Located in sections/ directory

- Snippets:
  - Simple reusable code blocks without customization settings
  - Cannot be customized through theme editor
  - Used for repeatable HTML/Liquid code
  - Help maintain DRY (Don't Repeat Yourself) principle
  - Located in snippets/ directory
  - Often used for small components like product cards or form fields

Reference: [Shopify Theme Architecture](https://shopify.dev/docs/themes/architecture) 