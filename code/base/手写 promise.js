class Promise {

  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  value = undefined;
  status = Promise.PENDING;

  resolveCallbacks = [];
  rejectCallbacks = [];

  constructor(func) {

    if (typeof func === 'function') {
      try {
        func(this.resolve.bind(this), this.reject.bind(this));
      } catch (err) {
        this.reject(err);
      }
    }

  }

  resolve(value) {
    setTimeout(() => {
      if (this.status === Promise.PENDING) {
        this.status = Promise.FULFILLED;
        this.value = value;
        this.resolveCallbacks.forEach(({ onFULFILLED, resolve }) => {
          try {
            resolve(onFULFILLED(value));
          } catch (err) {
            reject(err);
          }
        });
      }
    })
  }

  reject(value) {
    setTimeout(() => {
      if (this.status === Promise.PENDING) {
        this.status = Promise.REJECTED;
        this.value = value;
        this.rejectCallbacks.forEach(({ onREJECTED, resolve }) => {
          try {
            resolve(onREJECTED(value));
          } catch (err) {
            reject(err);
          }
        });
      }
    })
  }


  then(onFULFILLED, onREJECTED) {

    return new Promise((resolve, reject) => {
      onFULFILLED = typeof onFULFILLED === 'function' ? onFULFILLED : () => { };
      onREJECTED = typeof onREJECTED === 'function' ? onREJECTED : () => { };

      if (this.status === Promise.PENDING) {
        this.resolveCallbacks.push({ onFULFILLED, resolve, reject });
        this.rejectCallbacks.push({ onREJECTED, resolve, reject });
      }

      if (this.status === Promise.FULFILLED) {
        // setTimeout(() => {
        try {
          resolve(Promise.resolve(onFULFILLED(this.value)));
        } catch (err) {
          reject(err);
        }
        // });
      }

      if (this.status === Promise.REJECTED) {
        // setTimeout(() => {
        try {
          resolve(Promise.resolve(onFULFILLED(this.value)));
        } catch (err) {
          reject(err);
        }
        // })
      }

    })
  }

  static resolve(value) {
    return value instanceof Promise ? result : new Promise((resolve) => resolve(value));
  }

}

console.log('第一次');
const p = new Promise((resolve, reject) => {
  console.log('第二次');
  setTimeout(() => {
    resolve('这次一定');
    reject('这次错了')
    console.log('第四次');
  });
})

p.then(
  (result) => { console.log(result); console.log('第五次'); return '这次也一定'; },
  (result) => { console.log(result); return 'error'; },
).then(
  console.info,
  (result) => {
    console.log(result, 'then 2')
  },
);

console.log('第三次');