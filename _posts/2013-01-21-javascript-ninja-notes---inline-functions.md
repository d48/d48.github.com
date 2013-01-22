---
layout: post
title: "JavaScript Ninja notes - Anonymous and Inline functions"
description: ""
category: 
tags: [js, javascript, book, notes, inline, functions, anonymous]
---
{% include JB/setup %}

## `This` in a method

A term frequently applied to functions that are referenced through object properties, the function context refers to teh boject through which the method was invoked. So given the following function, the assertions will evaluate to `true`:

{% highlight js %}
var ninja = {
  // define object property with anonmyous function
  yell: function(n) {
    return n > 0 ? this.yell(n - 1) + 'a' : 'hiy';
  }
}

// make a reference to ninja method
var samurai = { yell: ninja.yell };

ninja = {};

try {
  assert(samurai.yell(4) == 'hiyaaaa', 'this works because of `this` var');
  }
catch(e) {
  console.log('if ninja.yell did not have this.yell in return, error would be thrown because reference would be gone');
}
{% endhighlight %}


Given the same object without reference to `this`, the assertion will fail

{% highlight js %}
var ninja = {
  // define object property with anonmyous function, but no `this` reference
  yell: function(n) {
    return n > 0 ? yell(n - 1) + 'a' : 'hiy';
  }
}

// make a reference to ninja method
var samurai = { yell: ninja.yell };

ninja = {};

try {
  assert(samurai.yell(4) == 'hiyaaaa', 'this doesnt work because we kill reference to ninja.yell');
  }
catch(e) {
  console.log('if ninja.yell did not have this.yell in return, error would be thrown because reference would be gone');
}
{% endhighlight %}


## Named anonymous (inline) functions

Function literal syntax allows us to supply a name to the declared function by adding a name before the parameter list. Another name for this is an inline function.

Note: inline functions can be named, but those names are only visible within the functions themselves

{% highlight js %}
var ninja = {
  // `shout` is an inline function
  yell: function shout(n) {
    return n > 0 ? shout(n-1) + 'a' : 'hiy';
  }
}

var samurai = { yell: ninja.yell };
ninja = {};

assert(samurai.yell(4) == 'hiyaaaa', 'Yes, this method still works because we save reference directly to the inline function that is named `shout`');

assert(typeof shout == "undefined", 'true since can not evaluate inline function outside of its scope directly');
{% endhighlight %}
