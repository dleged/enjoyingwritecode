/*
  实现函数compose，compose接受多个函数作为参数，并返回一个新的函数，
  新的函数会从右向左依次执行原函数， 并且上一次结果的返回值将会作为下一个函数的参数。

  因此compose函数有一个限制，就是被compose的函数是单元的，
  即只有一个参数，如果不这样的话，就只能返回数组了。
  因为在JS中参数其实就是一个类数组。
 */

function compose(...fns) {
  return (...args) => fns.reduceRight((args,fn) => fn(args),args);
}

a = (msg) => msg + ' a';
b = (msg) => msg + ' b';
c = (msg) => msg + ' c';

let fns = compose(a,b,c);
console.log(fns('hello word'));
