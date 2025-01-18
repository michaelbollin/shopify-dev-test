---
title: |
  Product has metaobject "Ingredients" that has `name`, `feature`, and `photo` fields. How to access the name? 🧪

answers:
  - id: "a"
    text: "{{ product.metaobjects.ingredients.fields.name.value }}"
  - id: "b"
    text: "{{ product.ingredients.fields.name.value }}"
  - id: "c"
    text: "{{ product.ingredients.name.value }}"
  - id: "d"
    text: "Product cannot have metaobjects directly attached to it"
correctAnswer: "d"
seo:
  title: "Shopify Metaobject Access - Product Metaobjects"
  description: "Learn how to access product metaobjects in a theme using Liquid."
---

### Explanation

Products cannot have metaobjects directly attached to them. Instead, they can have metafields that reference metaobjects. Here's how to access a metaobject referenced by a product:

1. First, create and access a metafield that references the metaobject:
   ```liquid
   {% assign ingredients = product.metafields.custom.ingredients %}
   ```

2. Then access the metaobject's fields:
   ```liquid
   {% for ingredient in ingredients %}
     Name: {{ ingredient.fields.name.value }}
   {% endfor %}
   ```

Key points:
- Products have metafields, not metaobjects
- Metafields can reference metaobjects

References:
- [Shopify Metaobjects Documentation](https://shopify.dev/docs/api/liquid/objects/metaobject)
- [Metafields Documentation](https://shopify.dev/docs/api/liquid/objects/metafield) 