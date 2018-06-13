// @flow Created by 陈其丰 on 2018/6/13.


//用于比较的数组
const list = Array.from({length:10000}).map(i => Math.floor(Math.random() * 10000) + Math.floor(Math.random() * 1000000));



function selectSort(list) {
    for(let i = 0,length = list.length; i < length; i++){
        let minIndex = i,
            temp;
        for(let j = i + 1; j < length; j++){
            if(list[j] < list[minIndex]){
                minIndex = j;
            }
        }
        temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;
    }
}


console.time('select sort');
selectSort(list);
console.timeEnd('select sort');
