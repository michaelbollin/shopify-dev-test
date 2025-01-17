---
title: |
  What will this Liquid code output? 🤔
  ```liquid
  {% assign items = "1,2,3" | split: "," %}
  {% for item in items %}
    {% assign items = "a,b" | split: "," %}
  {% endfor %}
  {{ items | join: "-" }}
  ```

answers:
  - id: "a"
    text: "1-2-3"
  - id: "b"
    text: "a-b"
  - id: "c"
    text: "1-2-3-a-b"
  - id: "d"
    text: "Error: Variable reassignment not allowed"
correctAnswer: "b"
---

### Explanation

This is tricky because it demonstrates that:
1. Variables can be reassigned inside loops
2. The last assignment wins
3. Loop iteration doesn't create a new scope

Step by step:
1. First assigns `items = ["1","2","3"]`
2. Enters loop
3. First iteration: reassigns `items = ["a","b"]`
4. Second iteration: same reassignment
5. Third iteration: same reassignment
6. After loop: `items` is still `["a","b"]`
7. Joins with "-" to output "a-b"

Common misconceptions:
- Thinking loop creates new scope
- Expecting original array to be preserved
- Thinking reassignment isn't allowed
- Expecting concatenation of arrays