---
layout: post
title: "Tightly Coupled Code"
tags: [book, pragmatic programmer, tight coupling]
---
{% include JB/setup %}

# Tightly Coupled Code

Why is this bad? It increases the risk that a change to unrelated code somewhere in the system can effect your code.

If _n objects_ know about each other, a change to one object may need the other _n-1_ objects to be updated.

# Law of Demeter for functions

* attempts to minimize coupling between modules in any given program by limiting an objects reach to another objects's methods
* this law states that any method of an object should only call methods belonging to:
	* itself
	* any parameters passed into the method
	* any objects it created
	* any directly held component objects
