---
title: Cloud configuration ☁🖥
description: Lorem ipsum dolor sit amet - 2
layout: ../../layouts/MainLayout.astro
---

![DigitalOcean](https://img.shields.io/badge/DigitalOcean-%230167ff.svg?style=for-the-badge&logo=digitalOcean&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)

## Steps to follow 👷‍♂️

## DigitalOcean 🌊
### 1. Add your domain to digitalOcean
![s1](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/f1a0de684830ec40a6bd81798c68372782b771f0/s1.png)
![s2](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s2.png)
### 2. Create a new record
You can create as many records as subdomains you want in your webpage.
![s3](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s3.png)
![s4](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s4.png)

## Cloudflare
### 3. Add a site
Then enter your domain and after that you will have your dashboard metrics.
![s5](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s5.png)
![s6](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s6.png)
### 4. Configurate your site
![s7](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s7.png)
 * In the dashboard you will configurate in the SSL/TLS your encryption mode is flexible.
 ![s8](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s8.png)
 * In the edge certificates you have to mark the option of https 'always use https' in order to force the entry by https to your page.
 ![s9](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s9.png)
 * Also you have in your network to enable  http/3(with QUIC)
 ![s10](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s10.png)

## DonDominio
After you have your domain, you have to go to DNS configuration and modify the DNS with cloudflare DNS.
 ![s11](https://gist.githubusercontent.com/AdanRL/a019c1f37e640617986ca48f999f69bf/raw/b466ebcb1b67908e62babcb03245e056a5eeafc3/s11.png)
