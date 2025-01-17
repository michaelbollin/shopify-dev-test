---
title: |
  What's the correct way to apply multiple filters in Liquid output tags? 🔗

answers:
  - id: "a"
    text: "{{ product.title | upcase, truncate: 20 }}"
  - id: "b"
    text: "{{ product.title | upcase | truncate: 20 }}"
  - id: "c"
    text: "{{ product.title | upcase && truncate: 20 }}"
  - id: "d"
    text: "{{ product.title upcase truncate: 20 }}"
correctAnswer: "b"

seo:
  title: "Shopify Liquid Output Filters - Multiple Filter Chaining"
  description: "Learn how to apply multiple filters in Shopify Liquid output tags."
---

### Explanation

In Liquid, multiple filters are chained using the pipe character (|).

Key points:
- Filters are processed from left to right
- Each filter takes the output of the previous filter as input
- Some filters accept parameters after a colon (:)

Examples:
```liquid
<!-- Basic filter -->
{{ product.title | upcase }}
<!-- Output: MY PRODUCT -->

<!-- Multiple filters -->
{{ product.title | upcase | truncate: 5 }}
<!-- Output: MY... -->

<!-- Real world example -->
{{ product.title | strip_html | truncatewords: 25 | capitalize }}
<!-- Strips HTML, limits to 25 words, capitalizes first letter -->

<!-- Price formatting example -->
{{ product.price | money_with_currency | replace: 'USD', 'US' }}
<!-- Output: $29.99 US -->
```

Reference: [Shopify Liquid Filters](https://shopify.dev/docs/api/liquid/filters) 