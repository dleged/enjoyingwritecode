//实现call

function exmple(name,age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name);
  }
  return `my name is ${name},${age} old!`;
}

Function.prototype._call = function(context){
  //context第一个参数，传如的对象；
  context = context || window;
  //this为当前函数，将函数作为传入对象的属性；
  context.fn = this;
  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }
  console.log(args)
  //context.fn调用的时候，o去执行exmple函数，exmple内部的this即代表o；
  //故实现了函数的作用域（指向）
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

let o = new Object();
exmple._call(o,'yimu',18);
