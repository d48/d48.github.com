---
layout: post
title: "Reusable code and object creation in JavaScript"
tags: [reusable, js, javascript, object, constructor]
---
{% include JB/setup %}

## Patterns

Investigating some Javascript patterns for a pro-bono project I'm working on for a motorcycle racer. I'm new to the patterns so perfect time to research just to familiarize myself and just because I want to know what is best to use and when. It's just for a simple little gallery slider for some Sponsor logos that can be achieved by creating a function but I want to always be able to create something that can be reused as it's a pattern you see all over the web right now with the use of jQuery. 

I will be using jQuery for selectors and templating on Wordpress. 

## Creating reusable code

* Write object-oriented code and implement object inheritance 
* In Javascript, this is _prototypal inheritance_ where an object constructor can inherit methods from one other object, creating a _prototype_ from which all other new objects are built.
* Facilitated by the _prototype property_, exists for every function

## Book notes - Javascript Patterns

* reading book by Stoyan Stefanov [^1]
* object literal notation better to use when creating objects as it's easier to read and has better performance not having to look up scope chain to general global _Object_ constructor
* also using _new Object() constructor_ has issues with dynamic typing that may lead to unwanted results, eg. boolean, number, string
* when using _new_ statement when creating objects with methods, if want to re-use method and have another object copy or clone this object, instead of creating a duplicate method in memory, instead add to the _prototype_ of that object.


{% highlight js %}
Person.prototype.sayName = function() {
	return "I am " + this.name;
}
{% endhighlight %}

* an object is just a function

{% highlight js %}
var person = new Person()
{% endhighlight %}

* _Person_ is just a function
    

[^1]: Javascipt Patterns by Stoyan Stefanov. [Buy on Amazon](http://www.amazon.com/gp/product/B0046RERXE/)
