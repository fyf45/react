# react-app #
基于react 16.x系列 + Antd-mobile 的web app

## 主要库 ##
- [x] antd-mobile（UI库）
- [x] react
- [x] redux（全局状态管理）
- [x] react-router4（路由）
- [x] axios（数据请求）


## 目录结构介绍 ##

	|-- config                           // webpack配置文件
	|-- public                           // 包含了静态资源如HTML页面或图片
	|-- src                              // 源码目录
	|   |-- actions                      // action creator
	|   |-- assets                       // 静态文件（图片，样式，字体）
	|   |-- components                   // 公共组件
	|   |-- constants                    // constant
	|	|-- pages                 	     // 主要路由页面
	|   |-- reducers                     // reducer
	|   |-- router                       // 页面路由配置
	|   |-- App.css                      // 全局样式文件
	|   |-- App.js                       // 页面入口文件
	|   |-- index.js                     // 程序入口文件，加载各种公共组件
	|   |-- Config.js                    // 全局配置文件
	|   |-- pages.json                   // 页面路由配置文件
	|-- .gitignore                       // 忽略的文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone git@github.com:DDDenial/react-app.git      // 把模板下载到本地
	cd react-app     // 进入模板目录
	yarn         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:3000
	yarn start

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	yarn run build

## 组件使用说明 ##

### Antd-mobile ###
一个基于 Preact / React / React Native 的 UI 组件库。访问地址：[antd-mobile](https://mobile.ant.design/index-cn)

### Redux ###

JavaScript 状态容器。访问地址：[redux](http://www.redux.org.cn/)

### Fetch ###
Fetch API提供了一个获取资源的接口，使用过XMLHttpRequest的人会很熟悉它，但是Fetch API提供了一个更强大和更灵活的功能集。访问地址：[Fetch](https://www.w3cschool.cn/fetch_api/)



## 其他 ##

