---
title: |
  What will this Liquid code output? 🤔
  ```liquid
  {{ product.metafields.custom.not_existing_metafield | default: 'Standard' }}
  {{ nil | default: 'Nothing' }}
  {{ false | default: 'Nope' }}
  ```

answers:
  - id: "a"
    text: "Standard Nothing Nope"
  - id: "b"
    text: "Standard Nothing false"
  - id: "c"
    text: "Standard\nNothing\nfalse"
  - id: "d"
    text: "StandardNothingfalse"
correctAnswer: "a"
---

### Explanation

The `default` filter provides a fallback value when a variable is falsy. According to [Liquid's truthy and falsy documentation](https://shopify.github.io/liquid/basics/truthy-and-falsy/), only `nil` and `false` are falsy values. In this example:

1. `product.metafields.custom.not_existing_metafield` is nil (undefined) → outputs "Standard"
2. `nil` triggers the default value → outputs "Nothing"
3. `false` is falsy, so the default IS used → outputs "Nope"

Key points:
- Returns default value when input is falsy:
  - nil (undefined)
  - false

Reference: [Shopify Liquid default filter](https://shopify.dev/docs/api/liquid/filters/default) 