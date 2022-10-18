let arr = [1, 1, 2, 3, 4, 5];

let a1 = arr.filter(function (value, index, arr) {
  return this.a === value;
}, null);

console.log(a1, arr);

Array.prototype._filter = function (callback, thisArg) {

  let arr = this;
  let ret = [];

  const target = thisArg || global;
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(target, arr[i], i, arr)) {
      ret.push(arr[i]);
    }
  }
  return ret;
}

// 注意不能用箭头函数，回丢失 this
let a2 = arr._filter(function(value, index, arr){
  console.log(this);
  return this.a === value;
}, { a: 1 });

console.log(a2, arr);