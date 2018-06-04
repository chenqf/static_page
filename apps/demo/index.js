
console.log(070 === 56);

// function Test(a,b,c){
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }
//
// Test.prototype.name = 'test bind';
//
// Test.prototype.log = function () {
//     console.log(this.constructor === Test); // true
//     console.log(this.name); // test bind
//     console.log(this.a,this.b,this.c); // 1 2 3
// }
//
// const Demo = Test.bind(null,1,2);
//
// let ins = new Demo(3);
// ins.log();
// console.log(Demo.length); // 1


let n = new Number(100);
console.log(n instanceof Number);    //true

let num = 10;
console.log(num instanceof Number);  //false


function test() {
    eval('var a = 1;');
    console.log(typeof a); // 正常模式： number
}

function test() {
    "use strict";
    eval('var a = 1;');
    console.log(typeof a); // 严格模式： undefined
}

function test() {
    "use strict";
    return (function () {
        return this !== undefined;
    })();
}

(function () {
    return this === undefined; // 严格模式：true  正常模式：false
})();





