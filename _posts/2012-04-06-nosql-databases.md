---
layout: post
title: "NoSQL Databases"
tags: [NoSQL, MongoDB, CouchDB]
---
{% include JB/setup %}

## NoSQL databases

These are considered often by the way they store data: _document store, key-value stores, BigTable implementation, and graph databases_, different from their relational database counterparts due to that:

	1. Do not use SQL as their primary language
	2. The data stores may not required fixed table schemas
	3. Do not support join operations
	4. May not give full ACID (atomocity, consistency, isolation, durability) guarantees
	5. Typically scale horizontally = to add more nodes to a system, e.g., adding a new computer to a distributed software application, or scaling from one web server to three.

## Map/Reduce function

Used by Google to index the entire World Wide Web. Take a given set to compute or input, Map function used to break and distribute into smaller parts to form computation by worker nodes. Reduce function used to collect or bring these computations together to come to a refined or _reduced_ result, or output. This software framework usually stores inputs and outputs into a distributed file system.

![Sample computation](http://content.screencast.com/users/User48/folders/Jing/media/5736b7e3-da11-4800-bd8a-6c830bb56189/2012-04-06_0042.png)(Sample computation)[^1]

{% highlight js %}
// Map function
function(ticket) {
  emit(null, ticket.checkout);
}

// Reduce function
function(key, checkouts) {
  return sum(checkouts);
}
{% endhighlight %}

## Why The Change from Traditional RDBMS Solutions

Google, Amazon, Twitter and Facebook had significantly different challenges in dealing with data that needed to scale horizontally due to the large volume. Performance and real-time nature more important than consistency, which traditional relational databases spent a high amount of processing time to achieve. **NoSQL-Databases** are often highly optimized for retrive and append operations and offer little functionality beyond record storage, or _key-value stores_.[^2]

## CouchDB vs. MongoDB[^3]

I would try CouchDB over MongoDB for these reasons.

1. Better for offline storage and then syncing and replicating database once online
2. _Crash-only_ design, where the database can terminate any time and remain consistent.
3. Map/Reduce inherent in CouchDB in building all views (performance)
4. Mobile embedded databases on phones because of its online/offline replication/sync capabilities.

[^1]: [Wikipedia: NoSQL Databases](http://en.wikipedia.org/wiki/NoSQL)
[^2]: [CouchDB vs. MongoDB slides](http://www.slideshare.net/gabriele.lana/couchdb-vs-mongodb-2982288)
[^3]: [Comparing CouchDB vs. MongoDB - from mongodb.org](http://www.mongodb.org/display/DOCS/Comparing+Mongo+DB+and+Couch+DB)
