---
layout: post
title: "Node.js and networking i/o"
tags: [node, node.js, javascript, js]
---
{% include JB/setup %}

# Book notes : Learn Node.js in 24 hours

The terms _synchronous_ and blocking can be used interchangeably and refer to an example where execution of code stops until a function returns. A script is not able to continue if an operation blocks, and for the end user, this means that they simply have to wait. 

The terms _asynchronous_ and non-blocking can also be used interchangeably and refer to the callback-based approach of allowing a script to perform operations in parallel. A script does not need to wait for the outcome of an operation before proceeding as this will be handled by callback when the event happens. Using the asynchronous approach, operations no longer have to happen one after another.

{% highlight js %}

// example of synchronous/blocking functions
function myName(arg1, arg2) {
	//do something
	return something;
}

function myName2() {
	//do something
	return somethingElse;
}

myName(woot,woot);
myName2();





// example of asynchronous functions

var http = require
function myName(arg1, arg2, function() {
	//do something with args
	//callback stuff to do
}

function myName2() {
	http.get({ host: 'google.com' }, function(response) {
		console.log('response returned' + response);
	}).on('error', function(e) {
		console.log('there was an error: ' + e);
	}
}

{% endhighlight %}
