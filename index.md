---
layout: page
title: Ryan Regalado
tagline: Website Developer / User Interface Designer
---
{% include JB/setup %}

{% assign checkTitle = page.title %}
{% for page in site.posts %}
{% include themes/tom/post.html %}
{% endfor %}
