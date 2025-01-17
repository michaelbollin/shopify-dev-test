---
id: "theme-github-editor"
title: |
  When you have GitHub integration enabled and make changes in the theme editor:

answers:
  - id: "a"
    text: "It will be overridden in next git push"
  - id: "b"
    text: "It will be sent to Github by Shopify Bot"
  - id: "c"
    text: "You cannot use theme editor with GitHub integrated themes"
  - id: "d"
    text: "It will block next Github push"
correctAnswer: "b"
---

### Explanation

When using GitHub integration with your Shopify theme:

Key points:
- Changes made in the theme editor are automatically committed to GitHub by the Shopify Bot
- You can still use the theme editor normally with GitHub-integrated themes
- These changes won't be overridden by future git pushes as they're properly tracked
- The integration doesn't block or interfere with GitHub pushes

The Shopify Bot ensures that any changes made through the theme editor are properly synced with your GitHub repository, maintaining version control while allowing the flexibility of using the theme editor. 