---
id: "api-storefront-features"
title: |
  Which feature is NOT available in the Storefront API but IS available in the REST Admin API? 🔒

answers:
  - id: "a"
    text: "Fetching product information"
  - id: "b"
    text: "Creating customers"
  - id: "c"
    text: "Updating carts"
  - id: "d"
    text: "Creating new products"
correctAnswer: "d"
---

### Explanation

The Storefront API and REST Admin API have different capabilities based on their intended use:

```graphql
# Storefront API can:
- Read products, collections, and shop info
- Create/manage customer accounts
- Process orders and checkouts
- Handle cart operations

# REST Admin API can do all above PLUS:
- Create/update/delete products
- Manage inventory
- Access analytics
- Configure shop settings
- Manage staff accounts
```

Key points:
- Storefront API is read-heavy with limited write capabilities
- REST Admin API has full CRUD capabilities
- Storefront API focuses on customer-facing operations
- REST Admin API includes store management features
- Security determines available features

Reference: [Shopify API Comparison](https://shopify.dev/api/usage/access-scopes) 