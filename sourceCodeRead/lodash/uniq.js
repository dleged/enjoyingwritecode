const {uniq} = require('loadsh');

 /**
  *  lodash中数组去重uniq实现
  *  1.数组长度小于200，用双重for循环去重，会判断NaN的重复（v !== v）;
  *  2.数组长度大于等于200，用Set去重，会判断NaN的重复（v !== v）;
  *  3.如果不支持Set,会用Map去兼容;
  * */

let repeatArr = [1,2,3,new String('1'),new String('1'),1,2,3,NaN,NaN,undefined,undefined,{},{}];
let arr2 = Array.from(new Array(200), (x, index)=>{
    return index + index;
});
console.log(uniq([2, 1, 2]));
console.log(uniq(repeatArr));
console.log(uniq(arr2));


