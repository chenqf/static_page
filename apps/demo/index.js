import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:[50,20,30,40,90,80,12,15,29],
            bgColor:'grey',
            currentColor:'red',
            height:40,
            margin:5,
        };
    }
    render(){
        return (
            <div>
                {
                    this.state.list.map((i)=>{
                        return (
                                <div style={{margin:this.state.margin,height:this.state.height,background:this.state.bgColor}}>
                                    <div style={{height:'100%',width:`${i}%`,background:this.state.currentColor}}/>
                                </div>
                            )
                    })
                }
            </div>
        )
    }
}



ReactDOM.render(
    <Test/>
    ,
    document.getElementById('root')
);



demo();// TypeError 找到变量，但不是函数
test();// ReferenceError 左侧查询没有找到
var demo = function test() {

};

const Module = (function () {
    let modules = {};
    return {
        define:function (name,deps = [],callback) {
            let depModules = deps.reduce((result,name)=>{
                return result.concat(modules[name])
            },[]);
            modules[name] = callback.apply(null,depModules)
        }
    }
})();

Module.define('a',[],function(){return 'nihao'});

Module.define('b',[],function(){return 'shijie'});

Module.define('c',[],function(){return '!'});

Module.define('current',['a','b','c'],function (a,b,c) {
    console.log(a,b,c)  // nihao shijie !
});

{
    let a = 2;
    console.log(a);
}

try{
    throw 2;
}catch(a){
    console.log(a);
}




window.name = 'window name';
const obj = {
    name:'obj name',
    fn:function () {
        console.log(this.name);
    }
};
let fn1 = obj.fn;
let fn2 = obj.fn.bind(obj);
fn1(); // window name 作为函数调用，this指向 window
fn2(); // window obj 通过bind绑定，作为函数调用，依然使用绑定的this


function demo() {
    console.log('demo',this)
    test();
}
function test() {
    console.log('test',this)
}


const obj = (function () {
    return {
        name:'crh',
        fn1:function (){
            console.log(this.name)
        },
        fn2:()=>{
            console.log(this.name) // cqf 箭头函数的this 取决于创建函数时的this
        }
    }
}).call({name:'cqf'});

window.name = 'cqf';
function fn() {
    console.log(this.name); // cqf
}
(function () {
    "use strict";
    fn(); // cqf 虽然此函数为严格模式，但fn函数为非严格模式
})();


function fn() {
    console.log(this.name);
}
let obj2 = {
    name:'cqf',
    fn:fn
};
let obj1 = {
    name:'crh',
    obj2:obj2
};
obj1.obj2.fn(); // cqf 函数引用调用，取决于最后一层引用

window.name = 'window cqf';
function demo() {
    return {
        name:'crh',
        fn:()=>{
            console.log(this.name);
        }
    }
}
let obj = {
    name:'obj cqf',
    demo:demo
};
let fn = obj.demo().fn;
obj.demo().fn(); // obj cqf
demo().fn();    // window cqf
fn();           // obj cqf





