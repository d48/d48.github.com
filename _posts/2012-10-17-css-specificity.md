---
layout: post
title: "Understanding CSS Specificity"
tags: [css, specificity, cheat sheet, cheat]
---
{% include JB/setup %}

**CSS Specificity** is what's used by web browsers to determine how the page components and elements should be styled, eg., font size, color, widths, etc. In order for me to remember specificity, here's a couple good ways to remember:

* Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element. So in:
  
`body #content .data img:hover`
  
the specificity value would be 122 (0,1,2,2 or 0122): 100 for #content, 10 for .data, 10 for :hover, 1 for body and 1 for img.
> style attribute is inline-style on an html element like `<p style="color: 
> red">` or `<styles type="text/css">` block.
  
* Alternative way: “Count the number of ID attributes in the selector (= a). Count the number of other attributes and pseudo-classes in the selector (= b). Count the number of element names and pseudo-elements in the selector (= c). Concatenating the three numbers **a-b-c gives the specificity**.

More info from here: <http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know>
