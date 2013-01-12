---
layout: post
title: "note on guard, livreload and rvm ruby"
description: ""
category: 
tags: [guard, livereload, ruby, rvm, gems]
---
{% include JB/setup %}

I was configuring `livereload` on a new computer for local dev work on a web project and I ran into an issue where the Chrome extension wasn't reloading and my `guard` commands weren't working. It was saying that it expects Livereload 2.3 or newer or a server to connect to.

Some updates I made to get it to work were:

1. Install `rvm`, the ruby version manager
2. Made sure I was using Ruby version 1.9.2-p320
3. `$ sudo gem install guard-livereload`
4. `$ sudo gem install yajl-ruby` for making sure socket listening responded faster
5. error when running and recommended to `gem install rb-fsevents`
6. Create new guard file that configured to watch .styl file changes

Ahhh, itworks now. Hello livereload.
