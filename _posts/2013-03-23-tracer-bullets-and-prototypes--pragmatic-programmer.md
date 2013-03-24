---
layout: post
title: "Tracer Bullets and Prototypes : Pragmatic Programmer"
description: ""
category: 
tags: [tracer, bullets, prototype, pragmatic, programmer, book]
---
{% include JB/setup %}

## Tracer Bullets

![tracer bullet](http://www.arl.army.mil/www/pages/578/image.1.large.jpg)

How do you shoot a machine gun in the dark to determine if it hits your target?  You can do some calculations based on gun type, environment, trajectory, etc., or you can insert some special bullets that have phosphorus that ignites when it leaves the gun leaving a pyrotechnic trail from the gun to the target. This is preferred over the labor of calculation since feedback is immediate.

How does this tie in with programming and software design? Sometimes developers want code that glows in the dark too, if there's some vague requirement and a goal is to try to hit some specific target. When the `tracer bullet` technique is applied, we get some type of immediate feedback as well since some portion of the system is created, visible and repeatable.

## Caveats of Tracer Bullet methodology

* Consistent with idea that project is never finished
* There will always be changes and things to add to the system
* It is an incremental approach since the requirements were completely defined
* Use in situations where you're not 100% sure of where you are going but you can adjust until you hit what you're trying to aim for

## Difference with Prototypes

A `prototype` generates disposable code. It's not meant to have everything fleshed out like error checking, complete working submodules, real data, etc. It's main aim is to explore risky or uncertain elements to evaulate without committing to building the real item. This offers changes for correction at a greatly reduced cost than from finding out after the system is fully developed.

`Tracer bullets` define a system to see how everything connects. As requirements get more finalized, more pieces can be defined better and hit closer to the final target.

> Prototyping is a **learning experience**. It's value lies not in the code produced, but in the lessons learned.[^1]

[^1]: The Pragmatic Programmer, by Andrew Hunt and David Thomas


