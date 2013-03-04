---
layout: post
title: "Nodejs, Heroku, Procfiles"
tags: [nodejs, heroku, procfile, process model]
---
{% include JB/setup %}

## Heroku[^1]

an execution environment, Heroku provides access to through an abstraction called "the process model"

The process model is a generalized approach to managing processes across a distributed environment. Can specify a custom list of process types in a _Procfile_ and provides granular management of an app's components.
  
## Twelve-Factor app methodology[^2]

Building, deploying and managing modern software-as-a-service applications that:

1. Use declarative formats for setup automation
2. Have a clean contract with the underlying operating system
3. Are suitable for deployment on modern cloud platforms
4. Enabling continous deployment for maximum agility
5. And can scale up without significant changes to tooling, architecture, or development practices.
  
## Nodejs and Observer pattern[^4]

Nodejs follows the observer pattern = software design pattern in which an object, called a subject, maintains a list of its dependents, called observers, and notifies them of any state changes, usually by calling one of their methods. It is mainly used to implement distributed event handling systems. This pattern is also key in the MVC architecture.[^5]

_Event_ = an action usually initiated outside the scope of a program and that is handled by a piece of code inside the program. Example: Mouse and click of a button, a "mouse click" event. Keyboard and "key down" event. 

Sample event handling systems:

1. network monitoring 
2. mobile system 
3. information dissemination (broadcast: television, chat, radio) 
  
[^1]: [http://blog.heroku.com/archives/2011/6/20/the_new_heroku_1_process_model_procfile/](http://blog.heroku.com/archives/2011/6/20/the_new_heroku_1_process_model_procfile)
[^2]: [http://devcenter.heroku.com/articles/cedar](http://devcenter.heroku.com/articles/cedar)
[^3]: [http://www.12factor.net/](http://devcenter.heroku.com/articles/cedar)
[^4]: [http://www.jamesward.com/2011/06/21/getting-started-with-node-js-on-the-cloud/](http://devcenter.heroku.com/articles/cedar)
[^5]: [http://en.wikipedia.org/wiki/Observer_pattern](http://devcenter.heroku.com/articles/cedar)
