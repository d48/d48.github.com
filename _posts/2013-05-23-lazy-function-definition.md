---
layout: post
title: "Lazy Function Definition"
description: ""
category: 
tags: [pattern, js, javascript, promise]
---
{% include JB/setup %}

I needed this pattern the other day when I was tasked to build out some functionality for a site utility that emails a report to a set user. The Lazy Function Pattern allows a function to be redefined after first pass. This is great for initialization code where assignment happens on first run or useful for cross-browser feature detection to check what is supported and apply execution based on browser.

## Sample code

{% highlight js %}
var person = function() {
  var bornDate = new Date();

  person = function() {
      return bornDate;
  }

  return person();
};
{% endhighlight %}

## Breakdown of code

When we first call `person()`, the variable `bornDate` is assigned the current Date/time. `person` is then reassigned to a new function object with the `bornDate` variable in it's closure. The return value at this point will now always be what is within the `person` variable reassignment, which is `bornDate`.

Subsequent calls will now always return with the variable `bornDate` value that is within its closure.

## Promise

Another way to look at this function is that the outer first assigned to `person` is a "promise". It promises that the first time it is run it will redefine `person` to a more useful function.
