---
title: |
  What variable you can use to check if a discount code is applied to cart? 💰

  ```liquid
  <div class="cart">
    <!-- How to show applied discount code? -->
  </div>
  ```
answers:
  - id: "a"
    text: "{{ cart.discount }}"
  - id: "b"
    text: "{{ cart.discount_code }}"
  - id: "c"
    text: "{{ cart.discount_applications }}"
  - id: "d"
    text: "{{ cart.discounts[0].code }}"
correctAnswer: "c"
---

### Explanation

To access applied discount in cart:

```liquid
{% for discount_application in cart.discount_applications %}
  Discount name: {{ discount_application.title }}
{% endfor %}
```

Reference: [Cart discount_applications](https://shopify.dev/docs/api/liquid/objects/cart#cart-discount_applications) 