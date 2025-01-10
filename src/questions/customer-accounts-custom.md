---
id: "customer-accounts-custom"
title: |
  Can you create a custom page in Shopify-hosted Customer Accounts? 🔐

answers:
  - id: "a"
    text: "No, only predefined pages are available"
  - id: "b"
    text: "Yes, using liquid templates"
  - id: "c"
    text: "Yes, but only in legacy customer accounts"
  - id: "d"
    text: "Yes, using full-page app extensions"
correctAnswer: "d"
---

### Explanation

You can create custom pages in Customer Accounts using full-page app extensions:

```typescript
// shopify.extension.toml
[[extensions.targeting]]
target = "customer-account.page.render"
module = "./src/FullPageExtension"

// FullPageExtension.tsx
export default function FullPage() {
  return (
    <Page title="My Custom Page">
      <BlockStack>
        {/* Custom content using Customer Account UI components */}
      </BlockStack>
    </Page>
  );
}
```

Reference: [Build full-page extensions](https://shopify.dev/docs/apps/build/customer-accounts/full-page-extensions/build-new-pages) 