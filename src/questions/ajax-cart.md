---
id: "shopify-ajax-cart"
title: |
  What's wrong with this Ajax cart implementation? 🛒

  ```javascript
   const addToCart = async (variantId) => {
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variant_id: variantId,
        quantity: 1
      })
    });
    console.log(response);
    if (response.ok) {
      window.location.href = '/cart';
    }
  };
  ```
answers:
  - id: "a"
    text: "Wrong endpoint URL"
  - id: "b"
    text: "Missing CSRF token"
  - id: "c"
    text: "Need to parse response"
  - id: "d"
    text: "Wrong property name"
correctAnswer: "d"
---

### Explanation

The code uses `variant_id` instead of `id` in the request payload. According to Shopify's Ajax Cart API, the correct property name must be `id`:

```javascript
const addToCart = async () => {
  const response = await fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1
    })
  });

  if (response.ok) {
    window.location.href = '/cart';
  }
};
```

Key points:
- Must use `id` not `variant_id` in the payload
- This is a common mistake when working with Shopify's Ajax Cart API
- The request will fail with a 422 error if using wrong property name

Reference: [Ajax Cart API](https://shopify.dev/api/ajax/reference/cart) 