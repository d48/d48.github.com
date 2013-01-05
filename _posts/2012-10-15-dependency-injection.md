---
layout: post
title: "Dependency Injection"
tags: [di, mock, dependency, injection, interface]
---

{% include JB/setup %}

# Overview

Dependency Injection, or DI, is a software design pattern that allows a choice of component to be made at run-time rather than at compile time. Often used via a config file, eg. Web.config, package.json, etc.

Has 3 elements:

1. a **dependent** consumer
2. a declaration of a component's **dependencies** defined as interface contracts
3. an **injector** sometimes referred to as __provider__ or __container__ that creates instance of classes that implement a dependency interface on request

# Benefits

* Can have multiple implementations of a single software component
* provide "mocks" for unit testing
* locating plugin components
* initializing	software services (eg., config file on heroku to spin up instance)

# Examples

* load plugins dynamically
* provide mock objects for testing
