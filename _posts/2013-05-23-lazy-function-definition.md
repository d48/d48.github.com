---
layout: post
title: "Lazy Function Definition"
description: ""
category: 
tags: [pattern, js, javascript, promise, cross-browser]
---
{% include JB/setup %}

I needed this pattern the other day when I was tasked to build out some functionality for a site utility that emails a report to a set user. The Lazy Function Pattern allows a function to be redefined after first pass. This is great for initialization code where assignment happens on first run or useful for cross-browser feature detection to check what is supported and apply execution based on browser.

## Sample code

{% highlight js %}
var person = function() {
  var bornDate = new Date();

  person = function() {
      return bornDate;
  }

  return person();
};
{% endhighlight %}

## Breakdown of code

When we first call `person()`, the variable `bornDate` is assigned the current Date/time. `person` is then reassigned to a new function object with the `bornDate` variable in it's closure. The return value at this point will now always be what is within the `person` variable reassignment, which is `bornDate`.

Subsequent calls will now always return with the variable `bornDate` value that is within its closure.

## Promise

Another way to look at this function is that the outer first assigned to `person` is a "promise". It promises that the first time it is run it will redefine `person` to a more useful function.

## Cross-browser use

Using the lazy function definition pattern is great when you want to run browser-specific code when doing initial checks. This pattern is efficient because it will only run the check once and each subsequent call to it will execute the browser specific code. Win!


## Personal application

The other day I was building out a function for a page utility that created a mailto link of a report for a button. The actual mailto body was a concatenated url encoded string from the contents of the report. I only want this mailto link building to occur once if the user clicks the button, and I save on code execution if the user never even clicks the button, making the utility slightly more performant. This was a good candidate for lazy function definition so that initial click will build the mailto link and would then resolve, and any subsequent links would just have the link resolution occur. Good to know this pattern is available. I can't wait to use it.
