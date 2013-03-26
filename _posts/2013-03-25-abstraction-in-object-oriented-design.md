---
layout: post
title: "Abstraction in Object Oriented Design"
description: ""
category: 
tags: [ood, object, oriented, design, abstraction, abstract, encapsulation]
---
{% include JB/setup %}

## Function vs. Functionality

**Function** is the object's behavior.

**Functionality** is the set of instructions or steps to perform that behavior.

**Abstraction** is what the base or superclass requires of it's derived or subclass to define the functionality of a behavior. The base class can force the derived class to define an implementation for a function if the base class declares that function as **abstract**.

## Abstract class

> a class that cannot be instantiated. Purpose is to have a subclass inherit from it in order for its data and behavior to be used in an application.

An abstract class can have member or method functions designated as abstract. This will require derived class to redefine the abstract method, otherwise a compiler error will show.

![abstract methods](http://f.cl.ly/items/2G3B3t2I2G1X3s0c0f1E/Screen%20Shot%202013-03-25%20at%2011.07.01%20PM.png)


## How does this differ with Encapsulation?

**Encapsulation** is a way to define objects in a system so there are associated data and behavior (procedures) tied to it. The only way to access attributes and procedures of an object is to create an **instance** of it.

Given picture below, the __attributes__ are `ID, name, and Graduation`. The member functions or behavior (procedures) are `Write()` and `Display`. These attributes and behaviors are said to be **encapsulated** in the `Student` class.

![student class - encapsulation](http://f.cl.ly/items/1g3E1A2Z2V112o2K3W1O/Screen%20Shot%202013-03-25%20at%2011.54.45%20PM.png)

## Purpose for encapsulation

The main purpose for encapsulation is protection, defining explicitly how an object's data is accessed or what member functions can be called on it.
