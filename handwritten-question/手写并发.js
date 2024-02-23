// 给定一个url数组，实现一个函数，要求在最大并发数K下完成fetch操作，所有请求完成后调用回调函数cb
// 注意1：fetch返回一个promise，fetch("data.json").then().catch()
// 注意2：无需处理请求结果及异常的情况
// https://www.xiabingbao.com/post/promise/promise-concurrency-limit-rg10kz.html

function request(urls, limit) {

  return new Promise((resolve, reject) => {

    let fetchCount = 0;// 执行计数器
    const ret = [];
    let count = 0;// 执行的个数

    function run() {

      for (let i = 0; i < limit; i++) {
        start(urls[i],i);
      }
    }

    function start(url,i) {

      if (count >= limit) {
        return;
      }

      if (fetchCount >= urls.length) {
        return resolve(ret);
      }

      if (fetchCount < urls.length) {
        fetchUrl(url, fetchCount,i);
        count++;
        fetchCount++;
      }

    }

    function fetchUrl(url, fetchUrl,i) {
      fetch(url).then((res) => {
        count--;
        ret[fetchUrl] = [i,res];
        start(urls[fetchUrl]);
      })
    }

    run();

  });

}



request(['https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis'
  , 'https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis', 'https://api.github.com/emojis'], 3).then(console.log);