// 字节面试题，实现一个异步加法 
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 50);
}

  // 解决方案 
  // 1. promisify 
  const promisifyAdd = (a, b) => new Promise((resolve, reject) => {
    asyncAdd(a, b, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  })
  // 2. chain 调用
  const serialSum = (...args) => args.reduce((task, cur) => task.then((res) => promisifyAdd(res, cur)), Promise.resolve(0));

  // 3. 并行处理 
  async function parallelSum(...args) {

    if (args.length === 1) return args[0];

    let promiseAll = [];
    for (let i = 0; i < args.length; i += 2) {
      promiseAll.push(promisifyAdd(args[i], args[i + 1] || 0));
    }

    const ret = await Promise.all(promiseAll);
    return ret.reduce((res, cur) => res + cur, 0)
  }

  // 测试 
  (async () => {
    console.log('Running...');
    const res1 = await serialSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res1)
    const res2 = await parallelSum(1, 2, 3, 4, 5, 8, 9, 10, 11, 12)
    console.log(res2)
    console.log('Done');
  })()