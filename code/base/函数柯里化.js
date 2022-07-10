// 函数柯里化（实现 sum(1,2)(3)()）

function sum(...arg) {
  return arg.reduce((pre, cur) => pre + cur);
}

function curry1(curryFn) {

  return function fn(...args) {

    if (arguments.length == 1) {
      return args[0];
    }

    return fn.bind(this, sum.apply(null, args));

  }

}

const sum1 = curry1(sum);

console.log(sum1(1, 2)(3)(4)());

function curry2(curryFn) {

  let argsCount = 0;
  return function fn(...args) {

    if (argsCount === args.length) {
      return curryFn.apply(null, args);
    }
    argsCount = args.length;
    return fn.bind(null, args);

  }

}

const sum2 = curry1(sum);

console.log(sum2(1, 2)(3)(4)());



function sum3(...args1) {
  let x = args.reduce((pre, curr) => curr + pre);
  return function (...args2) {

    if (args2.length === 0) {
      return x;
    }

    let y = args2.reduce((pre, curr) => curr + pre);
    return sum3(x + y);

  }

}


console.log(sum2(1, 2)(3)(4)());

