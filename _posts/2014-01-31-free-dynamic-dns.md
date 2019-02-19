---
title: Free Dynamic DNS
---

## The Problem

Having easy access to my machines over the internet is very important to me. I've used several dynamic DNS services in the past, but none of them ever felt right. Many of them cost money for more than one or two addresses and they all give you a weird domain name. I wanted to be able to SSH to mymachine.grin.io. Here's how I did it with Cloudflare and Bash.

## Step 1: Cloudflare

[Cloudflare](https://cloudflare.com) is a fantastic service. They do several things: protect your site from DDOS attacks, auto-CDN your content, provide analytics, and other good stuff. But they can also serve as a free DNS host with a simple interface and an great API. Create an account follow the instructions to move your DNS to their servers. Once you're all set up, make an A record for the subdomain you want to use. I like to use the names of my machines. You could also do *ssh.domain.com*. 

## Step 2: The Last Step

Download [the script](https://gist.github.com/lyoshenka/6257440) and put in your Cloudflare login credentials and subdomain. It will get your current IP and update the Cloudflare DNS record. Set it up to run hourly in cron. Boom, dynamic DNS that's free and easy.

## Too Simple?

Before this setup, I had also made [this PHP version](https://github.com/lyoshenka/cloudflare-ddns) that works pretty much the same way. It's a bit more robust and can create the A record for you (useful if you don't want to log into Cloudflare each time you add a new subdomain). However, I prefer the simplicity and portability of the Bash approach. 
