---
layout: post
title: "Working with MongoDB"
tags: [mongodb, mongo, bson]
---
{% include JB/setup %}

# Working with MongoDB 

Today I was looking through the MongoDB docs learning how to create and query a collection, here's a few helpful commands to insert, query, and filter through some document sets. I'm really liking it and forward to building an app for the MyTestimony.com idea I've been wanting to do.

Given a MongoDB collection below:

{% highlight js %}
{
	"_id" : ObjectId("5042743d26af8681f05582f9"),
		"testimony" : "This is my sample testimonty",
		"username" : "Ryan"
}
{
	"_id" : ObjectId("504277f826af8681f0558314"),
		"testimony" : "Once upon a time it was like this",
		"username" : "Reginald"
}
{
	"_id" : ObjectId("50427d01e4ba90f9269360bf"),
		"username" : "Rya",
		"testimony" : "God is awesome"
}
{
	"_id" : ObjectId("50427d3ce4ba90f9269360c0"),
		"username" : "Rya",
		"testimony" : "God is awesome",
		"tags" : [
			"cool",
		"awesome"
			]
}
{
	"_id" : ObjectId("50427d77e4ba90f9269360c1"),
		"username" : "Rya",
		"testimony" : "God is awesome",
		"tags" : [
			"cool",
		"awesome",
		"fantastic"
			]
}
{
	"_id" : ObjectId("50428194e4ba90f9269360c2"),
		"username" : "Ray",
		"testimony" : "God is so faithful",
		"tags" : [
			"cool",
		"awesome",
		"fantastic",
		"glorious"
			]
}

{% endhighlight %}
  

### To obtain all documents 

`$ db.collectioname.find();`

  
### To obtain all documents that have "tags"

`$ db.collectioname.find( { tags: {$exists: true} } );`
  
### To obtain all documents that have "tags" with 'cool' key in the array

`$ db.collectioname.find( { tags: { $all : ['cool'] }} );`

  
### To obtain first 10 documents in a collection

`$ db.collectioname.find().limit(10);`

  
### To obtain next 10 documents in a collection with offset of 5

`$ db.collectioname.find().skip(5).limit(10);`
  

### To return all documents only showing "tags" field

`$ db.collectioname.find( {}, { tags: 1 } );`
  

### To return all documents only with specified value only returning "tags" key

`$ db.collectioname.find( {tags: {$all: ['cool']} }, {tags: 1} );` 
  

