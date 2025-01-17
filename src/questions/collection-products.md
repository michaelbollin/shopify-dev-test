---
title: |
  How do you loop through products in a collection? 🔄

  ```liquid
  {% assign my_collection = collections['featured'] %}
  <!-- How to show all products? -->
  ```
answers:
  - id: "a"
    text: "{% for product in my_collection %}"
  - id: "b"
    text: "{% for product in my_collection.all %}"
  - id: "c"
    text: "{% for product in my_collection.products %}"
  - id: "d"
    text: "{% for product in my_collection.items %}"
correctAnswer: "c"
seo:
  title: "How to Loop Through Products in a Shopify Collection"
  description: "Learn how to loop through products in a Shopify collection using Liquid code. "
---

### Explanation

To iterate through collection products:

```liquid
<!-- ✅ Correct way -->
{% for product in collection.products %}
  <div class="product-card">
    <h2>{{ product.title }}</h2>
    <p>{{ product.price | money }}</p>
  </div>
{% endfor %}
```

Key points:
- Use `.products` to access collection items
- Automatically handles pagination
- Respects collection ordering
- Works with all collection types 