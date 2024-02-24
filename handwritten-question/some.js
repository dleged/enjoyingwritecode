const arr = [1, 2, 3, 4, 5];

const ret1 = arr.some((cur, index, arr) => {
  console.log(cur);
  return cur > 2;
});


console.log(ret1);

Array.prototype._some = function (callback, thisArg) {

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} must be a function`);
  }

  let flag = false;
  let arr = this;
  const target = thisArg || window;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (callback.call(target, arr[i], i, arr)) {
      return true;
    }
  }

  return flag;

}


const ret2 = arr._some(function (cur, index, arr) {
  console.log(cur);
  return cur > this.a;
}, { a: 3 });


console.log(ret2);