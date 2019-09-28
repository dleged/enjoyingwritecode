//踢球累了，睡觉
Function.prototype._bind = function(context){
  let _this = [].shift.argumets.call(argumets);
  let args = argumets;
  if(typeof context !== 'function') return throw console.error('argument must be a function!');

  let fn = function(arguments){
    context.apply(typeof this === fn ? tihs : _this,args.concat([].shift.call(arguments));
  }

  

  return fn
}

var name = 'yimu';

function exmple(){
  console.log(this.name);
}

exmple.bind(window)(); //yimu
exmple._bind(window)();
