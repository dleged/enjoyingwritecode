// // // compose

// // 要求： 实现一个功能，传入一个数组，数组要过滤掉为 0 的数值，返回剩余每一项 * 2 后的新数组


// function filterZeroAndMultiply2(arr,moveZero){
//   let ret = [];
  
//   for(let i = 0;i<arr.length;i++){
//     if(arr[i] || !moveZero){
//       ret.push(arr[i]*2)
//     }
//   }
  
//   return ret;
// }

// const arr = [0,1,2,3,4,5,6];
// console.log(filterZeroAndMultiply2(arr),false);

// // 不需要排除 0

// // 有需要再乘以 3，不好扩展了

// const filterZero = (arr) => arr.filter(item => item !== 0);
// const multiplyWithNum = (num) => (arr) => arr.map(item => item * num);
// const minusWithNum = (num) => (arr) => arr.map(item => item - num);

// const multiplyWith2 = multiplyWithNum(2);
// const multiplyWith3 = multiplyWithNum(3);
// const minusWith2 = minusWithNum(2);

// const compose = (...rest) => (arr) => rest.reduce((arr,item) => item(arr),arr);

// console.log(compose(filterZero,multiplyWith2,multiplyWith3,minusWith2)(arr),false);


// 实现 new

// function createNew(Father){
//   if(typeof Father !== 'function'){
//     throw new Error('first param must be a function!');
//   }
  
//   const proto = Object.create(Father.prototype);
//   const result = Father.call(proto);
  
//   return result && typeof result === 'object' && result !== null ? result : proto;
// }

// function Person(){}

// Persion.prototype.constructor === Person;

// p.__proto__ === Person.prototype


// promise all
// Promise._all = function(promises){

//   return new Promise(function(resolve,reject){
    
//     if(!Array.isArray(promises)){
//       return reject(new Error('first param must be a function'));
//     }

//     let ret = [];
//     let count = 0;

//     for(let i = 0;i<promises.length;i++){
//       Promise.resolve(promises[i]).then(function(value){
//         count++;
//         ret[i] = value;
//         if(count === promises.length){
//           resolve(ret);
//         }
//       }).catch(reject);
//     }

//   });
// }


// const promiseGenertor = (num) => Array(num).fill(0).map((_,index) => {
//   return new Promise(function(resolve,reject){
//       setTimeout(() => resolve(index),Math.random() * 1000);
//   });
// })

// const promises = promiseGenertor(10);

// Promise._all(promises).then(console.log);


// const promiseFnucGenerator = (num) => 
//   Array(num)
//     .fill(0)
//     .map((_,index) => () => {
//       return new Promise(function(resolve,reject){
//         setTimeout(() => {
//           resolve(index);
//           console.log(index)
//         },Math.random() * 1000);
//       })
//     })


// const promiseFuncs = promiseFnucGenerator(10);

// const promiseChain = (promiseFuncs) => {
//   return promiseFuncs.reduce((pre,item) => {
//     return pre.then((res) => item());
//   },Promise.resolve(-1));
// }

// promiseChain(promiseFuncs);


// 实现一个 promise 并发调度器


// class PromiseDispatcher{
  
//   constructor(limit){
//     this.limit = limit || 3;
//     this.count = 0;
//     this.taskQueue = [];
//   }
  
//   addTask(promise){
//     if(this.count < this.limit){
      
//       this.runTask(promise);
//       this.count++;
//     }else{
//       this.taskQueue.push(promise);
//     }
    
//   }
  
//   runTask(promise){
//     promise().then(this.complete.bind(this)).catch(this.complete.bind(this));
//   }
  
//   complete(value){
//     this.count--;
//     console.log(value);
//     const promise = this.taskQueue.shift();
//     if(promise){
//       this.addTask(promise);
//     }
//   }
  
// }

// const promiseDispatcher = new PromiseDispatcher(2);

// for(let i = 0;i<10;i++){
//   promiseDispatcher.addTask(() => new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(i)
//       },Math.random() * 5000);
//     }))
// }

// const promiseFnucGenerator = (num) => 
//   Array(num)
//     .fill(0)
//     .map((_,index) => () => {
//       return new Promise(function(resolve,reject){
//         setTimeout(() => {
//           resolve(index);
//           console.log(index)
//         },index * 1000);
//       })
//     });


// function promiseScheduler(promiseArr,limit){
  
//   function run(){
//     const promise = promiseArr.shift();
    
//     if(promise){
//       promise().then(() => {
//         promiseArr.length && run();
//       }) 
//     }
//   }
  
//   for(let i = 0;i<limit;i++){
//     run();
//   }
  
// }


// promiseScheduler(promiseFnucGenerator(10),5)


// 手写promise abort
// let p = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    resolve(123);
// }, 3000);
// })
// function wrap(promise){
  
//   let abort;
  
//   const newPromise = new Promise((resolve,reject) => {
//      abort = reject
//   })
  
//   p = Promise.race([newPromise,promise])
//   p.abort = abort;
//   return p;
// }
// let p1 = wrap(p);
// setTimeout(() => {
//  // 让这个promise 变成失败态
//  p1.abort('超过2s了');
// }, 2000);
// p1.then(data => {
//  console.log(data);
// }).catch(err => {
//  console.log(err);
// });



// 深拷贝

// function deepClone(source){
  
//   if(typeof source !== 'object'){return source}
//   if(source == undefined){
//     return source;
//   }
  
//   let dist = {};
//   let queue = [{target: dist,source}];
//   let map = new Map();
//   map.set(source,dist);
  
//   function clone(source){
    
//     if(typeof source !== 'object'){return source}
//     if(source == undefined){
//       return source;
//     }
    
//     let dist = {};
//     if(source instanceof Array){
//        dist = [];
//     }else if(source instanceof Function){
//       dist = new Function('return '+source.toString())();
//       // dist = source.prototype.bind({})
//     }else if(source instanceof Date){
//       dist = new Date(source);
//     }else if(source instanceof RegExp){
//       dist = new RegExp(source.source,source.flags);
//       dist.lastIndex = source.lastIndexIn;
//     }else if(source instanceof Symbol){
//       dist = Object(Symbol.prototype.valueOf.call(source));
//     }else if(source instanceof Map){
//       dist = new Map(source);
//     }else if(source instanceof Set){
//       dist = new Set(source);
//     }
//     return dist;
//   }
  
//   while(queue.length){
//     const {target,source} = queue.shift();
    
//     for(let key in source){
//       if(source.hasOwnProperty(key)){
//         if(map.has(source[key])){
//            target[key] = map.get(source[key]);
//         }else{
//           if(typeof source[key] === 'object'){
//             target[key] = clone(source[key]);
//             map.set(source[key],target[key]);
//             queue.push({target: target[key],source: source[key]});
//           }else{
//             target[key] = source[key];
//           }
//         }
//       }
//     }
//   }
  
//   return dist;
// }


// let source = {
//   a: 1,
//   b: 2,
//   c: [1,2,3],
//   date: new Date(),
//   regExp: /\d/g,
//   function: function(){console.log('this is hello world')},
//   map: new Map(),
// }

// source.circulate = source;
// let target = deepClone(source);
// console.log(target);
// source.a = 11
// source.c.push(4);
// console.log(target);
// console.log(source);