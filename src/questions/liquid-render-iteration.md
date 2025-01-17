---
id: "liquid-render-iteration"
title: |
  Is this code valid? {% render 'filename' for array as item %}

answers:
  - id: "a"
    text: "Yes, this is valid Liquid syntax for iterating with render"
  - id: "b"
    text: "No, render tags cannot use iteration"
  - id: "c"
    text: "No, the correct syntax is {% render 'filename' with array as item %}"
  - id: "d"
    text: "No, you must use a for loop with render separately"
correctAnswer: "a"
---

### Explanation

Yes, `{% render 'filename' for array as item %}` is valid Liquid syntax. This is a way to use the `render` tag with iteration in Shopify Liquid.

Key points:
- Renders a snippet once for each item in the array
- Makes each array item available as the specified variable name inside the snippet
- More concise than using a separate for loop

Reference: [Shopify Liquid render tag](https://shopify.dev/docs/api/liquid/tags/render) 