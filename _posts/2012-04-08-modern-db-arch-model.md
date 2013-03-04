---
layout: post
title: "Modern Database Architecture Model"
tags: [database, nosql, model]
---
{% include JB/setup %}

## Why use NoSQL?[^1]

Modern web applications are built to scale out -- add more comodity web servers behind a load balancer to support more users. Scaling out is the core principle behind the cloud computing model: virtual machine instances can easily be added or removed to match demand. Scaling out is less expensive than what traditional relational database management systems or RDBMS offer today; if you need to grow, you would need to buy larger servers.

## Software has changed

Looking at the last 35 years, software needs have changed. Web and mobile applications have a lot more users transacting. NoSQL technologies enable cost-effective management of data because of its ability to scale and replicate.

## Strict Schema

When dealing with RDBMS technology, you would need to know the data beforehand before storing. Rapidly evolving business and market environment have different needs to address:

1. A way to capture new information that wasn't previously considered
2. A way to make rapid changes to an application for its behavior impacting data formats and content

## Terminology

**Auto-sharding** - sometimes called elasticity, to automatically spread data across servers, without requiring applications to participate. Servers can be added or removed from the data layer without application downtime.

**Data replication** - store multiple copies of data across the cluster to ensure high-availability and support disaster recovery.

**NoSQL database** - also known as scale out database

[^1]: [Couchbase - Post-relational data management for interactive software systems](http://www.couchbase.com/why-nosql/nosql-database)
