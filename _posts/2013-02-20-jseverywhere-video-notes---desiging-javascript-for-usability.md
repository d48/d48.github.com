---
layout: post
title: "JS.everywhere video notes   Desiging JavaScript for Usability"
description: ""
category: 
tags: [js, javascript, video, notes]
---
{% include JB/setup %}

# Function type checking

Instead of writing 2 seperate functions that work on 2 different data types but do the same functionality, like searching for instance, just create a function (or API) that is generic that can do type checking.

{% highlight js %}
function apisearch (stack, needle) {
    if (isArray(stack))( {
      //searchArray(stack, needle);
    } else {
      //searchMap(stack, needle);
    }
  }
{% endhighlight %}
