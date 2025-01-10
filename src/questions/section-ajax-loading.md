---
id: "section-ajax-loading"
title: |
  Can you load Shopify sections dynamically with AJAX? 🔄

answers:
  - id: "a"
    text: "Only with a custom app"
  - id: "b"
    text: "No, sections can only be loaded on page load"
  - id: "c"
    text: "Yes, using the Section Rendering API"
  - id: "d"
    text: "Yes, but you need to use the Admin API"
correctAnswer: "c"
---

### Explanation

Shopify sections can be loaded dynamically using the Section Rendering API:

```javascript
function handleResponse() {
  var sections = JSON.parse(this.responseText);
  console.log(sections);
}

const request = new XMLHttpRequest();

request.addEventListener('load', handleResponse);
request.open('GET', '/?sections=header', true);
request.send();
```

Key points:
- Section Rendering API allows dynamic section loading
- Two ways to request sections:
  - Single section: `/?section_id=section-name`
  - Multiple sections: `/?sections=section1,section2`
- Common use cases:
  - Product recommendations
  - Cart updates
  - Dynamic content loading
  - Real-time section updates
- No app or additional setup required
- Works with any section that's properly registered

Reference: [Shopify Section Rendering API](https://shopify.dev/api/section-rendering) 