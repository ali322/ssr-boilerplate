# SSR Boilerplate

ssr(server side render) project boilerplate [中文文档](./README_zh.md)

Develop
===
1. clone to your local disk `git clone https://github.com/ali322/isomorphic-boilerplate`
2. run `npm install`
3. run `npm install nva -g`
5. run `nva dev` to start develop server
6. run `npm run lint` to lint source code
7. run `npm test` to run tests

Deploy
===
1. run `nva build` release static source and inject to html
2. upload your project to deploy environment
1. run `npm install --production`
2. run `npm install pm2 -g` (more instructions in [pm2 documention](https://github.com/Unitech/PM2))
3. run `pm2 start app.js --name <Project Name>` to deploy

Directory structure
===

```sh
test/
    |-- client/ #client unit tests
    |-- server/ #server unit tests
client/
    |-- asset/      #images,fonts and so on
    |-- bundle/
        |-- common/ #public css and js
        |-- component/ #component's css
        |-- error/  #error page's entry js and css
        |-- index/  #index page's entry js and css
        |-- .../    #more your own page's entry js and css,like index page
    |-- dist/     #compiled client assets
server/
    |-- controller/ #express routes directory
    |-- lib/        #server libraries,util and helper modules inside
    |-- router.js   #server router,all the routes is defined here
    |-- bootstrap.js #initialize application,load middlewares and setup
    |-- view/
        |-- layout.html #global layout template
        |-- index.html  #index page's template
        |-- *.html      #more your own page's template
app.js      #web application enrty file
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)