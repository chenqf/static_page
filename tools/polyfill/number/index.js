// @flow Created by 陈其丰 on 2018/6/15.

if(!Number.EPSILON){
    Number.EPSILON = Math.pow(2,-52);
}

if(!Number.MAX_SAFE_INTEGER){
    Number.MAX_SAFE_INTEGER = Math.pow(2,53) - 1;
}

if(!Number.MIN_SAFE_INTEGER){
    Number.MIN_SAFE_INTEGER = -Math.pow(2,53) + 1;
}

function isNumber(number) {
    return typeof number === 'number';
}

if(!Number.isFinite){
    Number.isFinite = (number)=>{
        return isNumber(number) && isFinite(number);
    }
}

if(!Number.isNaN){
    Number.isNaN = (number)=>{
        return isNumber(number) && isNaN(number);
    }
}

if(!Number.isInteger){
    Number.isInteger = function (number) {
        return isNumber(number) && number % 1 === 0;
    }
}

if(!Number.isSafeInteger){
    Number.isSafeInteger = function (number) {
        return isNumber(number) &&
            Math.abs(number) <= Number.MAX_SAFE_INTEGER &&
            Math.abs(number) >= Number.MIN_SAFE_INTEGER;
    }
}

/*判断负零*/
Number.isNegZero = function (number) {
    return number === 0 && (1/number) === -Infinity;
};