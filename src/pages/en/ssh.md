---
title: Connection with ssh key DigitalOcean (Server)
description: Docs intro
layout: ../../layouts/MainLayout.astro
---


![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)
## Steps to follow 👷‍♂️

### 1. 🔑 Generate the ssh key in *~/.ssh* with:

```zsh
ssh-keygen
```

### 2. 🖥 Add the ssh *.pub* key in the server (DigitalOcean)

If you have other keys generated you have to enter with:

```zsh
ssh -i ~/.ssh/name.pub user@ip
```

Or make the *config* file:

```
Host host_name
HostName ip
user user_name
IdentityFile ~/.ssh/name
```

### 3. 👷‍ Add a new user:

```zsh
adduser newuser
usermod -aG sudo newuser
```

### 4. 🔌 Connect the ssh key with the new user:

```zsh
su newuser
vim ~/.ssh/authorized_keys
```

And copy-paste the ssh key inside the file.
