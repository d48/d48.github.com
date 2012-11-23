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
        <div class="meta">
            <span class="date">{{ page.date | date_to_string }}</span>
        </div>
        <div class="body-post">
            {{page.content}}
            {{#if page.tags}}
            <ul class="tags">
                {% for tag in page.tags %} 
                <li><a href="{{ BASE_PATH }}{{ site.JB.tags_path }}#{{ tag }}-ref">{{tag}}</a></li>
                {% endfor %}
            </ul>  
        </div><!--end body-->
    </div><!--end content-->
    <div class="clear"></div>
</div><!--end post-->
{% endfor %}
