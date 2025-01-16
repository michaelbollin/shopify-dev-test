---
id: "liquid-output-array-join"
title: |
  What will this Liquid code output? 🔄
  ```liquid
  {% assign fruits = "apple, banana, orange" | split: ", " %}
  {{ fruits | join: " and " }}
  ```

answers:
  - id: "a"
    text: "apple and banana and orange"
  - id: "b"
    text: "apple,banana,orange"
  - id: "c"
    text: "apple banana orange"
  - id: "d"
    text: "[apple, banana, orange]"
correctAnswer: "a"
---

### Explanation

Let's break down how this code works:

1. First operation: `split: ", "`
   - Takes "apple, banana, orange"
   - Splits it into array: `["apple", "banana", "orange"]`

2. Second operation: `join: " and "`
   - Takes the array
   - Joins elements with " and " between them
   - Results in: "apple and banana and orange"

Key points:
- `split` filter creates an array from a string
- `join` filter combines array elements into a string
- The joining text can be any string
- Useful for creating readable lists in content 