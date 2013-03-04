---
layout: post
title: "QUnit: Javascript Unit testing framework and Backbone.js"
tags: [qunit, javascript, testing, tdd, backbone.js, sinon.js]
---
{% include JB/setup %}

## QUnit[^1]

Unit testing framework for Javascript. Using it to test Backbone.js app that I'm going through.

## Sinon.js[^2]

Test spies, stubs and mocks for Javascript testing.

> **Test spy:** A function that records arguments, return value, the value of _this_ and exception thrown (if any) for all its calls. Useful to test both callbacks and how certain functions/methods are used throughout the system under test.

> **Stubs:** Functions or spies with pre-programmed behavior. Use a stub when you want to: 
	1. Control a method's behavior from a test to force it down a specific path, e.g., forcing a method to throw an error in order to test error handling.
	2. When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior like an XMLHttpRequest).

> **Mocks:** and mock expectations, are fake methods (like spies) with pre-programmed behavior (like stubs) as well as _pre-programmed expectations_. Use for _method under test_. In every unit test, there should be one unit under test. If you want to control how your unit is being used and like stating expectation upfront (as opposed to asserting after the fact), use a mock. 

[^1]: [http://qunitjs.com/](http://qunitjs.com/)
[^2]: [http://sinonjs.org/](http://sinonjs.org/)
