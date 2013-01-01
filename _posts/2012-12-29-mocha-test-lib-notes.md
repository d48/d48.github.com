---
layout: post
title: "sinon test lib with mocha notes"
description: ""
category: 
tags: [sinon, mocha, node.js, test, testing, tdd]
---
{% include JB/setup %}

Just wanted to save some notes from using sinon library for stubs within the mocha test framework in a node.js app i'm hacking away at. When trying to run this particular code for stubbing the `console.log` method:

{% highlight js %}
sinon.stub(console, 'log', function(text) {
  var string;
  string += "#1: general\n";
  string += "#2: grocery\n";

  text.should.eql(string);
  console.log.restore();
});
{% endhighlight %}

In my `todos` app, I redefine `console.log` into a variable called `log` for shorthand. This trips up sinon.js in the stubbing mechanisim above. A small inconvenince as this forces me to rewrite my app just so I can cover these test cases. The parameters that the stub method is expecting are:

1. object
2. method
3. callback

Because of this, I just rewrote my output method to export a single string that I can test against since it will ignore multiple console.log calls from a given stubbed method

{% highlight js %}
// instead of this output
for(...) { 
	console.log('string...');	
}

// i wrote this so i can use the sinon.stub
var string;
for(...) { 
	string += 'string...';		
}
console.log('string... string...');
{% endhighlight %}


