---
layout: post
title: "Using handleEvent function to bind context"
description: ""
category: 
tags: [javascript, js, handleevent]
---
{% include JB/setup %}

The `handleEvent` method is called whenever an event occurs of the type for which the `EventListener` interface was registered. In this case below, I am explicitly assigning what statements are executed and in which context via `handler`. [More on handleEvent from the W3C specification](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener)

{% highlight js %}
var Core = { 
    self: this,

    objVar: 'something',

    init: function() { 
        var handler = {
            handleEvent: function() {
              self.someMethod();
            }
        };
        el.addEventListener('click', handler, false); // some dom element el
    },

    someMethod: function() { 
        this.objVar = ...; // do something with objVar
    }
}
{% endhighlight %}
