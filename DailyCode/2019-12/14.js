//size
function size(val){
  return Array.isArray(val)
        ? val.length
        : typeof val === 'object'
        ? val.size || val.length || Object.keys(val).length
        : typeof val === 'string'
        ? val.length
        : 0;
}


console.log(size([1, 2, 3, 4, 5]),size('size'),size({ one: 1, two: 2, three: 3 }));


//第二个参数是第一个对象的子集
function truthCheckCollection(collection,pre){
  return collection.every((v) => v.hasOwnProperty(pre));
}

console.log(truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex')); // true
