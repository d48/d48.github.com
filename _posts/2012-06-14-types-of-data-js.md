---
layout: post
title: "Javascript - Types of Data"
description: ""
category: 
tags: [javascript, variables, data, types, primitive, reference]
---
{% include JB/setup %}

## Primitive and Reference Values

ECMAScript variables may contain two different types of data: primitive values and reference
values. __Primitive values__ are simple atomic pieces of data, while __reference values__ are objects
that may be made up of multiple values.

When a value is assigned to a variable, the JavaScript engine must determine if it's a primitive
or a reference. The five primitive types were discussed in the previous chapter: Undefi ned,
Null, Boolean, Number, and String. These variables are said to be accessed by **value**, because
you are manipulating the actual value stored in the variable.

Reference values are objects stored in memory. Unlike other languages, JavaScript does not permit
direct access of memory locations, so direct manipulation of the object's memory space is not
allowed. When you manipulate an object, you're really working on a reference to that object rather
than the actual object itself. For this reason, such values are said to be accessed by **reference**.

How two primitives data types (variables) are assigned reference values (Objects) and are created that point to 2 different areas in the heap:

    
{% highlight js %}
var a = new Object();
var b = a;
// these point to the same object in the heap

// assigning another variable c = new Object(); would point to a different object on the heap
// which would mean a != c even though the properties within those 2 objects are null or undefined
{% endhighlight %}
    
![reference values](http://content.screencast.com/users/User48/folders/Jing/media/5c64e640-77fb-4660-9689-999cf2e9b7de/2012-06-14_0059.png)

> **heap**: dynamically allocated memory
