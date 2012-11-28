---
layout: post
title: "JavaScript function declaration vs function expression"
description: ""
category: 
tags: [js, javascript, function, declaration, expression]
---
{% include JB/setup %}

Given the code below:

{% highlight js %}
alert(fn());

function fn() { 
	return 'this is my function declaration';
}
{% endhighlight %}

Even though `fn` is defined after the alert method, it will still be evaluated since **function declarations** are parsed and evaluated before any expressions contained in scope. 

There are some nuances on what makes a function a declaration or an expression. Some more code examples are below to show how this changes:


{% highlight js %}
// function declaration because it's part of a Program
function foo(){} 

// function expression: due to grouping operator of the outside parens, similar to (var x = 5), this is considered an expression
(function foo(){}); 

// function expression, since it's part of an AssignmentExpression
var bar = function foo(){}; 

// function expression, since it's part of a NewExpression
new function bar() {};  

(function(){ 
	// function declaration, since it's part of a FunctionBody
	function bar(){}; 	
})();
{% endhighlight %}
