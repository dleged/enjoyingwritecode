const PENDING = 'PENDING'; // 未完成状态

const RESOLVE = 'RESOLVE'; // 成功状态

const REJECT = 'REJECT'; // 失败状态

const RESOLVE_CALLBACK_NAME = 'RESOLVE_CALLBACK_NAME'; // 成功回调函数名

const REJECT_CALLBACK_NAME = 'REJECT_CALLBACK_NAME'; // 失败回调函数名

/** 状态与对应回调函数名的映射 */
const statusToCallbackName = {
  [RESOLVE]: RESOLVE_CALLBACK_NAME,
  [REJECT]: REJECT_CALLBACK_NAME
};

class MyPromise {
  /** 初始化属性 */
  status = PENDING;
  data = undefined;
  callbackComboList = []; //
  /** 构造方法 */
  constructor(executor) {
    const complete = (status, data) => {
      if (this.status !== PENDING) return;
      this.status = status;
      this.data = data;
      setTimeout(() => {
        this.callbackComboList.forEach(callbackCombo => {
          const callbackName = statusToCallbackName[status];
          callbackCombo[callbackName]();
        });
      }, 0);
    };
    const resolve = value => complete(RESOLVE, value);
    const reject = reason => complete(REJECT, reason);
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  /** then 方法调度 失败和成功 的回调函数 */
  then = (successCallback, failCallback) => {
    successCallback = successCallback || (value => value);
    failCallback =
      failCallback ||
      (err => {
        throw err;
      });

    const connectPromise = (sourceCallback, resolve, reject) => () => {
      try {
        const result = sourceCallback(this.data);
        if (result instanceof MyPromise) {
          result.then(resolve, reject);
          return;
        }
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };
    return new MyPromise((resolve, reject) => {
      const callbackCombo = {
        [RESOLVE_CALLBACK_NAME]: connectPromise(
          successCallback,
          resolve,
          reject
        ),
        [REJECT_CALLBACK_NAME]: connectPromise(failCallback, resolve, reject)
      };
      if (this.status === PENDING) {
        this.callbackComboList.push(callbackCombo);
        return;
      }
      const callbackName = statusToCallbackName[this.status];
      setTimeout(() => {
        callbackCombo[callbackName]();
      }, 0);
    });
  };

  catch = failCallback => this.then(undefined, failCallback);

  /** 类方法 promise 转化 */
  static resolve = value =>
    value instanceof MyPromise
      ? value
      : new MyPromise(resolve => resolve(value));

  static reject = reason => new MyPromise((_, reject) => reject(reason));

  /** 多个 promise 调度 */
  static all = promiseList => {
    const results = [];
    let count = 0;
    return new MyPromise((resolve, reject) => {
      promiseList.forEach((promise, index) => {
        MyPromise.resolve(promise).then(value => {
          results[index] = value;
          count++;
          if (count === promiseList.length) {
            resolve(results);
          }
        }, reject);
      });
    });
  };

  static race = () => {};
}

module.exports = MyPromise;