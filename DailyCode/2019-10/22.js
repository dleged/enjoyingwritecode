//原型
class Persion{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  sayName(){
    console.log(this.name);
  }
  sayAge(){
    console.log(this.age);
  }
}

var p1 = new Persion('yimu',18);
var p2 = new Persion('erha',8);

p1.sayName();
p2.sayName();

console.log(p1.__proto__ === p2.__proto__ === Persion.prototype); // true
console.log(p1.constructor === p2.constructor === Persion); // true
console.log(Persion.prototype.constructor === Persion);// true
console.log(Persion.prototype.isPrototypeOf(p1));// true
console.log(Persion.prototype.isPrototypeOf(p1));// true
console.log(Object.getPrototypeOf(p1) === Persion.prototype);// true

console.log(Persion.prototype.sayName === p1.sayName);//true 实例方法和
console.log(Persion.prototype.name === p1.name);//
