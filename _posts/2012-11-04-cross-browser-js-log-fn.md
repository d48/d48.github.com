---
layout: post
title: "Cross browser JavaScript log function"
tags: [console, log, debug, js, javascript]
---
{% include JB/setup %}


# To try for IE

More from Secrets from a JavaScript Ninja book. A cross-browser function to implement logging in debugging

{% highlight js %}
function log() {
	try {
		console.log.apply(console, arguments);
	}
	catch (e) {
		try {
			opera.postError.apply(opera, arguments);
		}
		catch (e) {
			alert(Array.prototype.join.call(arguments, " "));
		}
	}
}
{% endhighlight %}
