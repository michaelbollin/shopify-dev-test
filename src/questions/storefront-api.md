---
id: "shopify-storefront-api"
title: |
  What's wrong with this Storefront API query? 🛍️

  ```graphql
  mutation cartCreate {
    cartCreate {
      cart {
        id
        lines {
          merchandise {
            ... on ProductVariant {
              id
              title
            }
          }
        }
      }
    }
  }
  ```
answers:
  - id: "a"
    text: "Missing input parameter"
  - id: "b"
    text: "Wrong fragment syntax"
  - id: "c"
    text: "Incorrect nesting"
  - id: "d"
    text: "Invalid field selection"
correctAnswer: "a"
---

### Explanation

Storefront API mutations require input:

```graphql
mutation cartCreate($input: CartInput!) {
  cartCreate(input: $input) {
    cart {
      id
      lines(first: 10) {  # Pagination required
        edges {
          node {
            merchandise {
              ... on ProductVariant {
                id
              }
            }
          }
        }
      }
    }
  }
}
```

Key points:
- Input variables required
- Connection patterns need pagination
- Fragment spread for variant fields

Reference: [Storefront API Cart](https://shopify.dev/api/storefront/2024-01/mutations/cartCreate) 