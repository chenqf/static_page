// @flow Created by 陈其丰 on 2018/5/7.

const md5 = require('md5');
const fs = require('fs');
const request = require('request');
const list = require('./list.json');

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
    return new Promise(function (resolve,reject) {
        request(uriOpt, function(error, response, responseData){
            try{
                let basic = responseData.basic;
                let query = responseData.query;
                let phonetic = basic['us-phonetic'];
                let explains = basic.explains;
                if(query && phonetic && explains){
                    if(!list.filter((i)=>i.query === query)[0]){
                        list.push({
                            query,
                            phonetic,
                            explains
                        });
                        let str = JSON.stringify(list);
                        fs.writeFileSync(`${__dirname}/list.json`, str);
                    }
                    resolve('search success')
                }else{
                    reject('search error')
                }
            }catch (e){
                reject('search error')
            }

        });
    })
};


