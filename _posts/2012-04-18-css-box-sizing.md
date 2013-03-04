---
layout: post
title: "CSS box-sizing to handle cross-browser layout"
tags: [css, cross-browser]
---
{% include JB/setup %}

## CSS and box-sizing property

I just came across [this blog post from Paul Irish](http://paulirish.com/2012/box-sizing-border-box-ftw/) and I'm eager to use this once I'm on a project that doesn't need to support IE7 natively, although there is a polyfill, or [plugin/method, available to handle it on github](https://github.com/Schepp/box-sizing-polyfill). 

This basially allows you to define how boxes in your layout will handle padding when content is inside. Before this box-sizing property was used, users would often have to modify their predfined width/height setting to accomodate if content filled up the box or not in order to achieve the final net size that was intended. 

__For example__
  
If I wanted a 200 pixel wide box and added content in it that had padding of 20 pixels on each side, I would have to update the the css definition for that box to be -40 pixels to final width of 160 pixels.

Yes, very irritating. I just want to define it once and be done with that. box-sizing to the rescue:

{% highlight js %}
	/* In css file, vendor prefix to handle cross-browser */
	* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; } }
{% endhighlight %}
