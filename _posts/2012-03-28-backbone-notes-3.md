---
layout: post
title: "Backbone.js notes Part 2"
tags: [backbone.js, javascript]
---
{% include JB/setup %}

## View

Sample code

{% highlight js %}
var ObjectView = Backbone.View.extend({
  el: 'div#content',	// Works like jQuery selectors

  initialize: function(args) {
    this.el.innerHTML = 'View initiliazed';
  },

  render: function() {
    this.el.innerHTML = this.model.get('somePropertyName');
    return this;	// Good practice to enable chained calls 
  }
});
{% endhighlight %}

## Routers (used to be Controllers)

Lets you create bookmarkable, stateful apps by using hashbangs. There's discussion how this changes up traditional URI use and the archival nature of the internet, but newer browsers with the History API can use standard URLs like `/page`.

**Backbone.Router** provides methods for routing client-side pages and connecting them to actions and events.

{% highlight js %}
var AppRouter = Backbone.Router.extend({
  routes: {
    "urlName": "mapToFunctionName",
    "games": "gameMethod",
    "help/:page" "helper"
  },

  mapToFunctionName: function() {
    // Any set of methods to prep and process a page of elements
    // Above URL maps from application.com/filename#urlName
  },

  gameMethod: function() {
    // Re-render view to show collection of game elements
    // Above URL maps from application.com/filename#games
  },
});

var appRoute = new AppRouter;

// Enables monitoring for hashchange events and dispatching routes
Backbone.history.start();

//Evaluates on #help/somePageName
appRoute.on('route:helper', function(page) {
  console.log("Do something here with: " + page);
});
{% endhighlight %}
