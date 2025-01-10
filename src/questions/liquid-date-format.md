---
id: "liquid-date-format"
title: |
  How do you format a date in Liquid to show as "January 10, 2024"? 📅

answers:
  - id: "a"
    text: "| date: '%B %d, %Y'"
  - id: "b"
    text: "| date: 'MMMM DD, YYYY'"
  - id: "c"
    text: "| format_date: 'long'"
  - id: "d"
    text: "| strftime: '%month %day, %year'"
correctAnswer: "a"
---

### Explanation

To format dates in Liquid, use the `date` filter with strftime format:

```liquid
{{ article.published_at | date: '%B %d, %Y' }}
<!-- Output: January 10, 2024 -->
```

Key points:
- Common date format specifiers:
  - `%B`: Full month name (January)
  - `%b`: Abbreviated month name (Jan)
  - `%d`: Day of the month (01-31)
  - `%Y`: Full year (2024)
  - `%y`: Two-digit year (24)
  - `%H`: 24-hour format
  - `%I`: 12-hour format
- Default format if no format specified: '%B %d, %Y'
- Works with any date object or timestamp
- Can be used with `now` for current date

Reference: [Shopify Date Filter](https://shopify.dev/docs/api/liquid/filters/date) 