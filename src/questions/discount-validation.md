---
id: "discount-validation"
title: |
  How to validate if a discount code exists before checkout? 🎫

answers:
  - id: "a"
    text: "Use cart.discount_applications liquid variable"
  - id: "b"
    text: "Check price_rules.json endpoint"
  - id: "c"
    text: "Use Storefront API checkDiscount query"
  - id: "d"
    text: "Not possible before checkout"
correctAnswer: "d"
---

### Explanation

It is not possible to validate discount codes before checkout in Shopify's frontend. This is a security feature to prevent enumeration of valid discount codes.

Available options for handling discount codes:

1. Customers can enter discount codes during checkout
2. Discount codes can be applied via URL parameters
3. Store owners can create automatic discounts that don't require codes

The `cart.discount_applications` Liquid variable only shows already-applied discounts (including both automatic and code-based discounts), and the price_rules endpoint is part of the Admin API which should not be exposed to the frontend.

Reference: [Shopify Discounts Documentation](https://shopify.dev/docs/themes/pricing-payments/discounts) 