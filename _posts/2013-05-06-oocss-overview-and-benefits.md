---
layout: post
title: "OOcss overview and benefits"
description: ""
category: 
tags: [oocss, css]
---
{% include JB/setup %}

OOCSS methodology helps to break up your css code so that you can logically separate objects into modules and classes for reuse and to avoid duplicating code.

Instead of:

{% highlight css %}
#button {
  width: 200px;
  height: 30px;
  background-color: red;
  border: 1px solid green;
  box-shadow: rgba(0, 122, 244, .5) 2px 2px 5px;
}

#box {
  width: 100px;
  height: auto;
  background-color: red;
  border: 1px solid green;
  box-shadow: rgba(0, 122, 244, .5) 2px 2px 5px;
}
{% endhighlight %}


You would write this to reuse code and also to separate how these tie in logically (applying one skin to multiple objects that appear the same):

{% highlight css %}
.button {
  width: 200px;
  height: 30px;
}

.box {
  width: 100px;
  height: auto;
}

.skin {
  background-color: red;
  border: 1px solid green;
  box-shadow: rgba(0, 122, 244, .5) 2px 2px 5px;
}
{% endhighlight %}


