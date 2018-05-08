// @flow Created by 陈其丰 on 2018/5/7.

const md5 = require('md5');
const fs = require('fs');
const request = require('request');
const mineType = require('mime-types');
const list = require('./list.json');
const path = require('path');

exports.translate = function (q) {
    if(!q){
        return Promise.reject('q is empty');
    }
    let appKey = '51a433fdcbf4ab82';
    let salt = Math.random();
    let sign = md5(`${appKey}${q}${salt}GO8nt8g99GFycXOgmJA0dC7oeP5zW8Og`).toUpperCase();
    let url = `http://openapi.youdao.com/api?q=${q}&from=EN&to=zh-CHS&appKey=${appKey}&salt=${salt}&sign=${sign}`;
    const uriOpt = {
        headers: {'Accept': '*/*'},
        url,
        timeout: 5000,
        method: 'GET',
        json:true
    };
    let mp3Path = path.resolve(__dirname, `./${q}.mp3`);
    let p1 = new Promise(function (resolve,reject) {
        request(uriOpt, function(error, response, responseData){
            try{
                let basic = responseData.basic;
                let query = responseData.query;
                let phonetic = basic['us-phonetic'];
                let explains = basic.explains;
                let item = {
                    query,
                    phonetic,
                    explains
                };
                if(query && phonetic && explains){
                    resolve(item);
                }else{
                    console.log('search error');
                    reject('search error')
                }
            }catch (e){
                console.log(e);
                reject('search error')
            }

        });
    });
    let p2 = new Promise(function (resolve,reject) {
        request(`https://dict.youdao.com/dictvoice?audio=${q}&type=2`)
        .pipe(fs.createWriteStream(mp3Path))
        .on("error",function(err){
            reject(err);
        })
        .on("close",() => {
            let data = fs.readFileSync(mp3Path);
            data = new Buffer(data).toString('base64');
            let base64 = 'data:' + mineType.lookup(mp3Path) + ';base64,' + data;
            fs.unlinkSync(mp3Path);
            resolve(base64)
        });
    });
    return Promise.all([p1,p2]).then(function ([d1,d2]) {
        if(!list.filter((i)=>i.query === d1.query)[0]){
            d1.mp3 = d2;
            list.push(d1);
            let str = JSON.stringify(list);
            fs.writeFileSync(`${__dirname}/list.json`, str);
        }
        return 'success'
    },function (err) {
        return 'error';
    })
};


