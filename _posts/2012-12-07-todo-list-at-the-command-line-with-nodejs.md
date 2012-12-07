---
layout: post
title: "todo list at the command line with node.js"
description: ""
category: 
tags: [todo, command line, cli, node.js, terminal, bash, script]
---
{% include JB/setup %}

# Some progress

I've been making more progress on modifying the todo list app made from this githubber: <https://github.com/vesln/todo>

Initially they set it up to only be one list. I'm changing it so it can have multiple lists that you can add to, check off, rename, and delete easily.

![todo list cli tool](http://content.screencast.com/users/User48/folders/Jing/media/a8663943-fb10-4e79-9a3c-f438f759e9ed/00000085.png)

Next on my list is to sort out how I want my api to be to this command line tool. I'm having fun sorting out and working with modules and just some nice practices on organizing the code.

|Command                      |Description                                                            |
|:--                          |:--                                                                    |
|`$ todo select <listnumber>` |Makes specific list active so more actions can be taken                |
|`$ todo rename "<new name>"` |Rename currently selected list                                         |
|`$ todo add "<my todo item>"`|Adds todo to currently selected list                                   |
|`$ todo clear`               |Clears out currently selected list.                                    |
|`$ todo copy`                |Copies current list in a pretty format to the buffer that can be pasted|

Lastly, there's a pull request opened to enable multiple lists that moves the data directory to `$HOME` and also maps an options/command list that reuses the original functions. I like that and will implement that as well.


