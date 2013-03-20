---
layout: post
title: "Algorithm to remove duplicates from array"
description: ""
category: 
tags: [algorithm, array, hash, hashtable, prime]
---
{% include JB/setup %}

Was thinking about this problem to remove duplicates from an array and thought of an algorithm whose runtime is linear given the hash function is good (uniform distribution of hash values that helps with low or no collisions) and the load factor is low.

{% highlight js %}
/*
 * Removes duplicate elements in array via use of hash table.
 * Hash Table will create buckets with prime table size.
 * Iterate through array in linear time with O(1) runtime for hash table operations.
 * If element not in the table, push to array that is returned as result.
 * 
 * @param {Array} arr - array of strings
 * @return {Array} results - array with duplicate entries removed 
 */
function removeDuplicatesWithHashTable(arr) {
    var results = [], 
        ht = new HashTable(arr.length);

    for (var i = 0; i < arr.length; i++) {
        // not a duplicate?
        if (ht.find(arr[i]) === null) {
            ht.insert(arr[i]); // save
            results.push(arr[i]);
        }
    }

    return results;
}
{% endhighlight %}


## Hash Tables

A practical application of hash tables are in-memory tables, such as an associative array where the indices are strings or other complicated objects. In JavaScript, there are associative arrays we can use from the language in place of a separate hash table construct for this algorithm. Updated implementation below:


{% highlight js %}
function removeDuplicates(arr) {
    var results = [], dups = []; 

    for (var i = 0; i < arr.length; i++) {
  
        // check if not a duplicate
        if (dups[arr[i]] === undefined) {
  
            // save for next check to indicate duplicate
            dups[arr[i]] = 1; 
  
            // is unique. append to output array
            results.push(arr[i]);
        }
    }

    return results;
}
{% endhighlight %}


## Using Object.keys[^1]

Was discussing with a co-worker the use of associative arrays and he mentioned JavaScript's `Object.keys` method that returns an array of the enumerable properties of an object that is passed through. 

Using this instead I can just map the values of the input array to keys of another array. Taking advantage of the associative array property of not duplicating a key, the `Object.keys` method will just return my unique strings. 

Our run time is still linear O(n) plus the operation for Object.keys

{% highlight js %}
function removeDuplicates(arr) {
    var results = [];

    for (var i = 0; i < arr.length; i++) {
        // just insert into result array
        results[arr[i]] = null; 
    }

    return Object.keys(results);
}
{% endhighlight %}



[^1]: Updated 03/15/2013 to include Object.keys method
