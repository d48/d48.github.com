---
layout: post
title: "configuring smtp with att.net"
description: ""
category: 
tags: [mail, smtp, att]
---
{% include JB/setup %}

Just saving some config notes about setting up home emails via Outlook on a pc. How come I feel like I don't need to do this for a mac? Oh wait, that's probably because I don't have to.

## Anyways

In order to use stmp.att.yahoo.com SMTP server, I need to verify the email address I'm sending from via my att.net email account. 

1. Log onto mail.yahoo.com with that att.net account I received from Uverse
2. Go to Mail Options -> Accounts -> Add email. Then save.
3. Click on link to verify that I receive in email.
4. Now I can configure email program to use yahoo's SMTP and set outgoing port to 465 SSL. Woot.
