// @flow Created by 陈其丰 on 2018/6/5.


const P = function () {};
let p = new P();
p.name = 'cqf';
console.log(p.name);
P.prototype.name = 'crh';
console.log(p.name);
delete p.name;
console.log(p.name);
delete P.prototype.name;
console.log(p.name);
P.prototype = {constructor:P,name:'czm'};
console.log(p.name);