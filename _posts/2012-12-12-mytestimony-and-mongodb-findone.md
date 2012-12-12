---
layout: post
title: "mytestimony and mongodb findOne"
description: ""
category: 
tags: [mytestimony, mongodb, findOne, testimony]
---
{% include JB/setup %}

Working with **mongdob** on the [MyTestimony.com web project](http://github.com/design48/mytestimony), I had a chance to update the routes to include a user clicking on a _View_ button to open a testimony page.

# MondoDB native driver api

The method to find a testimony with specific id is:

{% highlight js %}
db.collectionName.findOne({_id: new ObjectID('generatedstring')});
{% endhighlight %}

# Screenshots

This allowed me to have button for _View_:

![button](http://f.cl.ly/items/0F0q3D0C0u1V3F0l3s0C/Screen%20Shot%202012-12-12%20at%2012.10.49%20AM.png)

Click to open a testimony page:

![detail](http://f.cl.ly/items/10413q2F37153b1H1M1h/Screen%20Shot%202012-12-12%20at%2012.11.37%20AM.png)

