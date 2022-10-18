function sum(a, b, c, d, e) {
  return a + b + c + d + e;
};


function curryEs6(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curryEs6.bind(null, fn, ...args);
}


function curry(fn, ...args) {

  let fnLength = fn.length;
  let subArgs = [...args];

  if (subArgs.length >= fn.length) {
    return fn(...subArgs);
  }
  return function () {
    subArgs = [...subArgs, ...arguments];
    return curry.bind(null, fn, ...subArgs);
  }

}


console.log(curry(sum, 1)(2)(3)(4)(5));
console.log(curryEs6(sum, 1)(1)(1)(1)(2));