---
title: |
  What is wrong with that code? 🛍️

  ```javascript
  async function updateCartAttributes() {
    const response = await fetch('/cart/update.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        attributes: {
          'note': 'Please gift wrap',
          '__sign': 'For Julia',
        }
      })
    });
    return await response.json();
  }
  ```
answers:
  - id: "a"
    text: "Nothing, all is good"
  - id: "b"
    text: "Attribute cannot have double underscore prefix"
  - id: "c"
    text: "Cart cannot have attributes"
  - id: "d"
    text: "It's missing product/variant id"
correctAnswer: "a"
seo:
  title: "How to update cart attributes in Shopify"
  description: "Learn how to update cart attributes in Shopify with this quiz question."
---

### Explanation

The code is perfectly valid. Let's break down why each answer is incorrect except A:

1. ✅ "Nothing, all is good" - Correct!

2. ❌ "Attribute cannot have double underscore prefix" - Double underscore prefix is specifically allowed and used to create private attributes that won't be accessible in Liquid

3. ❌ "Cart cannot have attributes" - Cart attributes are a core feature of Shopify's cart system

4. ❌ "It's missing product/variant id" - When only updating cart attributes, you don't need to include product/variant IDs

Key points:
- Cart attributes can be updated independently of cart items
- Double underscore prefix (__) is valid and makes attributes private
- The code follows all Shopify Cart API best practices

Reference:
- [Cart Attributes in Liquid](https://shopify.dev/docs/api/liquid/objects/cart#cart-attributes)
- [Cart API](https://shopify.dev/api/ajax/reference/cart) 