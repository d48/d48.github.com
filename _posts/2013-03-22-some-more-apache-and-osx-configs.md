---
layout: post
title: "Some more apache and osx configs"
description: ""
category: 
tags: [apache, osx, config, htaccess, conf]
---
{% include JB/setup %}

Hacking away on my local dev for another apache based site that uses an .htaccess file for url routing. Just recording a note I can refer to if I end up copying a repo to work on using a different computer.

This particular site has a .htaccess file that has `Rewrite` rules that need to override default settings. Add this to my `.conf` file

{% highlight js %}
# In /private/etc/apache2/users/ryanregalado.conf
<Directory "/Users/ryanregalado/Dropbox/Dev">
    Options Indexes MultiViews FollowSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
</Directory>
{% endhighlight %}
