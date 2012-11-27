---
layout: post
title: "Getting command-T to work in Windows vim"
tags: [vim, ruby, command-t, gvim]
---
{% include JB/setup %}

# some notes

Just wanted to record what I did to get command-T working on a windows machine. There were problems with the ruby and gcc compilation of the plugin so I needed to make sure I had the correct versions of each to what the command-T plugin was built.

So some steps:

1. Made sure I installed vim 7.3 with +ruby support
2. Made sure I had a Ruby version of 1.9.1 that was used to compile command-T
3. Had the gcc compiler so I can remake/compile the command-T plugin with ruby
4. Run these commands in the ~.vim/bundle/command-t/ruby/command-t folder
  
`$ ruby extconf.rb`
    
`$ make`

And then I was able to `ctrl+t` while in vim and voila. yay :thumbsup:
