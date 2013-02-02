---
layout: post
title: "Callbacks in JavaScript"
description: ""
category: 
tags: [js, javascript, callbacks]
---
{% include JB/setup %}

## Notes from Secrets of a JavaScript Ninja book

Given this code:

{% highlight js %}
function loop(array, fn) {
  for (var i=0; i<array.length; i++) 
    // pass function back in with arguments 
    if (fn.call(array, array[i], i) === false) break;
}
{% endhighlight %}

**Callbacks** are employed in relation to asynchronous, or nondeterminisitc, behavior such as a user clicking a button, an Ajax request completing, or some number of values being found in array.


