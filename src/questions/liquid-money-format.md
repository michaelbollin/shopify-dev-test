---
title: |
  What will this Liquid code output?
  ```liquid
  {% assign price = 1999 -%}
  {{ price | money }}
  {{ price | money_without_trailing_zeros }}
  {{ price | money_without_currency }}
  ```

answers:
  - id: "a"
    text: |
      $19.99
      $20
      19.99
  - id: "b"
    text: |
      $19.99
      $19.99
      19.99
  - id: "c"
    text: |
      $20.00
      $20
      20.00
  - id: "d"
    text: |
      $19.99
      null
      19.99
correctAnswer: "b"
seo:
  title: "Shopify Liquid Money Format - money, money_without_trailing_zeros, money_without_currency"
  description: "Learn how to format prices in Shopify Liquid using the `money`, `money_without_trailing_zeros`, and `money_without_currency` filters."
---

### Explanation

This question tests understanding of Shopify's money filters:

1. `price = 1999`: In Shopify, prices are stored in cents
2. `money` filter:
   - Converts cents to dollars
   - Adds currency symbol
   - Shows two decimal places
   - Output: "$19.99"
3. `money_without_trailing_zeros`:
   - This is a valid Liquid filter (not null)
   - Removes unnecessary zeros after decimal point
   - Only removes zeros if amount has no cents
   - In this case outputs "$19.99" since there are actual cents
4. `money_without_currency`:
   - Shows amount without currency symbol
   - Keeps decimal format
   - Output: "19.99" 