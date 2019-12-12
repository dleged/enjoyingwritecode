/*
  .map() 得到存放[下标，值]的二维数组；
  .filter() 过滤出符合fn要求的项；
  .pop() 取出最后一个，它的[0]便是最后一个符合要求的下标，不存在返回-1；
*/
function findLastIndex(arr,fn){
  return (arr.map((val,index) => [index,val])
            .filter(([index,val]) => fn(val))
            .pop() || [-1])[0]
}
console.log(findLastIndex([1,2,3,4,5],n => n % 2 === 1));
console.log(findLastIndex([1,2,3,4,5],n => n === 6));


//.reduceRight 从右遍历
//.some 判断结果中不存在，加入结果中
function uniqueElementsByRight(arr,fn){
  return arr.reduceRight((acc,a) => {
    if(!acc.some((b) => fn(a,b))) acc.push(a);
    return acc;
  },[])
}

console.log(uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
))
