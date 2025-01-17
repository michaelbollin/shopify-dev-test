---
id: "liquid-form-basic"
title: |
  Which code correctly creates a contact form in Shopify? 📝

answers:
  - id: "a"
    text: |
      <form action="/contact" method="post">
        <input type="text" name="contact[email]">
        <button type="submit">Send</button>
      </form>
  - id: "b"
    text: |
      {% form 'contact' %}
        <input type="text" name="contact[email]">
        <button type="submit">Send</button>
      {% endform %}
  - id: "c"
    text: |
      {{ form 'contact' }}
        <input type="text" name="contact[email]">
        <button type="submit">Send</button>
      {{ endform }}
  - id: "d"
    text: |
      {% contact_form %}
        <input type="text" name="contact[email]">
        <button type="submit">Send</button>
      {% endcontact_form %}
correctAnswer: "b"
---

### Explanation

The correct way to create forms in Shopify uses the `{% form %}` tag:

```liquid
{% form 'contact' %}
  <!-- form fields here -->
{% endform %}
```

Key points:
- Automatically adds required hidden fields
- Adds proper form attributes
- Sets correct form action
- Adds proper character encoding

What Shopify automatically adds:
```html
<form method="post" action="/contact#contact_form" 
      id="contact_form" 
      accept-charset="UTF-8" 
      class="contact-form">
  <input type="hidden" name="form_type" value="contact">
  <input type="hidden" name="utf8" value="✓">
  <!-- your form fields here -->
</form>
```

Common form types:
- 'contact'
- 'create_customer'
- 'customer_login'
- 'recover_customer_password'
- 'cart'

Reference: [Shopify Liquid form tag](https://shopify.dev/docs/api/liquid/tags/form) 