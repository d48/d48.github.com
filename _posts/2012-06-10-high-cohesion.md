---
layout: post
title: "High-Cohesion"
description: ""
category: 
tags: [cohesion, principles, patterns]

---
{% include JB/setup %}

##Cohesion

**Cohesion** is a measure of how strongly-related or focused the responsibilities of a single module are. As applied to object-oriented programming, if the methods that serve the given class tend to be similar in many aspects, then the class is said to have high cohesion. In a highly-cohesive system, code readability and the likelihood of reuse is increased, while complexity is kept manageable.

To achieve high-cohesion

* Functionality in a class accessed through its methods are similar
* The methods carry out similar activities, using fine-grained or closely related data

> **encapsulation** extent to how much a class or object reveals its implementation details. These are essentially self-contained building blocks that can easily be modified and pieced together to create larger applications.
