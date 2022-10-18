/**
 * 1. context 不存在为 window
 * 2. context.fn 赋值为 this
 * 3. 执行 this 函数
 * 4. 删除 context.fn
 * 5. 返回执行结果
 */

Function.prototype.MyCall = function () {
  let context = Array.prototype.slice(arguments, 0, 1);
  context = context || window;
  context = Object(context);// 原生传入 number 类型 会转换为 Number {1}
  context.fn = this;
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}



function origin(a, b) {
  console.log(this.name, a, b);
}


// arguments: this,...args
Function.prototype._call = function () {
  let [context, ...args] = arguments;
  context = context || window;
  context.fn = this;
  console.log(this)
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

let targe = {
  name: 'target'
}


origin._call(targe, 1, 2);