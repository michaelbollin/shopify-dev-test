---
id: "liquid-output-vs-logic"
title: |
  Which Liquid syntax would you use to create a money formatted 'price' variable? 💰

answers:
  - id: "a"
    text: "{{ money_format product.price }}"
  - id: "b"
    text: "{% assign price = product.price | money %}"
  - id: "c"
    text: "{{ price = product.price | money }}"
  - id: "d"
    text: "{%- product.price as money -%}"
correctAnswer: "b"
---

### Explanation

When you need to store a formatted value for reuse, you need to use `{% assign %}` with logic tags.

Key points:
- Wrong approaches:
  - `{{ product.price | money }}` - Outputs directly, doesn't create a variable
  - `{{ money_format }}` - Not a valid Liquid filter
  - `{%- as money -%}` - Invalid syntax

- Correct approach:
```liquid
{% assign price = product.price | money %}
{{ price }} <!-- Can now reuse this variable -->

<!-- Real world example -->
{% assign sale_price = product.compare_at_price | money %}
{% assign current_price = product.price | money %}

{% if product.compare_at_price > product.price %}
  <del>{{ sale_price }}</del>
  <ins>{{ current_price }}</ins>
{% else %}
  <span>{{ current_price }}</span>
{% endif %}
```

Reference: [Shopify Liquid Variables](https://shopify.dev/docs/api/liquid/basics/variables) 