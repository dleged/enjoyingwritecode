// instanceof 判断实例子在不在对象的原型上
//在 ES5 中，如果参数不是一个对象类型，将抛出一个TypeError异常。在 ES2015 中，参数会被强制转换为一个 Object。

function instanceofFn(ins, target) {

  let insProp = Object.getPrototypeOf(ins);

  let targeProp = target.prototype;

  while (targeProp) {

    if (!proto) { return false; }
    if (insProp === targeProp) {
      return true;
    }
    targeProp = Object.getPrototypeOf(targeProp);

  }

  return false;
}


console.log('str' instanceof String);
console.log(instanceofFn('str', String));
