<h1 align="left">Welcome to chatgpt-module 👋</h1>
<h4 align="left">Modify on WeChat—ChatCPT</h4>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
 
</p>

> Use ChatGPT On API Module 
> Modify on WeChat—ChatCPT  
English | [中文文档](README_ZH.md)


## Install

```sh
npm install
```
> NodeJS Version >= 18.0.0

## Config

### Copy config

You need copy config file for setting up your project.

```sh
cp config.yaml.example config.yaml
```

### Get and config Openai account

> If you don't have this OpenAI account and you live in China, you can get it [here](https://mirror.xyz/boxchen.eth/9O9CSqyKDj4BKUIil7NC1Sa1LJM-3hsPqaeW_QjfFBc).

#### Use account and password

You need get OpenAI account and password.
Your config.yaml should be like this:

```yaml
chatGPTAccountPool:
  - email: <your email>
    password: <your password>
# if you hope only some keywords can trigger chatgpt on private chat, you can set it like this:
chatPrivateTiggerKeyword: ""
```

⚠️ Trigger keywords must appear in the first position of the received message.
⚠️ Pls make sure your network can log in to OpenAI, and if you fail to login in try setting up a proxy or using SessionToken.

**Setup proxy:**

You can configure in `config.yaml`:

```yaml
openAIProxy: <Your Proxy>
```

## Start Project

```sh
npm run dev
```

## Mode of use

```sh
curl -X POST -d "message:xxx,talker:xxxx,room:xxxx" ip:7001/send
```



