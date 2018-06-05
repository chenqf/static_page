// @flow Created by 陈其丰 on 2018/6/4.



const list = Array.from({length:10000}).map(i => Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 1000000));


function quickSort(list) {
    // 1. 基线条件：数组为空，或数组只有一个元素
    if(list.length <= 1){
        return list;
    }
    // 2. 获取基准值
    let midIndex = parseInt(list.length / 2),
        midValue = list[midIndex];

    // 3.分解为两个子数组，小于基准值，大于基准值
    let leftList = [],rightList = [];
    list.forEach((i,index)=>{
        if(index !== midIndex){
            i < midValue ? leftList.push(i) : rightList.push(i);
        }
    });
    return [].concat(quickSort(leftList),midValue,quickSort(rightList))
}

console.time('quickSort');
quickSort(list);
console.timeEnd('quickSort');

