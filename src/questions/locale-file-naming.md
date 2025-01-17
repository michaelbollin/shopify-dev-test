---
title: |
  What is the correct file name for a French-Canadian locale file in Shopify? 🌐

answers:
  - id: "a"
    text: "french-canada.json"
  - id: "b"
    text: "FR-CA.json"
  - id: "c"
    text: "fr-CA.json"
  - id: "d"
    text: "frCA.json"
correctAnswer: "c"
---

### Explanation

Shopify locale files must follow the IETF language tag nomenclature.

Key points:
- File naming rules:
  - First part: lowercase language code (e.g., 'fr')
  - Hyphen separator
  - Second part: uppercase region code (e.g., 'CA')
  - `.json` extension

- Common examples:
  - `en-US.json`: English (United States)
  - `fr-CA.json`: French (Canada)
  - `es-ES.json`: Spanish (Spain)
  - `en-GB.json`: English (Great Britain)

- Default locale:
  - Must be designated with `.default.json`
  - Example: `en.default.json`
  - Only one default locale allowed
  - Used as fallback when translation missing 