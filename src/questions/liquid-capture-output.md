---
title: |
  What will this Liquid code output?
  ```liquid
  {% capture greeting -%}
    Hello
  {%- endcapture -%}
  {{- greeting | append: " " | append: "World" -}}
  {%- for i in (1..3) -%}
    {{- i -}}
  {%- endfor -%}
  ```

answers:
  - id: "a"
    text: "Hello World123"
  - id: "b"
    text: "Hello World 123"
  - id: "c"
    text: |
      Hello World
      123
  - id: "d"
    text: "HelloWorld123"
correctAnswer: "a"
---

### Explanation

This question combines multiple Liquid concepts:

1. `{% capture greeting -%}`: Captures content, removes trailing whitespace
2. `Hello`: The indentation and newlines are captured
3. `{%- endcapture -%}`: Removes whitespace before and after
4. `{{- greeting | append: " " | append: "World" -}}`: 
   - Removes whitespace before and after
   - The captured "Hello" has its whitespace trimmed
   - The `append: " "` adds a space between "Hello" and "World"
5. `{%- for i in (1..3) -%}`: Removes whitespace before and after
6. `{{- i -}}`: Removes whitespace before and after each number

The key points:
- Capture tag preserves internal whitespace until trimmed
- Hyphens in output tags remove whitespace before and after the entire output expression
- The explicit `append: " "` adds a space between "Hello" and "World"
- The for loop outputs numbers without separation due to whitespace control
- The result is "Hello World123" where the space comes from the append filter 