// @flow Created by 陈其丰 on 2018/6/15.

if(!Object.is){
    Object.is = function (v1,v2) {
        if(v1 === 0 && v2 === 0){
            return 1/v1 === 1/v2;
        }else if(v1 !== v1){
            return v2 !== v2;
        }else{
            return v1 === v2;
        }
    }
}