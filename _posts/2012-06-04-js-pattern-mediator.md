---
layout: post
title: "Book Notes - Mediator Pattern"
description: ""
category: 
tags: [pragmatic, programmer, book, mediator, pattern]
---
{% include JB/setup %}

## Mediator Pattern

> **Tight coupling** - When objects know too much about each other and communicate directly; calling each other's methods and changing properties.

Mediator pattern promotes __loose coupling__ and helps improve maintainability since updating an object is contained within itself and won't effect others. Independent objects (colleagues) do not communicate directly but through a __mediator__ object. When one of the colleagues change state, it notifies the mediator and the mediator handles communicating that change to the colleagues that should know about it.

![mediator pattern](http://content.screencast.com/users/User48/folders/Jing/media/9d0d4d3b-1f24-4879-9714-eb0b93951baf/00000033.png)

[Demo for mediator pattern](http://jspatterns.com/book/7/mediator.html)
