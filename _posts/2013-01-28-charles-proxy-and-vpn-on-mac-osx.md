---
layout: post
title: "Charles Proxy and VPN on Mac OSX"
description: ""
category: 
tags: [charles, proxy, vpn, mac, osx, debug, dev, local, prod]
---
{% include JB/setup %}

**Charles Proxy** is a program that allows you to monitor network requests through an HTTP proxy. This is also a great tool to use for debugging and changing up files that get routed from a request. A use case for debugging or general web developement would be that on a production server, if there was a bug happening but not on my local dev machine, I can route the production asset to hit a file on my local dev machine that I suspect is the issue, and it will run the website as if it was obtaining it from the server.

I have configured Charles Proxy to run on my Mac OSX through my company's VPN and there were a few caveats to be aware of:

1. Make sure Charles Proxy is running before connecting to VPN else the program won't read the traffic.
2. For Remote Mapping files to local, https to http, you need to enable the host on Charles Proxy -> Proxy Settings, e.g., with wildcard `*.myremote-host.com`
3. Charles Proxy will change up your Mac OSX proxy network settings so you may not be able to connect to the internet even after shutting down the program. Just uncheck the boxes for Web Proxy (HTTP) and Secure Web Proxy (HTTPS) and be sure to close and restart your browser. VPN being on may also be hanging your requests. Either shut that down or restart it as well.

![uncheck boxes for proxy](http://f.cl.ly/items/19153u363V1p2C40373F/Screen%20Shot%202013-01-28%20at%207.35.42%20PM.png)
