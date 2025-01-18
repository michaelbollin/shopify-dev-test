---
title: |
  How are multiple percentage-based order discounts calculated in Shopify? 🏷️

  ```text
  Cart subtotal: $350
  Discount A: 10% off order
  Discount B: 15% off orders over $200
  ```
answers:
  - id: "a"
    text: "Discounts are applied one after another (76.5% of original price)"
  - id: "b"
    text: "Only the larger discount applies (85% of original price)"
  - id: "c"
    text: "Each discount calculated from original subtotal then combined"
  - id: "d"
    text: "First discount applies to subtotal, second to remaining amount"
correctAnswer: "c"
seo:
  title: "Shopify Discount Calculation: Multiple Percentage-Based Discounts"
  description: "Learn how Shopify calculates multiple percentage-based order discounts, including the correct method for combining them."
---

### Explanation

When multiple percentage-based order discounts apply, each discount is calculated from the original subtotal:

```text
Example calculation:
Original subtotal: $350

Discount calculations:
• 10% off order = $35 (calculated from $350)
• 15% off order = $52.50 (calculated from $350)
Total discount = $87.50
```

Key points:
• Each percentage discount uses the original subtotal as its base
• Discounts are not calculated sequentially

Reference: [Combining Discounts in Shopify](https://help.shopify.com/en/manual/discounts/combining-discounts) 