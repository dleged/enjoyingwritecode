/**
 * 1. context 不存在为 window
 * 2. context.fn 赋值为 this
 * 3. 执行 this 函数
 * 4. 删除 context.fn
 * 5. 返回执行结果
 */

Function.prototype.apply = function (context, args) {

  const result = null;
  context = context || window;
  context.fn = this;
  if (args && args.length) {
    result = context.fn(args);
  } else {
    result = context.fn();
  }
  return result;

}