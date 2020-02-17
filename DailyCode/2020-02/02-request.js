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