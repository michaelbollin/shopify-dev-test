---
id: "url-redirect-cart"
title: "Can you redirect /cart to /bag in Shopify without Javascript?"

answers:
  - id: "a"
    text: |
      Yes, by adding a URL redirect in Shopify admin under Online Store > Navigation > URL Redirects
  - id: "b"
    text: |
      Yes, by replacing cart url in schema settings
  - id: "c"
    text: |
      No, the /cart URL is a system path in Shopify that cannot be redirected 
  - id: "d"
    text: |
      Yes, by adding a redirect rule in theme.liquid:
      ```liquid
      {% if request.path == '/cart' %}
        {% redirect '/bag' %}
      {% endif %}
      ```

correctAnswer: "c"
---

### Explanation

The `/cart` URL cannot be redirected because it's a system path in Shopify that handles core cart functionality.

Any attempts to redirect `/cart` through URL redirects, or Liquid will be ignored by Shopify or could break cart functionality.

If you need a custom cart page, create a new page with your design and use Shopify's Cart API, but keep `/cart` accessible for system operations. 