---
id: "liquid-admin-api"
title: |
  Can you call Shopify REST Admin API directly from template Javascript? 🔒

answers:
  - id: "a"
    text: "Yes, using the filter"
  - id: "b"
    text: "Yes, but only in development mode"
  - id: "c"
    text: "No, Admin API requires admin authentication which isn't available in Liquid"
  - id: "d"
    text: "Yes, but it's highly insecure because it requires a secret token in the template"
correctAnswer: "d"
---

### Explanation

While it is technically possible to call the Shopify REST Admin API from template JavaScript by including admin credentials or access tokens, this is a significant security risk that should never be done.

Key points:
- JavaScript in theme templates is client-side and visible to all users
- Including admin credentials in JavaScript would expose them to:
  - Anyone who views the page source
  - Browser developer tools
- Secure alternatives for client-side operations:
  - Use the Storefront API with public access tokens
  - Implement server-side endpoints with proper authentication

Reference: [Shopify Liquid Documentation](https://shopify.dev/docs/themes/liquid/reference) 