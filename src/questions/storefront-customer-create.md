---
id: "storefront-customer-create"
title: |
  Can you create new customers using the Storefront API? 🛍️

answers:
  - id: "a"
    text: "No, customer creation is only available through Admin API"
  - id: "b"
    text: "Yes, using the customerCreate mutation with unauthenticated_write_customers access scope"
  - id: "c"
    text: "Yes, but only in development mode"
  - id: "d"
    text: "No, Storefront API is read-only"
correctAnswer: "b"
---

### Explanation

Yes, you can create new customers using the Storefront API through the `customerCreate` mutation.

Key points:
- Requires the `unauthenticated_write_customers` access scope
- Accepts customer details like:
  - First name and last name
  - Email and phone
  - Password
  - Marketing preferences
- Returns the created customer object or error messages
- Can be used for custom signup forms and headless implementations

Example mutation:
```graphql
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer {
      firstName
      lastName
      email
    }
    customerUserErrors {
      field
      message
    }
  }
}
```

Reference: [Storefront API customerCreate mutation](https://shopify.dev/docs/api/storefront/2024-10/mutations/customercreate) 