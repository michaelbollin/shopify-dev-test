---
id: "cart-quantity"
title: |
  How do you display the current cart item count? 🛒

  ```liquid
  <div class="cart-icon">
    <!-- How to show number of items? -->
  </div>
  ```
answers:
  - id: "a"
    text: "{{ cart.count }}"
  - id: "b"
    text: "{{ cart.item_count }}"
  - id: "c"
    text: "{{ cart.items.size }}"
  - id: "d"
    text: "{{ cart.total_items }}"
correctAnswer: "b"
---

### Explanation

To show the cart item count:

```liquid
<!-- ✅ Shows total number of items -->
<span class="cart-count">{{ cart.item_count }}</span>

<!-- ✅ Can also check if cart is empty -->
{% if cart.item_count > 0 %}
  Items: {{ cart.item_count }}
{% else %}
  Cart is empty
{% endif %}
```

Key points:
- `cart.item_count` includes quantities
- Updates automatically with Ajax
- Available globally in theme
- Returns 0 for empty cart 