---
layout: post
title: "Back to Basics. Javascript Execution Context and Scope Chain"
description: ""
category: 
tags: [javascript, js, scope, chain, context, this, function, execution, global]
---
{% include JB/setup %}

## Notes

I need to wrap my head on the underlying process that's happening when JavaScript is parsed and interpreted so I can make better decision in how I'm declaring variables and functions. I assume this will produce better, quality code with less headache in fixing bugs. As well as provide a performance boost if I know how my function and variable declarations are effecting the execution of the JavaScript.

## Execution Context Stack

When a browser begins to run through a JavaScript file, it first enters through a `global context` which gets added to a stack. When it enters into a function, it enters a new `execution context`, and this gets added on top of the stack. As the script leaves a function or execution context, 

## Execution Context detail

Inside the JavaScript interpeter, there are 2 stages that happen:

1. Creation stage
	* The function is called but no code gets executed inside yet
	* Creates variables, functions, and arguments
	* Creates the Scope Chain
	* Determines the value of `this`
  * This is where the `execution content object` is created
2. Activation / Code Execution stage
	* Assign values and references to functions, also interpret / execute code.

The execution context can be seen as an object with these properties:
{% highlight js %}
executionContextObj = {
    variableObj: { /* func args, parameters, inner var and func declarations */ }
  , scopeChain: { /* variableObj + all parent execution context's variableObj*/ }
  , this: {}
}
{% endhighlight %}



