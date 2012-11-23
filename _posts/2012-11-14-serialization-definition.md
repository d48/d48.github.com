---
layout: post
title: "Serialization definition"
tags: [serialization, deserialization]
---
{% include JB/setup %}


> **serialization**
>  
> converting an object structure into text/binary form suitable for storing onto disk or transmitting over a network.
  

> **deserialization**
>  
> is the reverse process. Eg., a javascript object into json string
  
{% highlight js %}
{foo: [1,4,7,8], bar: "baz"}

// serialize into json string
{"foo": [1,4,7,8], "bar": "baz"}
{% endhighlight %}
