// @flow Created by 陈其丰 on 2018/6/7.



function deepClone(object) {
    let result;
    if(typeof object === 'undefined'){
        result = undefined
    }else if(typeof object === 'object' && object !== null){
        if(Array.isArray(object)){
            result = new Array(object.length);
            object.forEach((i,index)=>{
                result[index] = deepClone(i);
            })
        }else if(Object.prototype.toString.call(object) === '[object Object]'){
            result = {};
            for(let i in object){
                result[i] = deepClone(object[i])
            }
        }else if(Object.prototype.toString.call(object) === '[object Date]'){
            return new Date(object.getTime())
        }else if(Object.prototype.toString.call(object) === '[object RegExp]'){
            return new RegExp(object.source,object.flags)
        }else{
            return Object.create(object)
        }
    }else{
        result = object;
    }
    return result;
}

var json = {
    a:[1,2,3,4,5],
    b:{a:1},
    c:/\s/ig,
    d:new Date()
}