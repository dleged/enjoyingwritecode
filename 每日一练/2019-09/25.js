//实现call

function exmple(name,age){
  return `my name is ${name},${age} old!`;
}

Function.prototype._call = function(context){
  context = context || window;
  context.fn = this;

  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(arguments[i]);
  }
console.log(args)
  let result = context.fn(...args);
  delete context.fn;
  return result;
}


exmple._call(null,'yimu',18);
