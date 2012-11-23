---
layout: post
title: "Named and anonymous functions"
tags: [js, javascript, books, function, anonymous, named, forward-reference]
---
{% include JB/setup %}

# From Secrets of a JavaScript Ninja book
  
{% highlight js %}
// named function
function myName() { return true; }

// anonymous function
var myName2 = function() { return true; }

// anonymous function defined as property
window.myName3 = function() { return true; }
{% endhighlight %}
  
__named functions__ can be defined after the function is called within a scope and it will be evaluated. This is also called **forward-referencing**, a property that __anonymous functions__ don't have since they are assigned to variable or a property which can't be forward-referenced.

**forward-reference** in regards to functions means that no matter where in the scope that a function is defined, it will be accessible through that scope.
  
{% highlight js %}
// testing function calls and if they are available when called
assert(myName(), 'works even though defined below');
assert(myName2(), "doesn't work since defined below and assigned to variable");

function myName() { return true; };
var myName2() = function() { return true; };
var myName3() = function() { return true; };

assert(myName3(), 'works since defined before this assert called');
{% endhighlight %}
