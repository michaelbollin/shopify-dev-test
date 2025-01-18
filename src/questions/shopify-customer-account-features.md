---
title: |
  As of 2024, is login to your store as a customer possible with email/password? 🔑

answers:
  - id: "a"
    text: "No, only SSO login is available"
  - id: "b"
    text: "Yes, but only through legacy templates"
  - id: "c"
    text: "Yes, through new Customer Accounts"
  - id: "d"
    text: "No, login is not supported anymore and you need the plugin"
correctAnswer: "b"
seo:
  title: "Shopify Customer Accounts: Email/Password Login Support"
  description: "Learn about the availability of email/password login for Shopify customer accounts and understand the implications for implementing customer login functionality."
---

### Explanation

Email/password login is only available through legacy customer templates:

```liquid
<!-- Legacy approach (still works but not recommended) -->
{% form 'customer_login' %}
  <!-- Email/password login still works here -->
{% endform %}

<!-- ✅ Modern approach - no direct email/password -->
<a href="{{ routes.account_url }}">
   Login with Shop or Social
</a>
```

Reference: [New Customer Accounts](https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts) 