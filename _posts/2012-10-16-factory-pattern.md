---
layout: post
title: "Factory pattern"
tags: [factory, pattern]
---
{% include JB/setup %}

Pattern where different objects of a class are created depending on parameters passed through to it. The _factory_ configures the object based on what is declared.

{% highlight js %}
// example of Factory
var car        = new VehicleMaker('car');
var motorcycle = new VehicleMaker('motorcycle');
var bike       = new VehicleMaker('bike');

car.info(); // 'car' has 4 wheels and a v6 engine
motorcycle.info(); // 'motorcycle' has 2 wheels and a v-twin engine
bike.info(); // 'bike' has 2 wheels and no engine
{% endhighlight %}

  
