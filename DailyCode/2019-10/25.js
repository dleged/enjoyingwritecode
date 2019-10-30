//构造函数模式

function CreateCar(name = 'car',color = 'black'){
  this.name = name;
  this.color = color;
  this.running = function(){
    console.log(`%c a ${this.color} ${this.name} is running 🚗🚗🚗。。。`,`color: ${this.color}`);
    return this;
  }
}

let bwa = new CreateCar('BWM','red');
bwa.running();

let benz = new CreateCar('BENZ','yellow');
benz.running();

let audi = new CreateCar('AUDI','blue');
audi.running();

console.log(bwa.running === benz.running); //false
console.log(bwa.constructor === benz.constructor); //true

/*
  new 关键字创建对象的4个过程；
  1.隐式创建一个对象；
  2.将构造函数的作用域赋值给新对象（将this指向这个新对象）；
  3.执行构造函数中的代码（为新对象添加属性）；
  4.返回新对象；

  创建的对象属性和方法都不是共用的，显然相同功能的方法，创建了多个方法是浪费资源的
  构造器是共用的
*/
