// // 状态只能在 pending -> fulfilled | rejected
// // resolve | reject 回调函数必须在本轮事件循环末尾执行

const PENDING = 'pending';
const RESOLVED = 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(fn) {

  this.state = PENDING;
  this.value = undefined;

  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  //在一次事件轮询最后执行
  this.resolve = (value) => {

    if (value instanceof MyPromise) {
      return value.then(this.resolve, this.reject);
    }

    queueMicrotask(() => {
      if (this.state === PENDING) {
        this.value = value;
        this.state = RESOLVED;
        this.resolvedCallbacks.forEach((callback) => {
          callback(this.value);
        })
      }
    });

  }

  //在一次事件轮询最后执行
  this.reject = (reason) => {
    queueMicrotask(() => {
      if (this.state === PENDING) {
        this.value = reason;
        this.state = REJECTED;

        this.rejectedCallbacks((callback) => {
          callback(this.value);
        });
      }
    })
  }

  try {
    fn(this.resolve, this.reject);
  } catch (error) {
    this.state = REJECTED;
    this.value = error;
  }

}

// 承前：当前一个 promise 完成后，调用 resolve 变更状态
// 启后：如果上一个 promise 返回的值 result 是 promise 值，就调用 result.then，是个简单值，就直接 resolve
MyPromise.prototype.then = function (onResolved, onRejected) {

  const self = this;

  return new MyPromise((resolve, reject) => {

    // 封装前一个promise成功时执行的函数
    function resolved() {
      const result = onResolved(self.value);// 承前
      // 收集回调
      return typeof result === MyPromise ? result.then(resolve, reject) : resolve(result);// 启后
    }

    // 封装前一个promise失败时执行的函数
    function rejected() {
      const result = onRejected(self.value);
      return typeof result === MyPromise ? result.then(resolve, reject) : reject(result);
    }

    // 根据上一个 promise 的状态决定
    switch (self.state) {
      case PENDING:
        this.resolvedCallbacks.push(resolved);
        this.rejectedCallbacks.push(rejected);
        break;
      case RESOLVED:
        resolve();
        break;
      case REJECTED:
        rejected();
        break;
    }
  })

}
// 注意：
// ● 连续多个 then 里的回调方法是同步注册的，但注册到了不同的 callbacks 数组中，因为每次 then 都返回新的 promise 实例（参考上面的例子和图）
// ● 注册完成后开始执行构造函数中的异步事件，异步完成之后依次调用 callbacks 数组中提前注册的回调


// 一个异常全部 reject，按照结果返回数组
MyPromise.all = function (promises) {

  return new Promise((resolve, reject) => {
    let count = 0;
    let length = promises.length;
    let result = [];
    for (let i = 0; i < length; i++) {

      let res = promises[i];
      if (typeof promises[i] !== MyPromise) {
        res = new MyPromise((resolve) => resolve(res));
      }

      res.then((value) => {
        result[i] = value;
        if (++count === length) {
          resolve(result);
        }
      }, (reason) => {
        reject(reason)
      });
    }

  });

}

MyPromise.race = function (promises) {

  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((res) => {
        resolve(promises[i])
      })
    }
  });

}

console.log('原生 Promise 执行开始 🚀')
const promise = new Promise((resolve) => resolve(1)).then(console.log).then(() => 2).then(console.log);
Promise.resolve('原生 Promise 执行结果').then(console.log);

const myPromise = new MyPromise((resolve) => resolve(11)).then(console.log).then(() => 22).then(console.log);

// Promise.resolve('手写 MyPromise 执行结果').then(console.log);



// test
let p1 = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new MyPromise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
MyPromise.all([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})