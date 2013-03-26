---
layout: post
title: "Abstraction in Object Oriented Design"
description: ""
category: 
tags: [ood, object, oriented, design, abstraction, abstract]
---
{% include JB/setup %}

## Function vs. Functionality

**Function** is the object's behavior.

**Functionality** is the set of instructions or steps to perform that behavior.

**Abstraction** is what the base or superclass requires of it's derived or subclass to define the functionality of a behavior. Can force the derived class to define a function by having the base class be declared as **abstract**.

## Abstract class

> a class that cannot be instantiated. Purpose is to have a subclass inherit from it in order for its data and behavior to be used in an application.

An abstract class can have member or method functions designated as abstract. This will require derived class to redefine the abstract method, otherwise a compiler error will show.

![abstract methods](http://f.cl.ly/items/2G3B3t2I2G1X3s0c0f1E/Screen%20Shot%202013-03-25%20at%2011.07.01%20PM.png)
