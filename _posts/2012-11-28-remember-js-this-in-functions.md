---
layout: post
title: "Remember `this` context in JavaScript functions"
description: ""
category: 
tags: [this, js, javascript, functions]
---
{% include JB/setup %}

Just need to remind myself of what `this` refers to based on function scope and context. Was working through a bug that uses a variable within a namespace called by different functions. Since the function within the callback refers to `this.varName`, it's context is important and has to be taken care of.

Given:

{% highlight js %}
function doSomething() { 
  this.attribute = 'what up yo';
}

function init() { 
  // this var inside doSomething is as expected to refer to object
  // instantiated
  doSomething();

    someOtherFunction('woot', function() {
      // since this is a callback, the value of `this` var inside
      // doSomething refers to window, this is not desired
      doSomething();
    });
}
{% endhighlight %}

