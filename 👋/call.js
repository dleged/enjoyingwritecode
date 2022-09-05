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
  context.fn = this;
  const result = context.fn(...arguments);
  delete context.fn;
  return result;
}


