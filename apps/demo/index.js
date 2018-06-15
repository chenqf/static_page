import React, {Component} from 'react';
import ReactDOM from 'react-dom';


(async () => {

    const sleep = delay => {
        return new Promise((resolve, reject) => {
            setTimeout(_ => resolve(), delay)
        })
    }

    const task = (i) => {
        if(i === 3){
            console.log('==============')
        }
        return new Promise(async (resolve, reject) => {
            await sleep(500)
            console.log(`now is ${i}`)
            ++i
            resolve(i)
        })
    }

    +[0, 1, 2, 3].forEach(async num => await task(num))
    // for (let i = 0; i < 4; i++) {
    //     await task(i)
    // }
})()


function P() { }
P.prototype.demo = 1;
function C() {
    P.apply(this,arguments);//用作调用父类构造方法
}

Object.setPrototypeOf(C.prototype,P.prototype);

var c = new C();
c.test = 2;

function isRealtedTo(b,a) {
    function F() {

    }
    F.prototype = a;
    return b instanceof F
}
var a = {};
var b = Object.create(a);

isRealtedTo(b,a)


Object.create = function (proto,obj = {}) {
    function F() {}
    F.prototype = proto;
    let ins = new F();
    Object.defineProperties(ins,obj);
    return ins;
};

class PP{
    constructor(){
        console.log('super constructor');
    }
    test(){
        console.log('super test')
    }
}

class P{
    poo(){
        console.log('P.foo');
    }
    coo(){
        console.log('P.coo')
    }
}

class C extends P{
    poo(){
        console.log('C.foo');
    }
    coo(){
        console.log('C.coo')
    }
}
class S extends C{
    soo(){
        super.coo();
        super.poo();
    }

}

[].join()

let str = '123456';
str[0] = 0;
console.log(str); // 123456

1.toFixed(2);// Error 会将 1. 当做数字
1 .toFixed(2);
1..toFixed(2);
1.1.toFixed(2);

function test() {
    "use strict";
    console.log(0o363)
}






