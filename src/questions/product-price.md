---
id: "product-price-access"
title: |
  How do you display a formatted product's price in Liquid? 🏷️

  ```liquid
  <div class="product-card">
    <h2>{{ product.title }}</h2>
    <!-- How to show price? -->
  </div>
  ```
answers:
  - id: "a"
    text: "{{ product.price }}"
  - id: "b"
    text: "{{ product.price | money }}"
  - id: "c"
    text: "{{ product.price | format:money }}"
  - id: "d"
    text: "{{ product.formatted_price }}"
correctAnswer: "b"
---

### Explanation

To display a product's price in Liquid:

```liquid
<!-- ❌ Shows raw number: 1999 -->
{{ product.price }}

<!-- ✅ Formats price correctly: $19.99 -->
{{ product.price | money }}

<!-- ✅ Also valid for different formats -->
{{ product.price | money_without_trailing_zeros }}
{{ product.price | money_without_currency }}
```

Key points:
- Always use the `money` filter for proper formatting
- Price is stored in cents (1999 = $19.99)
- Filter handles currency symbol and decimals
- Respects store's currency settings 