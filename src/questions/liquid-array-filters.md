---
id: "liquid-array-filters"
title: |
  Which Liquid filter is used to sort an array in ascending order? 🔄

answers:
  - id: "a"
    text: "| sort"
  - id: "b"
    text: "| array_sort"
  - id: "c"
    text: "| order"
  - id: "d"
    text: "| ascending"
correctAnswer: "a"
---

### Explanation

To sort arrays in Liquid, use the `sort` filter:

```liquid
{% assign my_array = "zebra, yak, xylophone" | split: ", " %}
{{ my_array | sort | join: ", " }}
<!-- Output: xylophone, yak, zebra -->
```

Key points:
- `sort` works on arrays of strings or numbers
- Sorts in ascending order by default

Reference: [Shopify Liquid Filters](https://shopify.dev/docs/api/liquid/filters) 