---
layout: post
title: "Passwordless Authentication"
description: ""
category: 
tags: [authentication,authenticate,webapps,authorize,login,password]
---
{% include JB/setup %}

## Here's how it works [^1]

1. Instead of asking users for a password when they try to log in to your app or website, just ask them for their username (or email or mobile phone number).
2. Create a temporary authorization code on the backend server and store it in your database.
3. Send the user an email or SMS with a link that contains the code.
4. The user clicks the link which opens your app or website and sends the authorization code to your server.
5. On your backend server, verify that the code is valid and exchange it for a long-lived token, which is stored in your database and sent back to be stored on the client device as well.
6. The user is now logged in, and doesn’t have to repeat this process again until their token expires or they want to authenticate on a new device.

[^1]: [article on medium](https://medium.com/p/9ed56d483eb) regarding going passwordless for web apps
