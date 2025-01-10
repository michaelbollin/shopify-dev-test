---
id: "metaobject-field-types"
title: |
  Which of these field types is NOT supported in metaobjects? 🚫

answers:
  - id: "a"
    text: "single_line_text_field"
  - id: "b"
    text: "product_reference"
  - id: "c"
    text: "variant_reference"
  - id: "d"
    text: "json"
correctAnswer: "d"
---

### Explanation

Metaobjects support various field types, but JSON is not one of them. Here are the supported field types:

1. Text fields:
   - `single_line_text_field`
   - `multi_line_text_field`
   - `rich_text_field`

2. Media fields:
   - `file`
   - `image`
   - `video`

3. Reference fields:
   - `product_reference`
   - `variant_reference`
   - `collection_reference`
   - `metaobject_reference`
   - `page_reference`
   - `file_reference`

4. Other types:
   - `date`
   - `date_time`
   - `number_integer`
   - `number_decimal`
   - `url`
   - `boolean`
   - `color`
   - `rating`
   - `volume`
   - `weight`
   - `dimension`

References:
- [Metaobject Field Types](https://shopify.dev/docs/api/admin-graphql/unstable/enums/MetafieldFieldType)
- [Creating Metaobject Definitions](https://help.shopify.com/en/manual/custom-data/metaobjects/create-definitions) 