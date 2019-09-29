//踢球累了，睡觉
Function.prototype._bind = function(context){
  let _this = [].shift.call(arguments);
  let args = [].slice.call(arguments);
  let target = this;
  if(typeof this !== 'function') {throw new TypeError('argument must be a function!')};

  let tempFn = function(){};
  let bindFn = function(){
    target.apply(typeof this === bindFn ? tihs : _this, _this,args.concat([].shift.call(arguments)));
  }
  //如果this存在原型，则需要保存
  if(this.prototype){
    tempFn.prototype = this.prototype;
  }

  bindFn.prototype = new tempFn();
  return bindFn;
}


var name = 'yimu';
function exmple(){
  console.log(this.name);
}

// exmple.bind(window)(); //yimu
exmple._bind(window)();
