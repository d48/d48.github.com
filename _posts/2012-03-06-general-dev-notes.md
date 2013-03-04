---
layout: post
title: "General dev notes"
tags: [notes, dev]
---
{% include JB/setup %}

## API development

* URL structure
* CRUD methods - Create, Read, Update, Delete


## PivotalTracker

* project management tool
* create Stories for estimating time to complete work
* prioritize work in the Backlog
* iterations
* velocity = to keep track or predict how much your team will complete each week
* can also use for bugs, chores, releases
   
## memcached

Used to enhance performance of website by caching data and objects in RAM to reduce number of times an external data source (such as a database or API) must be read.

Code sample:

{% highlight js %}
function get_foo(int userid) {
    /* first try the cache */
    data = memcached_fetch("userrow:" + userid);
    if (!data) {
       /* not found : request database */
       data = db_select("SELECT * FROM users WHERE userid = ?", userid);
       /* then store in cache until next get */
       memcached_add("userrow:" + userid, data);
    }
    return data;
}
{% endhighlight %}

## To look into

[Zepto.js](http://zeptojs.com/)
[Underscore.js](http://documentcloud.github.com/underscore/)
