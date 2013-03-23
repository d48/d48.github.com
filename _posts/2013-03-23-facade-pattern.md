---
layout: post
title: "Facade Pattern"
description: ""
category: 
tags: [facade, pattern]
---
{% include JB/setup %}

## Definition

In doing more planning for the modules/components of a project I'm working on, I'm designing what the system will be composed of and how best to implement them for scalability and object reuse. A pattern that came up was the use of a `Facade`, or an object that provides a simplified interface to a larger body of code. 

Something analagous to this in modern web development is the use of APIs, or an application programming interface that consists of software component that can communicate with each other. What's usually given is a set of methods or function signatures that indicate their input and will provide some service or output. Through one, unified interface, access to the system and its components are provided, simplifying its use.

## Benefits of using

Another example of using the **facade pattern** and APIs is creating an interface to a poorly designed API. This would satisfy simplifying an interface to a larger body of code. 

Using the `facade` pattern allows you to decouple your implementation from the subsystem. If your subsystem had to change for any reason and if the interface changed, you would only need to update the facade that interacts with the interface to the subsystem.

## How I'm using it

From a talk given by Nicholas Zakas on [__Scalable JavaScript Architecture__](http://www.slideshare.net/nzakas/scalable-javascript-application-architecture), he provides examples of how components can be connected together while being loosely coupled with use of Modules -> Sandbox -> Core -> Base. Modules communicate to other modules via the Sandbox. Only the Sandbox interacts with the Core. And the Core is the only component that talks to Base. 

The `Sandbox` in this setup is what uses the `Facade` pattern, an object with a simplified interface to the Core. I'm using the pattern in the same way so that any modifications being done in the core are separated from the API or method signatures that the modules are using, thus keeping my components loosely coupled. 

Happy coding.



