---
id: "shopify-liquid-increment"
title: |
  What's wrong with this counter implementation? 🔢

  ```liquid
  {% assign counter %}
  {% for product in collection.products %}
    {% assign counter = counter | plus: 1 %}
    <div class="grid-item grid-item--{{ counter }}">
      {{ product.title }}
    </div>
  {% endfor %}
  ```
answers:
  - id: "a"
    text: "Wrong increment syntax"
  - id: "b"
    text: "Counter not initialized properly"
  - id: "c"
    text: "Missing type casting"
  - id: "d"
    text: "Nothing, code is correct"
correctAnswer: "b"
---

### Explanation

The code has an issue with counter initialization. The line `{% assign counter %}` is incorrect syntax and will cause an error. In Liquid, the `assign` tag requires both a variable name and a value. Without a value assignment, the counter variable remains undefined and cannot be incremented.

The correct implementation would be to initialize the counter with a value:

```liquid
{% assign counter = 0 %}
{% for product in collection.products %}
  {% assign counter = counter | plus: 1 %}
  <div class="grid-item grid-item--{{ counter }}">
    {{ product.title }}
  </div>
{% endfor %}
```

Reference: [Liquid Iteration](https://shopify.dev/api/liquid/tags/iteration) 