---
layout: post
title: "JavaScript strict mode"
description: ""
category: 
tags: [strict, js, javascript, variant]
---
{% include JB/setup %}

## What is it?

`strict mode` or __strict variant__ was introduced in ECMAScript 5 to allow developers to opt in using JavaScript features that provided better error condition checking as some situations in property accessing and value assignments created ambiguity and didn't throw errors. 

## Benefits

Seeing where your code is prone to errors allows you to debug quicker and also removes any ambiguity. Some cases may protect a developer from creating global variables if not assigned in an object/function scope. Strict mode calls attention to areas that should be fixed immediately.

## Where are some improvements made?

* prevents accidental globals `someUndeclaredVar = 'woot';`
* throws error with duplicate object properties `{woot: 'hey', woot: 'yo'}`
* errors on attempt to change an immutable property 

## How to use

{% highlight js %}
// declared at top of js file, instructs JavaScript engine to swtich into this mode
"use strict";
{% endhighlight %}

*Note: * Don't use globally as this may introduce other unexpected errors for files that are dynamically included. Instead, use like the following:

{% highlight js %}
(function() { 
  "use strict";

  function someMethod() {  
      // runs in srict mode
  };

  
  function someMethod2() {  
      // runs in srict mode
  };
})();


function someMethod4 {  
  "use strict";
  // runs in strict mode
}

function someMethod3 {  
// does not run in strict mode 
}
{% endhighlight %}

## Reference

More information on [ECMA-262-5, Chapter 2. Strict Mode](http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/)




