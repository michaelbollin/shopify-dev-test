---
id: "shopify-liquid-capture"
title: |
  What's the output of this Liquid code? 🔄

  ```liquid
  {% assign items = "a,b,c" | split: "," %}
  {% capture result %}
    {% for item in items %}
      {{ item }}
    {% endfor %}
  {% endcapture %}
  {{ result | strip }}
  ```
answers:
  - id: "a"
    text: "abc"
  - id: "b"
    text: "a b c"
  - id: "c"
    text: "a,b,c"
  - id: "d"
    text: "['a','b','c']"
correctAnswer: "b"
---

### Explanation

Liquid whitespace handling in capture blocks:

```liquid
# Newlines in capture become spaces
{% capture result %}
  a
  b
  c
{% endcapture %}
{{ result }}  # => " a b c "

# strip filter removes leading/trailing whitespace
{{ " a b c " | strip }}  # => "a b c"
```

Key points:
- Capture preserves whitespace
- Newlines convert to spaces
- Use strip or strip_newlines as needed

Reference: [Liquid Capture](https://shopify.dev/api/liquid/tags/variable#capture) 