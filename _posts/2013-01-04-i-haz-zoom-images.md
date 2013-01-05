---
layout: post
title: "I haz zoom images via JavaScript closures"
date: 2013-01-04 22:00:00
description: ""
category: 
tags: [html, css, javascript, closures]
---
{% include JB/setup %}

I wanted to put some click functionality on the images for the blog post so I created a little function to do just that. The nifty little bit is using the JavaScript closure to bind the iterator variable so it's unique to each element that I'm creating a callback for.

{% highlight js %}
function setImageLinks() {
  var parent = document.getElementById('post')
    , images = parent.getElementsByTagName('img')
    ;

  for(var i = 0, len = images.length; i < len; i++){
    // bind i variable to a function not inside the same scope
    (function (index) {
      var src = images[index].getAttribute('src');

      images[index].addEventListener('click', function setImageClickEvent() {
        window.open(src);
      }, false);
    } (i));
  }
}
{% endhighlight %}

## Click zee image

![codercat](http://design48.net/i/codercat.jpg)
