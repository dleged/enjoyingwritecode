class Promise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  status = undefined;
  value = undefined;
  resolveCallbacks = [];
  rejectCallbacks = [];

  constructor(func) {
    this.status = Promise.PENDING;
    try {
      func.apply(this, [this.resolve.bind(this), this.reject.bind(this)]);
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(value) {
    if (this.status === Promise.PENDING) {
      this.status = Promise.FULFILLED;
      this.value = value;
      this.resolveCallbacks.forEach((callback) => {
        callback();
      });
    }
  }

  reject(value) {
    if (this.status === Promise.PENDING) {
      this.status = Promise.REJECTED;
      this.value = value;
      this.rejectCallbacks.forEach((callback) => {
        callback();
      })
    }
  }

  then(onFulfilled, onRejected) {
    let p = new Promise((resolve, reject) => {
      if (this.status === Promise.PENDING) {
        this.resolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (onFulfilled) {

                let x = onFulfilled(this.value);
                resolve(Promise.resolve(x));

              }
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
        this.rejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (onRejected) {
                let x = onRejected(this.value);
                resolve(Promise.resolve(x));
              }
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
      }

      if (this.status === Promise.FULFILLED) {

        if (onFulfilled) {
          setTimeout(() => {
            resolve(Promise.resolve(onFulfilled(this.value)));
          }, 0)
        }
      }

      if (this.status === Promise.REJECTED) {
        if (onRejected) {
          setTimeout(() => {
            resolve(Promise.resolve(onRejected(this.value)));
          }, 0);
        }
      }

    });

    if (!onFulfilled || !onRejected) {
      p.value = this.value;
      p.status = this.status;
    }
    return p;
  }

  static resolve(value) {
    return value instanceof Promise ? value : new Promise((res) => res(value));
  }

  static reject(err) {
    const p = new Promise((resolve, reject) => reject(err));
    return p;
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(promise => {
        if (promise && promise instanceof Promise) {
          promise.then(resolve, reject);
        } else {
          resolve(promise);
        }
      })
    })
  }

  catch(errorCallback) {
    if (this.status === Promise.REJECTED) {
      this.then(null, errorCallback);
    }
  }

  finally(callback) {
    return this.then((value) => {
      return Promise.resolve(callback()).then(() => value);
    }, (reason) => {
      return Promise.resolve(callback()).then(() => { throw reason });
    });
  }

  all(promises) {
    let index = 0;
    let res = [];

    return new Promise((resolve, reject) => {
      function setValues(order, value) {
        res[order] = value;
        if (++index === promises.length) {
          resolve(res);
        }

      }

      for (let i = 0; i < promises.length; i++) {
        if (typeof promises[i] === 'object' && typeof promises[i].then === 'function') {
          promises[i].then((val) => { setValues(i, val) }, reject)
        } else {
          setValues(i, value);
        }
      }

    });
  }


}

// ---- base ----
// console.log('第一次');
// const p = new Promise((resolve, reject) => {
//   console.log('第二次');
//   setTimeout(() => {
//     // resolve('这次一定');
//     reject('这次错了');
//     console.log('第四次');
//   });
// })

// p.then(
//   (result) => { console.log(result); return '这次也一定'; },
//   (result) => { console.log(result); return '这次又错了'; },
// ).then(
//   console.info,
//   (result) => {
//     console.log(result, 'then 2')
//   },
// );

// console.log('第三次');


//--- race ---

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve(1500); }, 1500)
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => { resolve(2000); }, 2000)
// })

// Promise.race([p1, p2]).then((res) => console.log(res));

// Promise.resolve(new Promise((resolve, reject) => {
//   resolve('ok');
// })).then().then(data => {
//   console.log(data, 'success');
//   return Promise.reject(1500);
// }).catch((err) => console.log)
