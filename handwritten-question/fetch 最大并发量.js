//  给定一个url数组，实现一个函数，要求在最大并发数K下完成fetch操作，所有请求完成后调用回调函数cb
// 注意1：fetch返回一个promise，fetch("data.json").then().catch()
// 注意2：无需处理请求结果及异常的情况

function fetchAsync(urls, k, cb) {

  let index = -1;
  let length = urls.length;
  let ret = [];

  function dispatchTask() {

    index++;

    if (index >= urls.length - 1) {// key
      return;
    }

    fetchUrls(index);
  }

  function fetchUrls(i) {

    fetch(urls[i]).then(v => {
      ret[i] = [i, v];
      length--;
      if (length === 0) {// key

        return cb(ret);
      }else{
        dispatchTask();
      }
    })

  }

  while (k--) {
    dispatchTask();
  }

};


fetchAsync(['https://httpbin.org/get', 'https://httpbin.org/get', 'https://httpbin.org/get', 'https://httpbin.org/get', 'https://httpbin.org/get', 'https://httpbin.org/get'], 2, console.log);