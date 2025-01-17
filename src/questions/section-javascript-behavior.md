---
title: |
  What happens to this section code when the page loads? 🔄

  ```liquid
  {% javascript %}
    function toggleSection() {
      const section = document.querySelector('.my-section');
      section.classList.toggle('active');
    }
  {% endjavascript %}
  ```

answers:
  - id: "a"
    text: |
      Converts to a <script> tag exactly where it's placed in the section
  - id: "b"
    text: |
      Gets moved to the bottom of the page
  - id: "c"
    text: |
      Gets injected into content_for_header
  - id: "d"
    text: |
      Gets moved to theme.js file automatically
correctAnswer: "c"
---

### Explanation

The `{% javascript %}` tag in sections has specific behavior:

Key points:
- JavaScript from all sections is concatenated into a single file
- Gets injected through `content_for_header` Liquid object
- Loaded asynchronously with `defer` attribute
- Each section's code is wrapped in a self-executing anonymous function
- Variables are scoped within a closure
- Only injected once per section type (not per instance)

Example of how it's processed:
```javascript
// Original section code
{% javascript %}
  function toggleSection() {
    const section = document.querySelector('.my-section');
    section.classList.toggle('active');
  }
{% endjavascript %}

// Gets transformed into something like:
(function() {
  function toggleSection() {
    const section = document.querySelector('.my-section');
    section.classList.toggle('active');
  }
})();
```

Important notes:
- Each section can only have ONE `{% javascript %}` tag
- Multiple tags will result in an error
- For instance-specific JS, use data attributes
- Runtime errors won't affect other sections due to closure

Reference: [Shopify Section Assets - JavaScript](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-assets#javascript) 