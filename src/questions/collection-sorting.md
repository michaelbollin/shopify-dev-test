---
title: |
  What will this Liquid code output?
  ```liquid
  {%- assign sorted = collection.products | sort: 'price' | reverse -%}
  {%- for product in sorted limit:2 -%}
    {%- if product.available -%}
      {{- product.title | append: ': ' -}}
      {{- product.price | money -}}
      {{- ', ' -}}
    {%- endif -%}
  {%- endfor -%}
  ```
  Given these products in collection:
  ```json
  {
    "products": [
      {
        "title": "Shirt",
        "price": 2999,
        "available": true
      },
      {
        "title": "Hat",
        "price": 1999,
        "available": false
      },
      {
        "title": "Pants",
        "price": 3999,
        "available": false
      },
      {
        "title": "Shoes",
        "price": 4999,
        "available": true
      }
    ]
  }
  ```

answers:
  - id: "a"
    text: "Shoes: $49.99, "
  - id: "b"
    text: "Shoes: $49.99, Pants: $39.99, "
  - id: "c"
    text: "Shoes: $49.99, Shirt: $29.99, "
  - id: "d"
    text: "Shirt: $29.99, "
correctAnswer: "a"
---

### Explanation

1. Initial sorting:
   - `sort: 'price'` orders by price ascending
   - `reverse` makes it descending
   - Order: Shoes ($49.99), Pants ($39.99), Shirt ($29.99), Hat ($19.99)
2. Critical loop behavior:
   - `limit:2` restricts to ONLY first two products (Shoes and Pants)
   - Loop stops after checking these two, even if they're not available
   - `if product.available` then filters within these two products
3. First iteration:
   - Shoes is available
   - Outputs "Shoes: $49.99, "
4. Second iteration:
   - Pants is not available
   - No output
5. Loop ends due to limit:2
   - Never reaches Shirt despite it being available
   - Only outputs the one available product from first two 