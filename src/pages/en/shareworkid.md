---
title: Share workdir 📂👨‍💻👩‍💻👩‍💻
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

## Steps to follow 👷‍♂️

### 1. 📁 Create your workdir
Create a dir, and add a group as an owner.
```zsh
sudo mkdir dir
sudo chown user:group dir
```

### 2. ✍ Add permissions to the group in your workdir
You need to give write permissions to the group with 'g+w' and with 'g+s' all files that are created on the repo will inherit
the permissions. However, if you create a new files or dirs this permission will not inherit. To get them updated, you must config ACL
with setfacl.
```zsh
sudo chmod g+w dir
sudo chmod g+s dir
sudo setfacl --default --modify u::rwx,g::rwx,o::r-x dir
```
