//async/await 代替 Promise;
// async function 用来定义一个返回 AsyncFunction 对象的异步函数。
// 异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。
// 如果你在代码中使用了异步函数，就会发现它的语法和结构会更像是标准的同步函数。

//优点：
// async/await 是写异步代码的新方式，以前的方法有回调函数和Promise。
// async/await 是基于 Promise 实现的，它不能用于普通的回调函数。
// async/await 与 Promise 一样，是非阻塞的。
// async/await 使得异步代码看起来像同步代码，这正是它的魔力所在。
let count = 0;

let promise = function(){
  return new Promise((resolve,reject) => { resolve(count++); });
}

async function runAsync(){
  await console.log(await promise());
  console.log('执行1次await');
  await console.log(await promise());
  console.log('执行2次await');
  await console.log(await promise());
  console.log('执行3次await');
  await console.log(await promise());
  console.log('执行4次await');
}

console.log('start runtime');

promise().then(console.log);
runAsync();


console.log('end runtime');
