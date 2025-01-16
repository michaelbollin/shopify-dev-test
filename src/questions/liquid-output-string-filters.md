---
id: "liquid-output-string-filters"
title: |
  What will this Liquid code output? 🔤
  ```liquid
  {% assign text = "hello WORLD" %}
  {{ text | capitalize | replace: 'WORLD', 'Everyone' }}
  ```

answers:
  - id: "a"
    text: "Hello WORLD"
  - id: "b"
    text: "Hello Everyone"
  - id: "c"
    text: "HELLO EVERYONE"
  - id: "d"
    text: "hello everyone"
correctAnswer: "b"
---

### Explanation

Let's break down the code execution step by step:

1. Initial assignment:
   - `text = "hello WORLD"`

2. First filter - `capitalize`:
   - Capitalizes first letter, leaves rest unchanged
   - Result: "Hello WORLD"

3. Second filter - `replace`:
   - Replaces "WORLD" with "Everyone"
   - Result: "Hello Everyone"

Key points:
- Filters are applied from left to right
- `capitalize` only affects the first character
- `replace` is case-sensitive
- Multiple filters can be chained using pipe character `|` 