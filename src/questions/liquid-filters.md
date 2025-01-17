---
title: |
  What's the output of this Liquid code? Assume we have products and are in a collection. 🔍

  ```liquid
  {% assign titles = collection.products | map: 'title' %}
  {{ titles | join: "-" }}
  ```
answers:
  - id: "a"
    text: "T-shirt-Hoodie-Jeans"
  - id: "b"
    text: "Error: invalid filter"
  - id: "c"
    text: "EmptyDrop"
  - id: "d"
    text: "collection.products.title"
correctAnswer: "a"
seo:
  title: "Shopify Liquid Filters - map and join"
  description: "Learn how to use the `map` filter in Shopify Liquid to extract property values from an array of objects and join them with a delimiter."
---

### Explanation

The `map` filter extracts property values from an array of objects:

```liquid
# collection.products is an array of product objects:
collection.products = [
  { "title": "T-shirt", "price": "20.00",... },
  { "title": "Hoodie", "price": "45.00",... },
  { "title": "Jeans", "price": "60.00",... }
]

# map extracts the 'title' property from each product
collection.products | map: 'title'    # => ["T-shirt", "Hoodie", "Jeans"]

# join combines the array with a delimiter
| join: "-"                          # => "T-shirt-Hoodie-Jeans"
```

The `map` filter is commonly used with `collection.products` to extract product properties like `title`, `price`, `url`, etc.

Reference: [Shopify Liquid map filter](https://shopify.dev/docs/api/liquid/filters/map) 