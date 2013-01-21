---
layout: post
title: "Webstorm node.js debug configuration"
description: ""
category: 
tags: [webstorm, ide, nodejs, debugging]
---
{% include JB/setup %}

Some WebStorm IDE configuration settings so that I can debug a node.js application. I didn't need to do anything special with MongoDB. Just had to make sure `$mongod` was running before I set WebStorm to `run`.

node.js app debug config
[node.js app debug config](http://design48.net/i/webstorm-debug-setup1.png)

node.js remote debug config
[node.js remote debug config](http://design48.net/i/webstorm-debug-setup2.png)

After clicking on run, set a breakpoint in your node.js app and click on the debug button. You should be good to go and step into code, expecting vars and what not.

