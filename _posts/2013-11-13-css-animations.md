---
layout: post
title: "CSS animations"
description: ""
category: 
tags: [css,animations,imperative,declarative]
---
{% include JB/setup %}

# Imperative vs Declarative Animations [^1]

*Imperative* is animation with JavaScript

*Declarative* is animation via CSS

Running animations imperatively runs in JavaScript on the browser's main thread. You may experience jank, or unwanted hiccups and bad performance due to other elements doing style calculations, layout and painting.

Running them declaratively allows the browser to optimize the animations. It can create layers if necessary and run some operations separate from the main thread which gives good performance. The drawback is that there's a lack of expressiveness compared to animating via JavaScript. Authoring animations can get complex and error-prone.

[^1]: [High Performance Animations](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
