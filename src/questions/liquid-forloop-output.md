---
id: "liquid-forloop-output"
title: |
  What will this Liquid code output? 🔄
  ```liquid
  {% assign items = "a,b" | split: "," %}
  {% for item in items %}
    {% if forloop.first %}{{ forloop.length }}{% endif %}
    {{ item }}
    {% if forloop.last %}{{ forloop.index }}{% endif %}
  {% endfor %}
  ```

answers:
  - id: "a"
    text: "2 a b 2"
  - id: "b"
    text: "2ab2"
  - id: "c"
    text: "2 a b 1"
  - id: "d"
    text: "1ab2"
correctAnswer: "a"
---

### Explanation

This is tricky because it combines multiple forloop variables, conditional output, and Liquid's whitespace behavior.

Step by step:
1. Creates array `["a","b"]`
2. First iteration:
   - `forloop.first` is true
   - `forloop.length` is 2
   - Outputs "2"
   - Outputs "a"
   - `forloop.last` is false
3. Second iteration:
   - `forloop.first` is false
   - Outputs "b"
   - `forloop.last` is true
   - `forloop.index` is 2
   - Outputs "2"

Final output: "2 a b 2" (with spaces between elements due to line breaks in the template)

Available forloop variables:
- `forloop.length`: Total iterations (2)
- `forloop.index`: Current iteration (1-based)
- `forloop.index0`: Current iteration (0-based)
- `forloop.first`: True on first iteration
- `forloop.last`: True on last iteration

Common misconceptions:
- Thinking whitespace is stripped (it's preserved by default)
- Confusing index with length
- Thinking index is 0-based
- Missing conditional output timing 