<h1 align="left">欢迎使用 chatgpt-module 👋</h1>
<h3 align="left">基于WeChat-ChatGPT修改</h3>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

>  ChatGPT网页版API接口，可对接QQ机器、钉钉机器人等
>  基于WeChat-ChatGPT修改而来  
> [English](README.md) | 中文文档

## 🌟 功能点

- [x] chatGPT网页版API接口
- [x] 创建 OpenAI 的账户池
- [x] 支持通过代理登陆 OpenAI
- [x] 加入了持续对话的功能
- [x] 实现 OpenAI 账户池的热加载
- [X] 当 OpenAI 返回码为 429/503 时自动重试


## 安装

```sh
npm install
```
> 请确认安装的NodeJS版本为18.0.0以上

## 配置

### 复制配置文件

将配置文件复制一份以配置您的项目

```sh
cp config.yaml.example config.yaml
```

### 获取 OpenAI 的账户并配置到项目中

> 如果你没有 OpenAI 的账号，并且您在无法访问 OpenAI 的国家或地区，你可以查看[here](https://mirror.xyz/boxchen.eth/9O9CSqyKDj4BKUIil7NC1Sa1LJM-3hsPqaeW_QjfFBc).

#### 配置方法 A：使用账号密码

可以在配置文件中输入你的账号密码，格式如下

```yaml
chatGPTAccountPool:
  - email: <your email>
    password: <your password>
# 如果你希望只有一些关键字可以在私人聊天中触发chatgpt，你可以这样设置:
chatPrivateTiggerKeyword: ""
```

⚠️ 触发关键字必须出现在接收到的消息的第一个位置⚠️

请确保您的终端网络可以登陆 OpenAI。如果登陆失败，请尝试使用代理或使用 SessionToken 方法配置

**设置代理:**
编辑配置文件 `config.yaml`
```yaml
openAIProxy: <代理地址>
```

### 启动项目

```sh
npm run dev
```

### 使用方法

```sh
curl -X POST -d "message:xxx,talker:xxxx,room:xxxx" ip:7001/send
```


