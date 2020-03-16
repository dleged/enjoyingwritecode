function asyncPromise(limt,array,iterator){
    let index = 0;
    let result = [];//promise 结果集
    let executing = [];// 当前执行的promise

    function queue(){
         if (index === array.length) {//所有的都执行完毕
            return Promise.resolve();
        }
        let item = array[index++];

        let p = Promise.resolve().then(() => iterator(item));
        result.push(p);

        let e = p.then((i) => {//执行promise    *A
            executing.splice(executing.indexOf(e),1);
        });

        executing.push(e);

        r = Promise.resolve();
        if(executing.length >= limt){
            r = Promise.race(executing);//优先返回执行的promise
        }
        return r.then(() => queue());//先执行完的，同时*A也是执行完的(同一个promise pending状态），进行下一个递归
    }

    return queue().then(() => Promise.all(result));
}

function promiseIterator(i){
    return new Promise((resolve,reject) => setTimeout(() => {
        resolve(i);
        console.log('执行完',i)
    },i));
}

asyncPromise(2,[1000,8000,2000,1000,5000,1500],promiseIterator).then(console.log);