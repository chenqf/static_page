// @flow Created by 陈其丰 on 2018/6/5.



// 创建对象时，将类对应的原型与对象进行绑定
// 创建对象后，若变更类对应的原型，已创建的对象不会变更绑定的原型对象
// 对象获取属性时，先找自身的，再找原型链上的

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


