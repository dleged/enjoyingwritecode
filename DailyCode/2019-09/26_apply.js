//实现apply
function exmple(name,age){
  return `my name is ${name},${age} old!`;
}

Function.prototype._apply = function(contex){
  contex = contex || window;
  contex.fn = this;
  let arg = arguments[1] || [];
  // for(let i = 1,len = arguments.length; i < len; i++){
  //   arg.push(arguments[i])
  // }

  let result = contex.fn(...arg);
  delete contex.fn;
  return typeof result === 'object' ? result : this;
}

exmple._apply(null,['yimu',18]);
