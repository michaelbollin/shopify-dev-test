---
title: |
  Which endpoint should you use to fetch recommended products? 🌐

answers:
  - id: "a"
    text: "/products/recommendations.json?product_id=1"
  - id: "b"
    text: "/recommendations?product_id=1"
  - id: "c"
    text: "/recommendations/products.json?product_id=1"
  - id: "d"
    text: "/recommendations (on active product page)"
correctAnswer: "c"
---

### Explanation

To fetch recommended products in Shopify, you should use the endpoint `/recommendations/products.json`. This endpoint allows you to retrieve product recommendations based on a given product ID.

Example usage:

```javascript
fetch("/recommendations/products.json?product_id=9976571265370&limit=4")
  .then(response => response.json())
  .then(({ products }) => {
    if (products.length > 0) {
      const firstRecommendedProduct = products[0];

      alert(
        `The title of the first recommended product is: ${firstRecommendedProduct.title}`
      );
    }
  }
);
```

Key points:
- The correct endpoint is `/recommendations/products.json`
- You must provide a `product_id` parameter
- You can optionally specify a `limit` parameter
- The response includes an array of recommended products

Reference: [Shopify Product Recommendations API](https://shopify.dev/api/ajax/reference/recommendations) 