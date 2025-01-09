---
id: "shopify-cli-deployment"
title: |
  What is the default port for shopify theme dev? 🔌

  ```bash
  shopify theme dev
  # Server running at: http://127.0.0.1:????
  ```
answers:
  - id: "a"
    text: "8080"
  - id: "b"
    text: "3000"
  - id: "c"
    text: "9292"
  - id: "d"
    text: "4000"
correctAnswer: "c"
---

### Explanation

The Shopify CLI development server runs on port 9292 by default:

```bash
shopify theme dev
# Server running at: http://127.0.0.1:9292
```

Technical details:
- Default port: 9292
- Can be changed using --port flag if needed
- Local development server address: http://127.0.0.1:9292
- localhost:9292 also works
- Port must be free or command will fail

Reference: [Shopify Theme Development](https://shopify.dev/themes/tools/cli/theme-commands#dev) 