// @flow Created by 陈其丰 on 2018/5/7.
const http = require('http');
const path = require('path');
const request = require('request');
const {translate} = require('./tools/translate/index');
const URL = require('url');

http.createServer(function (request, response) {
    let {q} = URL.parse(request.url, true).query;
    translate(q).then(()=>{
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end('{"success":true}');
    },()=>{
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end('{"success":false}');
    })

}).listen(8888);



http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"success":true}');
}).listen(8001);

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"success":true}');

}).listen(8002);
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"success":true}');
}).listen(8003);
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('{"success":true}');

}).listen(8004);