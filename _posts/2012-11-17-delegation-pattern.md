---
layout: post
title: "Delegation Pattern"
tags: [delegation, pattern, programming, js, javscript, mvc, sandbox, hub]
---
{% include JB/setup %}

# Definition

**Delegation** pattern is where an object, instead of performing one of its tasks, delegates the task to an associated helper object. The helper object is known as a __delegate__ and is given the responsibility to execute a task for the **delegator**. This pattern is one of the fundamental abstraction patterns that underlie other software patterns such as __composition__, __mixins__ and __aspects__. 

An example of a delegation pattern in **JavaScript MVC** is the use of a *Sandbox* or *Hub* that delegates to a helper object like it's Application core which can then delegate again to it's Base Library. This is a concept that JavsScript guru Nicholas Zakas presents in his talks regarding [Scalable Javascript Application Architecture](http://www.slideshare.net/nzakas/scalable-javascript-application-architecture).
