---
layout: post
title: "Global variables"
tags: [js, javascript]
---
{% include JB/setup %}

## Avoid polluting the global scope

Using global variables is messy because in large applications in can easily eat up a lot of memory. Also strong chance upon execution that a collision will occur where same variable is being used for different uses.

To avoid polluting global scope, declare variables into a namespaced object structure. For variables that don't fit or belong in these structures, can declare in a "self-invoking function" = a function that gets executed when the definition is parsed by the browser or client.

### Self-invoking function example
{% highlight js %}
(function() {
  // All your JS code here
  // Declare variables to be in this scope like so:
  // var someVariable = "some value";
})();
{% endhighlight %}
   
* Traditional accessors methods are used (getters/setters) to manipulate variables that are withing that scope or closure that is defined.

* _ underscore used to indicate that these are private members. Just a visual aid for the programmer.

## Sources

Advanced Javascript: Namespaces, Closures, Self-Invoking Functions, and much, much, more...[^1]

[^1]: [http://sparecycles.wordpress.com/2008/06/29/advanced-javascript/](http://sparecycles.wordpress.com/2008/06/29/advanced-javascript/)
