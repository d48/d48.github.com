---
layout: post
title: "Page reflow and repaint caused by CSS"
tags: [css, repaint, reflow]
---
{% include JB/setup %}

I came across some articles regarding css optimization and found out one of the potential causes for a site bug I came across that causes a "reflow" on a mobile website. This is something I need to look into further as this will directly impact how a developer should write code to optimize sites for the desktop and mobile devices.

## Repaint

Occurs when changes are made to an element's skin that changes visibility, but do not effect its layout. 

Examples:
* outline
* visibility
* background color
  
Repaint is expensive because the browser must verify the visibility of all other nodes in the DOM tree.

## Reflow

Even more critical to performance because causes changes that affect layout of a portion or entire page. Reflow of an element causes subsequent reflow to of all child and ancestor elements as well as any elements following it in the DOM.

This can lead to page refresh.

Some causes to page reflow via css:

1. changing the font
2. adding or removing a stylesheet
3. activation of css pseudo classes like :hover
4. manipulating the class attribute
5. a script manipulating the DOM
6. setting a property of the style attribute (inline style)

## Video that show reflow

[Gecko Reflow Visualization - mozilla.org](http://www.youtube.com/watch?v=ZTnIxIA5KGw)

### Sources

1. [Reflows & Repaints: CSS Performance making your JavaScript slow?](http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/)

2. [How to make your own Gecko Reflow Video](http://blog.mozilla.com/gen/2009/04/09/how-to-make-your-own-gecko-reflow-video/)

3. [Profiling CSS for fun and profit. Optimization notes.](http://perfectionkills.com/profiling-css-for-fun-and-profit-optimization-notes/)
