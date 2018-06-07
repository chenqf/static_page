// @flow Created by 陈其丰 on 2018/6/6.


// 匿名函数调用时，this为 window/undefined


window.name = 'The Window';
let obj = {
    name:'The Object',
    getName:function () {
        return function () {
            return this.name;
        }
    }
};
obj.getName()(); // The Window


//----------------------------------------------------------------------------

// 赋值表达式，返回的是值（函数本身）

window.name = 'The Window';
let object = {
    name:'The Object',
    getName:function () {
        return this.name;
    }
};

object.getName(); // The Object
(object.getName)(); // The Object
(object.getName = object.getName)(); // The Window


//----------------------------------------------------------------------------

