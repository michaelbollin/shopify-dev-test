---
title: |
  Which template file is responsible for displaying a single blog article in Shopify? 📝

answers:
  - id: "a"
    text: "templates/blog.liquid"
  - id: "b"
    text: "templates/article.json"
  - id: "c"
    text: "Shopify doesn't have blog features"
  - id: "d"
    text: "templates/blog-post.liquid"
correctAnswer: "b"
seo:
  title: "Blog template file for displaying a single article in Shopify"
  description: "Learn about the blog template file for displaying a single article in Shopify"
---

### Explanation

In Shopify themes, `templates/article.liquid` (or `templates/article.json` for Online Store 2.0) is responsible for displaying individual blog articles.

Key points:
- Shopify has built-in blogging capabilities out of the box
- `article.liquid`/`article.json` handles the layout for a single blog post
- This template has access to the `article` object containing the post's content
- `blog.liquid`, in contrast, displays the list/index of blog articles
- The template can be customized to match your store's design needs

Note: For Online Store 2.0 themes, you might use `templates/article.json` with sections to create a more modular and customizable article page. 