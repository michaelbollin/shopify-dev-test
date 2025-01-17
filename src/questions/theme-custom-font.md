---
title: |
  Where should you upload custom font files in a Shopify theme? 🔤

answers:
  - id: "a"
    text: "In the theme's assets directory"
  - id: "b"
    text: "In the Files section of Shopify admin"
  - id: "c"
    text: "In the theme's config directory"
  - id: "d"
    text: "In the theme's templates directory"
correctAnswer: "a"
seo:
  title: "Shopify Theme Custom Fonts - Where to Upload"
  description: "Learn where to upload custom font files in a Shopify theme."
---

### Explanation

Custom font implementation in Shopify themes:

Key points:
- Custom fonts should be uploaded to the `assets` directory in your theme:
  - NOT in the Files section of Shopify admin
  - Files section is for general file storage (PDFs, documents, etc.)
  - Theme assets are specifically for theme-related files
- Implementation steps:
  - Upload font files to theme assets directory
  - Define @font-face in theme CSS
  - Reference fonts in stylesheet
- Best practices:
  - Use web-optimized formats (WOFF2, WOFF)
  - Include fallback fonts
  - Files section won't work for fonts as it's not properly integrated with theme assets
  - Theme assets ensure proper serving of font files with correct MIME types 