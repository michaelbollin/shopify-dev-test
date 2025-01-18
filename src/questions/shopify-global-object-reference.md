---
title: |
  Why doesn't this code work on the cart page? 🛒

  ```liquid
  {% if product.available %}
    <button>Add to Cart</button>
  {% else %}
    <button disabled>Sold Out</button>
  {% endif %}
  ```
answers:
  - id: "a"
    text: "Wrong if statement syntax"
  - id: "b"
    text: "product object not available on cart page"
  - id: "c"
    text: "available is not a valid property"
  - id: "d"
    text: "You cannot add to cart on the cart page"
correctAnswer: "b"
seo:
  title: "Shopify Cart Page: Product Availability Check"
  description: "Learn how to check product availability on the cart page in Shopify using Liquid code."
---

### Quick Explanation 🎯

The `product` object only exists on product pages. Other pages can't access it!

🔑 Key Objects:
- Page-specific: `product`, `collection`, `article`
- Available everywhere: `cart`, `shop`, `request`

💡 Tip: Always check `request.page_type` before using page-specific objects 