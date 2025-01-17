---
title: |
  Can a customer exist without having an account? 🤔

answers:
  - id: "a"
    text: "Yes, during guest checkout"
  - id: "b"
    text: "No, customers always need an account"
  - id: "c"
    text: "Yes, but needs to be created by the API this way"
  - id: "d"
    text: "Yes, when checkout fails"
correctAnswer: "a"
seo:
  title: "Shopify Customer Accounts: Guest Checkout and Account Creation"
  description: "Learn about the availability of guest checkout and account creation in Shopify customer accounts, and understand the implications for implementing customer login functionality."
---

### Explanation

In Shopify, there's an important distinction between a customer and a customer account:

```liquid
{% if customer %}
  {% if customer.has_account %}
    Welcome back to your account, {{ customer.first_name }}!
  {% else %}
    Completing checkout as guest
  {% endif %}
{% endif %}
```

Key points:
- A customer can exist without having an account (guest checkout)
- `customer` object exists during checkout even for guests
- `customer.has_account` specifically checks if the email is tied to an account
- Common scenarios:
  - Guest checkout: `customer` exists, but `customer.has_account` is false
  - Account holder: both `customer` exists and `customer.has_account` is true
  - Not logged in: `customer` is null/false
- This distinction allows for guest checkout while still tracking order information

Reference: [Shopify Customer Object](https://shopify.dev/docs/api/liquid/objects/customer) 