---
layout: post
title: "Backbone Notes - Controllers"
description: ""
category: 
tags: [backbone.js, backbone, controllers]
---
{% include JB/setup %}

## Controllers

Controllers are an intermediary between models and views which are classically responsible for two tasks: they both update the view when the model changes and update the model when the user manipulates the view.

_So does Backbone.js have Controllers?_ 
Not really. Backbone's Views typically contain "controller" logic, and Routers are used to help manage application state, but neither are true Controllers according to classical MVC.
