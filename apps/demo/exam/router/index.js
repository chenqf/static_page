// @flow Created by 陈其丰 on 2018/6/7.

import React,{Component} from 'react';
import ReactDOM from 'react-dom';


import {RouterHash,RouterState} from '../前端路由';

const hash = new RouterHash();


hash.registerIndex(function () {
    console.log('index');
});

hash.registerNotFound(function () {
    console.log('404');
});

hash.registerError(function () {
    console.log('error');
});

hash.register('/a',function () {
    console.log('a');
});

hash.register('/b',function () {
    console.log('b');
});

hash.register('/c',function () {
    console.log('c');
});

hash.register('/d',function () {
    console.log('d');
    throw new Error('1111111')
});



const router = new RouterState();


router.register('/login',function (params) {
    console.log('login',params)
});

router.register('/register',function (params) {
    console.log('register',params)
});



ReactDOM.render(
    <div>
        <button onClick={()=>router.assign('/login',{name:'crh'})}>login</button>
        <button onClick={()=>router.assign('/register',{name:'cqf'})}>register</button>
    </div>
    ,
    document.getElementById('root')
);


