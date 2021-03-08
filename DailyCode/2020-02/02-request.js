//function request(urls, maxNumber, callback) 要求编写函数实现，
//根据urls数组内的url地址进行并发网络请求，最大并发数maxNumber,
//当所有请求完毕后调用callback函数(已知请求网络的方法可以使用fetch api)

let api = new Promise((resolve,reject) => setTimeout(() => resolve('api'),1000));
let index = -1;
let urls = []
while(++index < 10){
    urls[index] = api;
}

function request(urls, maxNumber, callback){
    let length = urls.length;
    let split = Math.ceil(length/maxNumber);
    let i = 0;
    let result = [];

    let promiseAll = (i) => {
        Promise.all(urls.slice(maxNumber * i,maxNumber*(i+1))).then((res) => {
            result = result.concat(res);
            if(i >= split - 1){
                callback(result);
            }else{
                ++i;
                promiseAll(i);
            }
        })
    }
    promiseAll(i); 
}

request(urls,3,console.log)



class RequestDecorator {
    public maxLimit;
    public requestQueue: { _resolve: (value?: unknown) => void; id: string | number }[];
    public currentConcurrent: number;
    constructor({ maxLimit = 5 }) {
      // 最大并发量
      this.maxLimit = maxLimit;
      // 请求队列,若当前请求并发量已经超过maxLimit,则将该请求加入到请求队列中
      this.requestQueue = [];
      // 当前并发量数目
      this.currentConcurrent = 0;
    }
    // 发起请求api
    public request(args, id) {
      // 若当前请求数并发量超过最大并发量限制，则将其阻断在这里。
      // startBlocking会返回一个promise，并将该promise的resolve函数放在this.requestQueue队列里。这样的话，除非这个promise被resolve,否则不会继续向下执行。
      // 当之前发出的请求结果回来/请求失败的时候，则将当前并发量-1,并且调用this.next函数执行队列中的请求
      // 当调用next函数的时候，会从this.requestQueue队列里取出队首的resolve函数并且执行。这样，对应的请求则可以继续向下执行。
      if (this.currentConcurrent >= this.maxLimit) {
        return this.startBlocking(id).then(() => {
          return this.ajax(args);
        });
      } else {
        return this.ajax(args);
      }
    }
  
    public ajax(args) {
      try {
        this.currentConcurrent++;
        // @ts-ignore
        return axios(args).then((result: any) => {
          this.currentConcurrent--;
          this.next();
          return Promise.resolve(result);
        });
      } catch (err) {
        return Promise.reject(err);
      }
    }
    // 新建一个promise,并且将该reolsve函数放入到requestQueue队列里。
    // 当调用next函数的时候，会从队列里取出一个resolve函数并执行。
    public startBlocking(id: number | string) {
      let _resolve: (value?: unknown) => void;
      const promise2 = new Promise((resolve, reject) => (_resolve = resolve));
      // @ts-ignore
      this.requestQueue.push({ _resolve, id });
      return promise2;
    }
    // 从请求队列里取出队首的resolve并执行。
    public next() {
      if (this.requestQueue.length <= 0) {
        return;
      }
      const { _resolve } = this.requestQueue.shift() || {};
      if (_resolve) {
        _resolve();
      }
    }
  
    public abortUpload(id: number | string) {
      this.requestQueue = this.requestQueue.filter((it) => it.id !== id);
      this.currentConcurrent = 0;
      this.next();
    }
  }