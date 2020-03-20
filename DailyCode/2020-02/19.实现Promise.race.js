//设计并实现 Promise.race()

//先看看Promise.race的用法；传入一个promise数组，返回最先执行的promise

const promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function (value) {//执行最快返回的promise
    console.log(promise1,promise2);
    console.log(value);
    // Both resolve, but promise2 is faster
});
setTimeout(() => {
    console.log(promise1,promise2);
},1000)




//自定义
Promise._race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((v) => {
            if (v instanceof Promise) {
                Promise.resolve(v).then(() => {
                    resolve(v);
                });
            }else{
                v.then((value) => {
                    resolve(value);
                })
            }
        })
    });
}

Promise._race([promise1, promise2]).then(function (value) {//执行最快返回的promise
    console.log(promise1,promise2);
    console.log(value);
    // Both resolve, but promise2 is faster
});

setTimeout(() => {
    console.log(promise1,promise2);
},1000)