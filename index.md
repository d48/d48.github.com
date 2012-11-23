---
layout: page
title: Ryan Regalado
tagline: Website Developer / User Interface Designer
---
{% include JB/setup %}

{% for page in site.posts %}
<div class="post">
    <div class="content">
        <div class="title"><h3><a href="{{ page.url }}">{{ page.title}}</a></h3></div>
        {{#date}}
        <div class="meta">
            <span class="date">{{ page.date | date_to_string }}</span>

            {% if page.location %}{{ page.location }}{% endif %}
        </div>
        {{/date}}
        <div class="body-post">
            {{page.content}}
            <!-- if tags -->
            {{#if page.tags}}
            <ul class="tags">
                {% for tag in page.tags %} 
                <li><a href="{{ BASE_PATH }}{{ site.JB.tags_path }}#{{ tag }}-ref">{{tag}}</a></li>
                {% endfor %}
            </ul>  
            {{/if page.tags}}
            <!-- endif -->
        </div><!--end body-->
    </div><!--end content-->
    <div class="clear"></div>
</div><!--end post-->
{% endfor %}


Most recent posts:

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
