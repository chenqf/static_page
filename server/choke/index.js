// @flow Created by 陈其丰 on 2018/5/14.
const http = require('http');
const fs = require('fs');

/*one js 文件*/
http.createServer(function (request, response) {
    console.log('start one js ',Date.now())
    response.writeHead(200, {'Content-Type': 'application/javascript'});
    setTimeout(function () {
        response.end('console.log("one js over",Date.now())');
        console.log('end one js ',Date.now())
    },3000)
}).listen(8001);
/*two js 文件*/
http.createServer(function (request, response) {
    console.log('start two js ',Date.now())
    response.writeHead(200, {'Content-Type': 'application/javascript'});
    setTimeout(function () {
        response.end('console.log("two js over",Date.now())');
        console.log('end two js ',Date.now())
    },4000)
}).listen(8002);
/*one css 文件*/
http.createServer(function (request, response) {
    console.log('start css ',Date.now())
    response.writeHead(200, {'Content-Type': 'text/css'});
    setTimeout(function () {
        response.end('body button{background:red;}');
        console.log('end css ',Date.now())
    },2000)
}).listen(8003);
/*img 文件*/
http.createServer(function (request, response) {
    console.log('start img ',Date.now())
    response.setHeader("Content-Type", 'image/png');
    setTimeout(function () {
        let content =  fs.readFileSync('./server/choke/demo.png',"binary");
        response.writeHead(200, "Ok");
        response.write(content,"binary"); //格式必须为 binary，否则会出错
        response.end();
        console.log('end img ',Date.now())
    },4000);

}).listen(8004);