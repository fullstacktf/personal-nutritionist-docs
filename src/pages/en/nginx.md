---
title: How install Nginx and domain config
description: Lorem ipsum dolor sit amet - 2
layout: ../../layouts/MainLayout.astro
---

![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)  

[Nginx Docs](http://nginx.org/en/docs/)
## Steps to follow
### 1. 💣 Make sure you hasn't apache or another service running and delete it
```zsh
 sudo service apache2 stop
 sudo service apache2 status
 sudo apt-get remove apache2
```
### 2. 🏗 Install Nginx and check if the service is running

```zsh
sudo apt-get install nginx
sudo nginx -v
sudo systemctl status nginx
```

if the service was stopped, run it with:
```zsh
  sudo systemctl start nginx
```
### 3. 🛠 Config Nginx
To config nginx you must go to /etc/nginx you can find two modules sites-avalible and sites-enabled.
Go to sites-avalible and copy default configuration file and change the configuration in the new file
```zsh
sudo cp default mydomain.conf
sudo vim mydomain.conf
```

Now, delete all the file except Default server configuration and remove the comments like this:
```
server {
        listen 80 default_server;
        # listen [::]:80 default_server;
        
        root /var/www/html;

        index index.html index.htm;

        server_name nutriguide.es; # if you put server_name _ catch all

        location / {
                try_files $uri $uri/ =404;
        }
}
```

Now you need to symbolic link to sites-enable. you can use ngx script to do it [ngx script](https://github.com/ngx/ngx-conf)
At first, install ngx and put it on /usr/local/bin
```zsh
sudo wget raw.githubusercontent.com/ngx/ngx-conf/master/ngx-conf -O /usr/local/bin/ngx-conf
```

Give permissions to script and check if works

```zsh
sudo chmod 755 /usr/local/bin/ngx-conf
ngx-conf --help
```

⚠Note: if not works maybe you haven't installed python2 on your system, install it and change the first line of the script to python2
or try to add a symbolic link to script
#### 🥇 First method:
```zsh
sudo apt-get install python2
sudo vim /usr/local/bin/ngx-conf
```
#### 🥈 Second method:
Go to script dir on /usr/local/bin and create symbolic link
```zsh
sudo ln -s /usr/bin/python2 python
```

Now run the script to puts our configuration on sites-enable
```zsh
sudo ngx-conf enable nutriguide.es
ls sites-enabled
```
To check if configuration sintax are ok do:
```zsh
sudo nginx -t
```
Then, resart nginx to apply it.
```zsh
sudo service nginx restart
```
