---
layout: post
title: "Updating todo node.js library with event emitter"
description: ""
category: 
tags: [node.js, todo, event, emitter, emit, javascript]
---
{% include JB/setup %}

I recently updated a node.js library that allows you to create and manage a todo list at the command line or OSX terminal. This is handy especially when you're programming within that environment and want to quickly make a note of an item you need __todo__ of course.

I'm just getting to learn node.js and I needed a way to have a module update another module to do some functionality upon an "event". Using the [Event Emitter](http://nodejs.org/api/events.html) class in node.js worked perfect.

So here's the use case, I needed a way to always show the list of todo items upon an action like

* adding to the list
* removing from the list
* or clearing it out

The original package didn't have it, so I added it using a **custom event**. Upon a given user action, the object __emits__ an event name to any object that is **listening**. Each listening object can define what they do upon the event being received. It just so happens I have my object list out all the todo items. Awesome.

![show list upon each action](http://content.screencast.com/users/User48/folders/Jing/media/570d6898-8480-46b7-acda-2a182df2dba2/00000090.png)


The [source code highlighted](https://github.com/design48/todo/commit/dec8347b2613979287042706bb05a8d940d5d52a) lists out the lines below it that were added
