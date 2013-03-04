---
layout: post
title: "Book Notes - Observer Pattern"
tags: [javascript, js, observer, pattern]
---
{% include JB/setup %}

## Observer Pattern

Also called _subscriber/publisher_ pattern, it's mainly used to promote loose coupling between your pieces of code. An object subscribes to anothers object's specific activity and gets notified. The subscriber is also called **observer**, while the object being observed is called **publisher** or **subject**.  The publisher notifies or calls all the subscribers when an important event occurs and may often pass a message in the form of an event object.

I believe this is the pattern used in Backbone.js with the models and views setup and how a view essentially watches or has _subscribed_ for model changes and updates based on that change.
