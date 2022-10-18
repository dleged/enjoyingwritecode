const arr = [1, 2, 3, 4, 5];

const ret1 = arr.reduce((acc, cur, index, arr) => {
  return acc + cur;
});


console.log(ret1);



Array.prototype._reduce = function (callback, initVal) {
  const length = arguments.length;
  let arr = this;
  let acc = length > 1 ? initVal : arr[0];
  let index = length > 1 ? 0 : 1;

  for (let i = index; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;

};
console.log(arr._reduce((acc, cur) => acc + cur, 1));