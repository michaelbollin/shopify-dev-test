---
id: "product-price-simple"
title: |
  How to display a formatted product price in Liquid? 💰

answers:
  - id: "a"
    text: "{{ product.price }}"
  - id: "b"
    text: "{{ product.price | money }}"
  - id: "c"
    text: "{{ product.price | format_money }}"
  - id: "d"
    text: "{{ product.formatted_price }}"
correctAnswer: "b"
---

### Explanation

To display a formatted product price:

```liquid
{{ product.price | money }}
```

Key points:
- `product.price` alone shows raw number (1999)
- `money` filter formats it properly ($19.99)
- Handles currency symbol automatically
- Respects store's currency settings

Other useful variants:
```liquid
{{ product.price | money_without_currency }}     // 19.99
{{ product.price | money_without_trailing_zeros }}  // $19
```

Reference: [Shopify Money Filter](https://shopify.dev/docs/api/liquid/filters/money) 