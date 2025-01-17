---
title: |
  What's wrong with this theme assets structure? 📁

  ```
  assets/
    fonts/
      custom-font.woff2
    images/
      logo.png
    css/
      style.css
  ```

answers:
  - id: "a"
    text: "The file names are incorrect"
  - id: "b"
    text: "Shopify doesn't support subfolders in the assets directory"
  - id: "c"
    text: "The font file format is not supported"
  - id: "d"
    text: "The assets directory name is wrong"
correctAnswer: "b"
---

### Explanation

Understanding Shopify theme assets structure:

Key points:
- Shopify does NOT support subfolders in the assets directory
- All files must be placed directly in the assets folder:
  - ❌ assets/fonts/custom-font.woff2
  - ✅ assets/custom-font.woff2
- Common workarounds:
  - Use naming conventions (e.g., font-custom.woff2)
  - Use prefixes for organization (e.g., img-logo.png)
  - Document file organization in theme README
- This limitation applies to:
  - Font files
  - Images
  - CSS/JS files
  - Any other asset types 