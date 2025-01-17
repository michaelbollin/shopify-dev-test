---
title: |
  When using `shopify theme dev`, which theme are you working on? 🛠️

answers:
  - id: "a"
    text: "The published theme"
  - id: "b"
    text: "A development theme"
  - id: "c"
    text: "A duplicate of the published theme"
  - id: "d"
    text: "You need to provide theme ID with --theme flag"
correctAnswer: "b"
---

### Explanation

When you run `shopify theme dev`, Shopify CLI:
- Creates a development theme in your store
- Syncs your local files to this development theme
- Hot-reloads changes as you work
- Does not affect your live/published theme

Key points:
- Development theme is temporary
- Safe to experiment without affecting live site

Reference: [Shopify Theme Development](https://shopify.dev/docs/themes/tools/cli/theme-commands#dev) 