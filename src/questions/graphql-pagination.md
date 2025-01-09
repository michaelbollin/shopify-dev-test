---
id: "shopify-graphql-pagination"
title: |
  What will this GraphQL query return? 🤔

  ```graphql
  query GetProducts {
    products(first: 300) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
  ```
answers:
  - id: "a"
    text: "300 first products with ids and titles"
  - id: "b"
    text: "300 products in random order"
  - id: "c"
    text: "An error about exceeding maximum limit"
  - id: "d"
    text: "Empty array"
correctAnswer: "c"
---

### Quick Explanation

The query will fail because Shopify's GraphQL API has a limit of 250 items per request. To fetch more than 250 items:

1. Request with `first: 250` and include `pageInfo` and `cursor`:
```graphql
{
  products(first: 250) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        title
      }
    }
  }
}
```

2. For next page, use the `endCursor` value:
```graphql
{
  products(first: 250, after: "endCursor-value-here") {
    # ... same fields as above
  }
}
```

Or use Bulk Operations for large datasets.

References:
- [Shopify GraphQL Pagination](https://shopify.dev/api/usage/pagination-graphql)
- [Bulk Operations](https://shopify.dev/api/usage/bulk-operations/queries) 