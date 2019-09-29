//实现类的继承

function inherit(ChildClass,supCalss){
  ChildClass.prototype = Object.create(supCalss.prototype);
  ChildClass.constructor = supCalss;
  return ChildClass;
}

function SupCalss(name,age){
  this.name = name || '前端';
  this.age = age || 18;

  this.eat = function(){
    console.log(`my name is ${name},i like eat`);
  }
}

SupCalss.prototype.say = function(){
  console.log(`my name is ${name},age is ${this.age}`);
}

function ChildClass(){
    SupCalss.call(this);
}

var child = new ChildClass('yimu',18);

console.log(child);
console.log(child instanceof ChildClass); //true
console.log(child instanceof SupCalss);   //true

child.say();
child.eat();
