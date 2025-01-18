---
title: |
  What will this Liquid code output? 💰
  ```liquid
  {% assign price = 1999 %}
  {{ price | times: 0.1 | round | money }}
  {{ price | money_without_trailing_zeros }}
  ```

answers:
  - id: "a"
    text: "$1.99 $19.99"
  - id: "b"
    text: "$2.00 $19.99"
  - id: "c"
    text: "$2 $19.99"
  - id: "d"
    text: "$1.999 $19.99"
correctAnswer: "b"
seo:
  title: "Shopify Liquid Money Output with round filter"
  description: "Learn how to analyze the output of the given Liquid code snippet and understand the behavior of the `money` filter."
---

### Explanation

This question tests understanding of Shopify's money handling in Liquid, where prices are stored in cents.

Step by step analysis:
1. First expression:
   - `price = 1999` (represents $19.99 in cents)
   - `times: 0.1` → 199.9 cents ($1.999)
   - `round` → 200 cents ($2.00)
   - `money` → "$2.00"

2. Second expression:
   - `price = 1999` (cents)
   - `money_without_trailing_zeros` → "$19.99"

Money filter behavior:
- Values are stored in cents (1999 = $19.99)
- `money`: Always shows cents
- `money_without_trailing_zeros`: Shows cents if non-zero
- Both add currency symbol
- Both handle decimal placement automatically

Common misconceptions:
- Forgetting values are in cents
- Thinking `round` keeps decimals
- Not realizing math operations work on the cent values
- Thinking the first operation affects the second line 