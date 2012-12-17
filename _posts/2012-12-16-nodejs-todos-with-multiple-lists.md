---
layout: post
title: "node.js todos with multiple lists"
description: ""
category: 
tags: [node.js, js, javascript, todos]
---
{% include JB/setup %}

# Some progress

So I've been doing some testing on the json structure for enabling multiple lists on the todo cli tool that I've been hacking away at. There's two components to get this working; 

**One**

Have a nested object with arrays so can iterate through list names and each lists's todo items:

![json sample](http://content.screencast.com/users/User48/folders/Jing/media/086178f4-48e4-441f-8204-b41b5db9cfc1/00000101.png)


**Two**

Having a persitent data store to get the selected list name so as to apply actions to. Since there is no sense of state in a node.js cli app we need to create one. 

We are already saving a list of todo items in a json file, we can save this hash of what the `current` list is in the same or separate file. I didn't want to pollute this existing json file storage of todos so I decided to place it in a separate file.

Now when we return back to our todo app to run commands on it, a sense of `state` has been established by pulling this name from the file, and then we can resume with our actions of listing, adding, or removing items from the main data store with this saved name as the key, yeehaw.

# Note
This is still a work in progress but I'm making small steps to finally get my own todos working at the command line the way I like it.

[Some code for the work in progress](https://github.com/design48/todo/commit/94291cd86a52dc8f31d8c5732e882d5d9f7b2ea5)
