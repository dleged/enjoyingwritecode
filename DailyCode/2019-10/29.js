//最佳实现继承方式
//寄生组合继承

function SuperType(name){
  console.log('%c调用了SuperType','color: red');
  this.name = name;
}

SuperType.prototype.setName = function(name){
  this.name = name;
  return this;
}
SuperType.prototype.sayName = function(){
  return this.name;
}

function SubType(name){
  SuperType.call(this,name); //执行Super的构造函数，赋值实例属性和方法；
}

function inherit(subType,superType){
  function instance(){}
  //??? why do that;
  //这个例子的高效率体现在它只调用了一次superType构造函数，
  //并且避免了在subType.prototype上创建不必要的属性。与此同时，原型链还能保持不变，
  //因此可以正常使用instanceof()和isPrototypeOf()。
  //寄生式组合继承是引用类型最理想的继承范式。
  instance.prototype = SuperType.prototype; //新函数的prototype被重载为Super的实例；
  subType.prototype = new instance(); //子类的原型指向新函数的实例
  subType.prototype.constructor = subType;
}
inherit(SubType,SuperType);

let subType = new SubType('first');
console.log(subType.sayName());
console.log(subType.setName('seconed').sayName());

console.log(subType instanceof Object);//true
console.log(subType instanceof SubType);//true
console.log(subType instanceof SuperType);//true

console.log(subType.sayName === SuperType.prototype.sayName);//true
