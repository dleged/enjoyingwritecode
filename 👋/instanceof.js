// instanceof 判断实力在不在对象的原型上

function instanceofFn(ins,target) {

  //在 ES5 中，如果参数不是一个对象类型，将抛出一个TypeError异常。在 ES2015 中，参数会被强制转换为一个 Object。
  let proto = Object.getPrototypeOf(ins);

  //获取对象的原型
  let prototype = target.prototype;

  while (prototype){

    if(!proto) return false;
    if(proto === prototype) return true;

    prototype = Object.getPrototypeOf(prototype);
  }

  return false;

}

console.log('str' instanceof String);
console.log(instanceofFn('str',String));