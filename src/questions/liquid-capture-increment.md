---
title: Understanding Liquid increment and capture interaction
description: What is the output of the following Liquid code?
---

```liquid
{% increment counter %}
{% capture counter %}{% increment counter %}{% endcapture %}
{% increment counter %}
{{ counter }}
```

a) 0 1 2
b) 0 1 1
c) 0 2 1
d) 1 2 1

Answer: c) 0 2 1

Explanation:
This code demonstrates the interaction between Liquid's `increment` and `capture` tags:

1. First `{% increment counter %}` outputs 0 and increments to 1
2. The `capture` block contains an `increment` which outputs nothing (capture doesn't display) but increments to 2
3. Next `{% increment counter %}` outputs 2 and increments to 3
4. Finally, `{{ counter }}` outputs 1 because it refers to the value stored by the `capture` tag

The final output is "0 2 1" because the `capture` operation silently stores the value without displaying it. The `increment` tag creates a globally scoped variable that persists and increments, while `capture` creates a separate local variable that can have the same name but operates independently. 