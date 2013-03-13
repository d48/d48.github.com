---
layout: post
title: "Grooveshark api format"
description: ""
category: 
tags: [grooveshark, api, json]
---
{% include JB/setup %}

# Finally!

Finally figured out the darn formatting needed for Grooveshark. Either I need a better visual or just need to learn how to read better, but here's an example in case anyone needs it with some steps to produce

# JSON Payload to start a session
{% highlight js %}
// to start a session
{
    "method": "startSession",
    "parameters": {},
    "header": {
        "wsKey": "uniquekeyfromgrooveshark"
    }
}
{% endhighlight %}

## Command line
Then from the command line, where _sig_ is a hash string created from an **hmac** function using:
* unique _secret_ provided by Grooveshark upon [api credentials request](http://developer.grooveshark.com/api)
* _JSON payload_ above
* set to _md5_ format 
* digest is _hex_

Make sure this is all on one line
 
`$ curl -X POST https://api.grooveshark.com/ws3.php?sig=123cc3d7f0f56c201e2b251eb888abc \`
-d '{"method": "startSession","parameters": {},"header": {"wsKey": "uniquekeyfromgrooveshark"}}'

Sample **hmac** function using node.js:
{% highlight js %}
var crypto = require('crypto')
  // refer to payload format above
  , payload = '{"method":"startSession", ...'
  , secret = 'abcdeg'
  , hash
  ;

hash = crypto.createHmac('md5', secret).update(payload).digest('hex');
return hash;
{% endhighlight %}

## Response from curl request
{% highlight js %}
// then cache/reuse this sessionID for future
{
    "header": {
        "hostname": "someStringABC123"
    },
    "result": {
        "success": true,
        "sessionID": "777efa594291a1f4d804cb7192abc123"
    }
}
{% endhighlight %}

Hope this can help someone.


