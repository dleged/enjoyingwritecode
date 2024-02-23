// 去重
let arr = [1,1,2,2,3,4];
let arr2 = new Set(arr);

// 集合中有某元素

let hasOne = new Set(arr).has(1);

// 集合交集
let arr3 = [1,2,3];
let sameArr = arr3.filter((item) => arr2.has(item));

console.log(someArr);



