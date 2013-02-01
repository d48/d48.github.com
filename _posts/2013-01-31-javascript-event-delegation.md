---
layout: post
title: "JavaScript event delegation"
description: ""
category: 
tags: [js, javascript, event, handling, delegation]
---
{% include JB/setup %}

## On event delegation

Given this function:

{% highlight js %}
document.onclick = function(event){
    //IE doesn't pass in the event object
    event = event || window.event;
    
    //IE uses srcElement as the target
    var target = event.target || event.srcElement;    

    switch(target.id){
        case "help-btn":
            openHelp();
            break;
        case "save-btn":
            saveDocument();
            break;
        case "undo-btn":
            undoChanges();
            break;
        //others?
    }
};
{% endhighlight %}

All click events are handled by a single function which then __delegates__ to the appropriate function depending on the target of the event.

## Benefits

1. Fewer functions to manage
2. Takes up less memory
3. Fewer ties between your code and the DOM
4. Don't need to worry about removing event handlers when changing the DOM via `innerHTML`
