---
layout: post
title: "guard-livereload notes"
tags: [guard, livereload, watch, auto-load, auto-refresh]
---
{% include JB/setup %}

# livereload

Was having issues running guard-livereload on updated macbook air machine. 

__Solution:__ reinstall `rvm` and `brew update`, stashing `/usr/local` updates and `brew install` any missing dependencies/packages that `brew doctor` mentioned

Running `sudo gem install guard-livereload` as well as `sudo gem install rb-fsevents` after from recommendation in running `guard` fixed everything. Woot
