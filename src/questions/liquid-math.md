---
title: |
  How do you round a number to the nearest integer in Liquid? 🔢

answers:
  - id: "a"
    text: "| round"
  - id: "b"
    text: "| floor"
  - id: "c"
    text: "| ceil"
  - id: "d"
    text: "| int"
correctAnswer: "a"
---

### Explanation

To round numbers in Liquid, use the `round` filter:

```liquid
{{ 4.6 | round }}
<!-- Output: 5 -->

{{ 4.3 | round }}
<!-- Output: 4 -->

{{ 4.5 | round: 1 }}
<!-- Output: 4.5 -->
```

Key points:
- Math filters available:
  - `round`: Rounds to nearest integer
  - `ceil`: Rounds up
  - `floor`: Rounds down
  - `plus`: Adds numbers
  - `minus`: Subtracts numbers
  - `times`: Multiplies numbers
  - `divided_by`: Divides numbers
- Can specify decimal places: `| round: 2`
- Works with variables and literal numbers
- Useful for price formatting and calculations
- Division always returns a float

Reference: [Shopify Math Filters](https://shopify.dev/docs/api/liquid/filters#math-filters) 