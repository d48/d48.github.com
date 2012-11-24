---
layout: post
title: "MongoDB embedded collections"
tags: [mongodb, mongo, nosql, embedded, collections]
---
{% include JB/setup %}


# Designing MongoDB Schemas with embedded and bucket structures

I found this link to a [blog article](https://openshift.redhat.com/community/blogs/designing-mongodb-schemas-with-embedded-non-embedded-and-bucket-structures) on how to define your MongoDB schema and make choices for **embedded** and **non-embedded** structures, as well as the use of buckets.

The main takeways are at the conclusion:

1. The nature of MongoDB and storage strategy is that you have the ability to change the structure. This allows you to move from simple to more complex strategies at will
2. Starting simple, can maintain development velocity early and migrate to a more scalable strategy as the need arises. I like this as I will be testing a small feature for the [mytestimony web app](https://github.com/design48/mytestimony) project I want to implement.

More and more I'm liking MongoDB because of the easy nature of working with JSON data, and MongoDB's api for database queries are straight forward.
