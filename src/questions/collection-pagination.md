---
title: |
  What will this Liquid code output?
  ```liquid
  {%- paginate collection.products by 7 -%}
    Page {{ paginate.current }} of {{ paginate.pages }}
    {%- if paginate.next -%}
      {{- ', Next available' -}}
    {%- endif -%}
  {%- endpaginate -%}
  ```
  Given these conditions:
  - Collection has 14 products total
  - URL parameter: ?page=2

answers:
  - id: "a"
    text: "Page 2 of 3, Next available"
  - id: "b"
    text: "Page 2 of 3"
  - id: "c"
    text: "Page 2 of 5, Next available"
  - id: "d"
    text: "Page of 2"
correctAnswer: "d"
---

### Explanation

This question tests understanding of Shopify's pagination object and a common mistake in the property name:

1. `paginate` tag setup:
   - Collection has 14 products
   - Paginating by 7 products per page
   - Results in 2 total pages (7 + 7 products)
2. Key error in the code:
   - The code uses `paginate.current` which is incorrect
   - The correct property is `paginate.current_page`
   - Using an invalid property returns nothing (blank)
3. Final output analysis:
   - "Page" (text)
   - "" (blank from invalid `paginate.current`)
   - "of"
   - "2" (from `paginate.pages`)
   - No ", Next available" because we're on the last page
4. Therefore outputs: "Page of 2" 