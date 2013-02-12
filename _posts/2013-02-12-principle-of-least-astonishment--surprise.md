---
layout: post
title: "Principle of Least Astonishment / Surprise"
description: ""
category: 
tags: [webdev, principle, practice, software, pattern]
---
{% include JB/setup %}

Came across this while reading an article on binding JavaScript context and this was referred to as something to avoid when there are possible conflicts in user interface interactions.

> **Principle of Least Astonishment** - or POLA/PLA applies to user interface design, software design, and ergonomics. Also known as __rule__ or __principle of least surprise (POLS)__.
>
> The principle goal is to exploit users' pre-existing knowlege as a way to minimize the learning curve by designing interfaces that borrow heavily from "functionally similar or analagous programs or systems with the users are likely to be familiar".
>
> When two elements of an interface conflict, or are ambiguous, the behavior should be that which will least "surprise" the user. 

The design should match the user's experience, excpectations, and mental models. What is least surprising may depend on the expected audience, user, programmers, or system admins.
 
_Example:_ a programmer should try to think of the behavior that will least surpise someone who uses the program, rather than that behavior that is natural from knowing the inner workings of the program.
  
