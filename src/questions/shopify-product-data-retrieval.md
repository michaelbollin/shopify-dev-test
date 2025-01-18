---
title: |
  What is the correct endpoint to fetch a single product with Ajax? 🛍️

answers:
  - id: "a"
    text: "/products/[handle].js"
  - id: "b"
    text: "/product/[handle].json"
  - id: "c"
    text: "/products/[product_id].json"
  - id: "d"
    text: "We cannot fetch a single product with Ajax, only with Liquid"
correctAnswer: "a"
seo:
  title: "Shopify Ajax Product Fetch - Correct Endpoint"
  description: "Learn how to fetch a single product in Shopify using Ajax."
---

### Explanation

To fetch a single product in Shopify, use the `/products/[handle].js` endpoint:

```javascript
fetch(window.Shopify.routes.root + 'products/red-rain-coat.js')
  .then(response => response.json())
  .then(product => alert('The title of this product is ' + product.title));
```

Key points:
- Endpoint format is `/products/[handle].js`
- Returns product data in JSON format
- Use the product handle, not the product ID

Reference: [Shopify Ajax API Product](https://shopify.dev/api/ajax/reference/product) 