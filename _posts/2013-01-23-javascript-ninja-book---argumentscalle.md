---
layout: post
title: "JavaScript Ninja book - arguments.callee, !!"
description: ""
category: 
date: 2013-01-22 12:00:00
tags: [js, javascript, book, arguments]
---
{% include JB/setup %}

## arguments.callee

> **arguments.callee** - this property of a function can serve as a reliable way to always access the function itself.

{% highlight js %}
var robot = { 
  dance: function(n) { 
    return n > 0 ? arguments.callee(n-1) + "eep" : "boop";
  }
}
// `arguments` points to the argument list passed into the function, in this case, `n`
{% endhighlight %}

## !! operator

The `!!` construct is a way of turning any JavaScript expression into its Boolean equivalent

{% highlight js %}
!!"hello" //outputs true

!!0 //outputs false
{% endhighlight %}
