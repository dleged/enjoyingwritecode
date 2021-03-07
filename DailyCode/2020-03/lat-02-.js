// 如下为一段代码，请完善sum函数，使得 sum(1,2,3,4,5,6) 函数返回值为 21 ,
// 需要在 sum 函数中调用 asyncAdd 函数，且不能修改asyncAdd函数

/**
 * 请在 sum函数中调用此函数，完成数值计算
 * @param {*} a 要相加的第一个值
 * @param {*} b 要相加的第二个值
 * @param {*} callback 相加之后的回调函数
 */
function asyncAdd(a,b,callback) {
  setTimeout(function(){
   callback(null, a+b)
  },100)
}

/**
 * 请在此方法中调用asyncAdd方法，完成数值计算
 * @param  {...any} rest 传入的参数
 */
async function sum(...rest) {
  // 请在此处完善代码

  function callback(n,val){
    resolve(val);
  }

 rest.reduce((acc,cur) => {
   asyncAdd(0,acc,callback);
 },0);
  
}

let start = window.performance.now()
sum(1, 2, 3, 4, 5, 6).then(res => {
  // 请保证在调用sum方法之后，返回结果21
  console.log(res)
  console.log(`程序执行共耗时: ${window.performance.now() - start}`)
})
