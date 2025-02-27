---
title: |
  What's the correct way to use 'unless' in Liquid? 🚫

answers:
  - id: "a"
    text: "{% unless condition %}...{% endunless %}"
  - id: "b"
    text: "{% if not condition %}...{% endif %}"
  - id: "c"
    text: "{% unless condition %}...{% end-unless %}"
  - id: "d"
    text: "There is no such tag in Shopify Liquid"
correctAnswer: "a"
seo:
  title: "Shopify Liquid Unless Tag - Negative Conditional"
  description: "Learn how to use the `{% unless %}` tag in Shopify Liquid to create a negative conditional statement."
---

### Explanation

The `unless` tag is a negative conditional in Liquid:

```liquid
{% unless product.available %}
  This product is sold out
{% endunless %}
```

Key points:
- `unless` executes when condition is false
- Cleaner than using `if` with negative condition
- Cannot use `else if` with `unless`
- Can use `else`:
  ```liquid
  {% unless customer %}
    Please log in
  {% else %}
    Welcome back!
  {% endunless %}
  ```
- Best practices:
  - Use for simple negative conditions
  - Use `if` for complex logic
  - Keep blocks short and readable

Reference: [Shopify Control Flow](https://shopify.dev/docs/api/liquid/tags/control-flow) 