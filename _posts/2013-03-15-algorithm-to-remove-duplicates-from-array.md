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
