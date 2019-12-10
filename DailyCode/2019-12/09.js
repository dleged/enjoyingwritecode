//执行一个从左到右的异步方法调用

let pipeAsyncFunctoins = (...fns) =>
  arg => fns.reduce((p,f) => p.then(f),Promise.resolve(arg));
  
let sum = pipeAsyncFunctoins(
  x => x + 1,
  x => x * 2,
  x => new Promise((resolve) => resolve(x + 3)),
  async x => (await x) + 4
)

sum(1).then(console.log);
