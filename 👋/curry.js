function sum(a, b, c, d, e) {
  return a + b + c + d + e;
};


function curryEs6(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curryEs6.bind(null, fn, ...args);
}


function curry(fn, ...args) {

  let argLength = fn.length;

  return function () {
    const subArg = [...args, ...arguments];

    // 参数 >= fn 的参数个数
    if (subArg.length >= argLength) {
      return fn.apply(this, subArg);
    } else {
      // 不满足继续回调 curry，套娃
      return curry.call(this, fn, ...subArg);
    }

  }



}


console.log(curry(sum, 1)(2)(3)(4)(5));
console.log(curryEs6(sum, 1)(1)(1)(1)(2));