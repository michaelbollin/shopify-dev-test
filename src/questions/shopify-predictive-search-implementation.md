---
title: |
  When using predictive search, which parameters are required? 🔍

answers:
  - id: "a"
    text: "q and resources[type]"
  - id: "b"
    text: "Only q"
  - id: "c"
    text: "q and limit"
  - id: "d"
    text: "q, resources[type], and limit"
correctAnswer: "b"
seo:
  title: "Shopify Predictive Search API - Required Parameters"
  description: "Learn which parameters are required for Shopify's predictive search API."
---

### Explanation

When using Shopify's predictive search endpoint `/search/suggest.json`, only the `q` parameter is required:

```javascript
// Minimum required request
fetch("/search/suggest.json?q=shirt")
  .then(response => response.json())
  .then(suggestions => {
    console.log(suggestions);
  });

// Optional parameters can be added
fetch("/search/suggest.json?q=shirt&resources[type]=product")
  .then(response => response.json())
  .then(suggestions => {
    const products = suggestions.resources.results.products;
    console.log(products);
  });
```

Key points:
- Only `q` (query) parameter is required
- `resources[type]` is optional for filtering
- `limit` is not a valid parameter
- Without `resources[type]`, returns all resource types
- Maximum 4 results per resource type

Reference: [Shopify Predictive Search API](https://shopify.dev/docs/api/ajax/reference/predictive-search) 