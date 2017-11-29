# SSR Boilerplate

服务端渲染项目模板 [English Document](./README.md)

开发
===
1. 克隆至本地 `git clone https://github.com/ali322/isomorphic-boilerplate`
2. 运行 `npm install`
3. 运行 `npm install nva -g`
4. 运行 `nva vendor` 打包第三方库
5. 运行 `nva dev` 启动开发服务器
6. 运行 `npm run lint` 检查代码
7. 运行 `npm test` 执行测试用例

部署
===
1. 运行 `nva build` 编译前端源码并注入至html模板
2. 上传项目源码至发布环境
1. 运行 `npm install --production`
2. 运行 `npm install pm2 -g` (更多文档请见[pm2 文档](https://github.com/Unitech/PM2))
3. 运行 `pm2 start app.js --name <Project Name>` 部署至发布环境

目录结构
===

```sh
test/
    |-- client/ #前端单元测试
    |-- server/ #后端单元测试
client/
    |-- asset/      #图片,字体等等资源
    |-- bundle/
        |-- common/     #公共的css和js
        |-- component/  #组件的css
        |-- index/      #index 页面入口js和css
        |-- error/      #错误页面入口js和css
        |-- .../        #更多的页面入口js和css,类似index
    |-- dist/     #编译后的静态资源
server/
    |-- controller/ #express 路由目录
    |-- lib/        #后端库(工具库等等)
    |-- router.js   #后端路由定义文件
    |-- bootstrap.js #初始化后端应用,加载中间件和设置应用
view/
    |-- layout.html #全部布局文件
    |-- index.html  #index页面模板
    |-- *.html      #更多的页面模板
app.js      #应用入口文件
```

## 许可证

[MIT License](http://en.wikipedia.org/wiki/MIT_License)