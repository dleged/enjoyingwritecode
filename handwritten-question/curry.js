
function curry(fn,...args){
  let argLength = fn.length;
  function curried(){
    if(arguments.length >= fn.length){
      return fn.apply(this,arguments);
    }else{
      return curried.bind(this,...arguments);
    }
  }
  return curried;
}

// 测试
function sum (a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum)
console.log(curriedSum(1)(2,3))
console.log(curriedSum(1)(2)(3)) 