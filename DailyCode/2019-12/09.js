//执行一个从左到右的异步方法调用

//字节跳动面试，同时接收多个请求，如果一个失败，也要继续返回
//若有失败的请求，我们也可以通过p.then 返回错误信息
let pipeAsyncFunctoins = (...fns) =>
  arg => fns.reduce((p,f) => p.then(f),Promise.resolve(arg));

let sum = pipeAsyncFunctoins(
  x => x + 1,
  x => x * 2,
  x => new Promise((resolve) => resolve(x + 3)),
  async x => (await x) + 4
)

sum(1).then(console.log);
