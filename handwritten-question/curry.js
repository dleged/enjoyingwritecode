
function curry(fn) {
  const argsLen = fn.length;

  function curried(...args) {

    if (args.length >= argsLen) {
      return fn.apply(null, args);
    } else {
      return curried.bind(null, ...args);
    }
  }

  return curried;
}

// 测试
function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3)) 