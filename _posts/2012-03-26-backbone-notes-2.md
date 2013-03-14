---
layout: post
title: "Backbone.js notes Part 1"
tags: [backbone.js, javascript]
---
{% include JB/setup %}

## Notes on Backbone.js

Dependency is [Underscore.js](http://documentcloud.github.com/underscore/)

Underscore = library for Javascript functions that help in binding, templating, testing and more.

Has 4 major classes:

1. Model
2. Collection
3. View
4. Router (was Controller)

### Model

Represents a single entity, eg., a record in a database. Gives a way to read and write arbitrary properties or attributes on a data set.

{% highlight js %}
	var ObjectName = Backbone.Model.extend({
		initialize: function(){
			console.log("init fired upon new");
		},
		defaults: {
			name: 'Default title',
			anotherProperty: 'random value'
		}
	});
{% endhighlight %}

### Collection

Essentially just a collection of models. Using database analogy, collections are the result from a query where the results are a number of records models.

{% highlight js %}
	var ObjectCollection = Backbone.Collection.extend({
		model: ObjectName,	//specify model that has been created
		someMethod: function() {
			return function(object) {
				object.get('specificPropertyName');
			};
		}
	});
{% endhighlight %}

### View

Views resemble controllers:

1. Listen to events thrown by the DOM and models/collections
2. Represent the application's state and model to the user.

Sample templating libraries to use with `render` function: [Mustache.js](http://github.com/janl/mustache.js), [Haml-js](http://github.com/creationix/haml-js), [Eco](http://github.com/sstephenson/eco), as well as Underscore.js `.template`.

Recommendation: whatever is used, nice if _never_ have to put strings of HTML in your Javascript.
