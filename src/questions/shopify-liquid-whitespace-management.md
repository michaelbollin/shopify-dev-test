---
title: |
  What will be the HTML output of this Liquid code? ⬇️
  ```liquid
  <div>
    {%- if product.available -%}
      In stock!
    {%- endif -%}
  </div>
  ```

answers:
  - id: "a"
    text: "<div>-In stock!-</div>"
  - id: "b"
    text: "<div>In stock!</div>"
  - id: "c"
    text: "<div>  In stock!  </div>"
  - id: "d"
    text: "<div>\n    In stock!\n</div>"
correctAnswer: "b"
seo:
  title: "Shopify Liquid Whitespace Control"
  description: "Learn how to control whitespace in Shopify Liquid output tags."
---

### Explanation

The {%- -%} syntax removes whitespace around the tag.

Key points:
- Without hyphens (standard {% %}):
```liquid
<div>
  {% if product.available %}
    In stock!
  {% endif %}
</div>
<!-- Outputs -->
<div>
    In stock!
</div>
```

- With hyphens on both sides ({%- -%}):
```liquid
<div>
  {%- if product.available -%}
    In stock!
  {%- endif -%}
</div>
<!-- Outputs -->
<div>In stock!</div>
```

Reference: [Shopify Liquid Whitespace Control](https://shopify.dev/docs/api/liquid/basics/whitespace) 