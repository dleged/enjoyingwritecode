//组合继承

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

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;

let subType = new SubType('first');
console.log(subType.sayName());
console.log(subType.setName('seconed').sayName());

console.log(subType instanceof Object);//true
console.log(subType instanceof SubType);//true
console.log(subType instanceof SuperType);//true

console.log(subType.sayName === SuperType.prototype.sayName);//true
