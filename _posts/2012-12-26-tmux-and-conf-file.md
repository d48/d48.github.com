---
layout: post
title: "tmux and conf file"
description: ""
category: 
tags: [tmux, terminal, osx, config, conf, configuration]
---
{% include JB/setup %}

# Notes

So just taking some notes for myself. I have a new dev machine and when trying to set up my `.tmux.conf` file, there was issues when tmux launched in parsing the file. I read somewhere on the net it had to do with some invisible bytes. 

I ended up fixing the parse by just creating a new .tmux.conf file and copy-pasted from my `.tmux.conf` file from my [dotfiles repo](http://github.com/design48/dotfiles) on GitHub. Woot.
