// 函数柯里化（实现 sum(1,2)(3)()）

function sum(...arg) {
  return arg.reduce((pre, cur) => pre + cur);
}


// 利用 bind 绑定闭包内的函数，当执行不传参的时候返回结果
function curry1(curryFn) {

  return function fn(...args) {

    // ()
    if (args.length === 1) {
      return args[0];
    }
    // (传入参数) 计算传入参数的和，并且绑定作为 fn 的第一个参数
    return fn.bind(this, sum.apply(this, args));

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

