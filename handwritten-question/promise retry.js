// 已知函数 originFunc 执行返回 Promise 对象，返回值可能会 resolve 可能会 reject。
// 封装最大重试函数，支持在传入参数的情况下，遇到 reject 就重试，直到限制次数。
// 返回首次 resolve 的值 或者 最大重试之后的返回值。
function retry(originFunc, times) {

  return new Promise((resolve, reject) => {
    let callTimes = 0;
    function callOriginFunc() {
      originFunc().then((val) => {
        resolve(val);
      }).catch((error) => {
        callTimes++;
        console.log('重试次数',callTimes);
        if (callTimes >= times) {
          resolve(error)
        } else {
          callOriginFunc();
        }
      });
    }

    callOriginFunc();

  });
}

function func(){
  return new Promise((resolve,reject) => {
      if(Math.random() <0.1){
        resolve(true);
      }else{
        reject(false);
      }
  });
}

retry(func,5).then(console.log);